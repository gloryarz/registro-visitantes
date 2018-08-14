const userName = document.getElementById('user-Name');
const userVisit = document.getElementById('user-visit');
const bttnContinue = document.getElementById('continue');
const userMail = document.getElementById('user-Mail');

let nameWork = 'Laura Ruíz';
let mailTrial = 'laura.unam.ents@gmail.com';

localStorage.setItem('worker', nameWork);
localStorage.setItem('mail', mailTrial);

bttnContinue.addEventListener('click', (el) => {
  el.preventDefault(el);
  let newUser = userName.value;
  let visitorMail = userMail.value;
  localStorage.setItem('userName', newUser);
  localStorage.setItem('visitorMail', visitorMail);
  window.location.href = 'foto.html';

  if (form.checkValidity() === true) {
    let fbRef = fb.collection('user').add({
      name: userNameValue,
    }).then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
      .catch(function(error) {
        console.error('Error', error);
      });
    window.location.href = 'foto.html';
  } else {
    form.reportValidity();
  }
});