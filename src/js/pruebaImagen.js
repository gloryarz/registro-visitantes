let uploader = document.getElementById('uploader');
let fileButton = document.getElementById('fileButton');
var storage = firebase.storage();


fileButton.addEventListener('change', el => {
  var file = el.target.files[0];

  var storageRef = storage.ref('sweet_gifs/' + file.name);

  var task = storageRef.put(file);

  task.on('state_changed', 
    function progress(snapshot) {
      var percentage = (snapshot.bytesTransferred / 
        snapshot.totalBytes) * 100;
      uploader.value = percentage;
    }


  );
});


/*
// Listen for file selection 

fileButton.addEventListener('click', el => {
  // Get File
  let file = e.target.files[0];

  // Create a storage ref
  var storageRef = storage.ref();
  var imagesRef = storageRef.child('images/spaces.jpg');

  // Upload file
  var task = storageRef.put(file);
  // Update progress bar
  task.on('state_changed',
    function progress(snapshot) {
      let percentage = (snapshot.bytesTransferred /
            snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },
    function error(err) {

    },
    function complete() {

    }

  );
});*/