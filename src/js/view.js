const userName = document.getElementById('user-Name');
const userVisit = document.getElementById('user-visit');
const bttnContinue = document.getElementById('continue');

let nameWork = 'Lau';
let mailTrial = 'lau@gmail.com';

localStorage.setItem('worker', nameWork);
localStorage.setItem('mail', mailTrial);

bttnContinue.addEventListener('click', (e) => {
  e.preventDefault(e);
  let newUser = userName.value;
  localStorage.setItem('userName', newUser);
  window.location.href = '../src/views/foto.html';

  if (form.checkValidity() === true) {
    let fbRef = fb.collection('user').add({
      name: userNameValue,
    }).then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
      .catch(function(error) {
        console.error('Error', error);
      });
    window.location.href = 'views/foto.html';
  } else {
    form.reportValidity();
  }
});
