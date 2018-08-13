var db = firebase.firestore(); // Firestore
/*
let video = document.querySelector('#camera-stream'),
  image = document.querySelector('#snap'),
  continue2 = document.querySelector('#continue'),
  controls = document.querySelector('.controls'),
  take_photo_btn = document.querySelector('#take-photo'),
  delete_photo_btn = document.querySelector('#delete-photo'),
  download_photo_btn = document.querySelector('#download-photo'),
  nombreTerm = document.querySelector('#nombreTerm'),
  error_message = document.querySelector('#error-message');

let visitor = localStorage.getItem('userName');
let worker = localStorage.getItem('worker');
let mail = localStorage.getItem('mail');

  
// Utilizamos la funcion getUserMedia para obtener la salida de la webcam
navigator.getMedia = (navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia);


if (!navigator.getMedia) {
  displayErrorMessage('Tu navegador no soporta la funcion getMedia.');
} else {
  // Solicitamos la camara
  navigator.getMedia(
    {
      video: true
    },
    function(stream) {
      // A nuestro componente video le establecemos el src al stream de la webcam
      video.src = window.URL.createObjectURL(stream);

      // Reproducimos
      video.play();
      video.onplay = function() {
        showVideo();
      };
    },
    function(err) {
      displayErrorMessage('Ocurrio un error al obtener el stream de la webcam: ' + err.name, err);
    }
  );
}


// En los moviles no se puede reproducir el video automaticamente, programamos funcionamiento del boton inicar camara
continue2.addEventListener('click', function(e) {
  e.preventDefault();

  // Reproducimos manualmente
  video.play();
  showVideo();
});


take_photo_btn.addEventListener('click', function(e) {
  getPhoto(e);
  uploadData();
  setTimeout((event) => {
    location.href = 'ultima.html';
  }, 2000);
});

const uploadData = () => {
  console.log(visitor, worker, mail);
  db.collection('visitantes').add({
    user: visitor, // ID del usuario logeado
    worker: worker, // Texto del post
    mail: mail, // Nombre del usuario
    photo: 'just'
  });
};

const getPhoto = (e) => {
  e.preventDefault();

  var snap = takeSnapshot();

  // Mostramos la imagen
  image.setAttribute('src', snap);
  image.classList.add('visible');

  // Activamos los botones de eliminar foto y descargar foto
  delete_photo_btn.classList.remove('disabled');
  download_photo_btn.classList.remove('disabled');

  // Establecemos el atributo href para el boton de descargar imagen
  download_photo_btn.href = snap;

  // Pausamos el stream de video de la webcam
  video.pause();
};


delete_photo_btn.addEventListener('click', function(e) {
  e.preventDefault();

  // Ocultamos la imagen
  image.setAttribute('src', '');
  image.classList.remove('visible');

  // Deshabilitamos botones de descargar y eliminar foto
  delete_photo_btn.classList.add('disabled');
  download_photo_btn.classList.add('disabled');

  // Reanudamos la reproduccion de la webcam
  video.play();
});


function showVideo() {
  // Mostramos el stream de la webcam y los controles

  hideUI();
  video.classList.add('visible');
  controls.classList.add('visible');
}


function takeSnapshot() {
  var hidden_canvas = document.querySelector('canvas'),
    context = hidden_canvas.getContext('2d');

  var width = video.videoWidth,
    height = video.videoHeight;

  if (width && height) {
    // Configuramos el canvas con las mismas dimensiones que el video
    hidden_canvas.width = width;
    hidden_canvas.height = height;

    // Hacemos una copia
    context.drawImage(video, 0, 0, width, height);

    // Convertimos la imagen del canvas en datarurl
    return hidden_canvas.toDataURL('image/png');
  }
}


function displayErrorMessage(error_msg, error) {
  error = error || '';
  if (error) {
    console.log(error);
  }

  error_message.innerText = error_msg;

  hideUI();
  error_message.classList.add('visible');
}


function hideUI() {
  // Limpiamos

  controls.classList.remove('visible');
  continue2.classList.remove('visible');
  video.classList.remove('visible');
  snap.classList.remove('visible');
  error_message.classList.remove('visible');
}

*/
const video = document.getElementById('video'),
  canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  photo = document.getElementById('photo');

let vendorURL = window.URL || navigator.webkitURL;

const takePicture = () => {
  navigator.getMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;

  navigator.getMedia({
    video: true,
    audio: false
  }, (stream) => {
    video.src = vendorURL.createObjectURL(stream);
    console.log(video);
    video.play();
  }, (error) => {
    console.log(error.code);
  });
    
  document.getElementById('capture').addEventListener('click', el => {
    context.drawImage(video, 0, 0, 380, 300);
    photo.setAttribute('src', canvas.toDataURL('image/png'));
    let savePhoto = photo.src;
    localStorage.setItem('photo', savePhoto);
  });
};
takePicture();

let visitor = localStorage.getItem('userName');
let worker = localStorage.getItem('worker');
let mail = localStorage.getItem('mail');
let uploader = document.getElementById('uploader');
let fileButton = document.getElementById('fileButton');
let file = '';
var storage = firebase.storage();


fileButton.addEventListener('click', el => {
  file = localStorage.getItem('photo');
  console.log(file);
  uploadData();


  //  mrBig.innerHTML = `<img src='file'>`
  /*  alert('works');
  var file = localStorage.getItem('photo');
  console.log(file);
  

  var storageRef = storage.ref('sweet_gifs/' + file.name);

  var task = storageRef.put(file);*/

  /*
  task.on('state_changed', 
    function progress(snapshot) {
      var percentage = (snapshot.bytesTransferred / 
        snapshot.totalBytes) * 100;
      uploader.value = percentage;
    }
  ); */
});

const uploadData = () => {
  console.log(visitor, worker, mail);
  db.collection('visitantes').add({
    user: visitor, // ID del usuario logeado
    worker: worker, // Texto del post
    mail: mail, // Nombre del usuario
    photo: file
  });
};