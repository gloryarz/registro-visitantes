const userName = document.getElementById('user-Name');
const userVisit = document.getElementById('user-visit');
const bttnContinue = document.getElementById('continue');

bttnContinue.addEventListener('click', (e) => {
 e.preventDefault(e);
 let newUser = userName.value;
window.location.href = '/src/views/foto.html';

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
