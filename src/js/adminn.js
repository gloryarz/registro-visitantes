const btnentrar = document.getElementById('btnInicio');

const entrar = () => {
  const email1 = document.getElementById('email').value;
  const password1 = document.getElementById('password').value;
  localStorage.setItem('email', email);
  firebase.auth().signInWithEmailAndPassword(email1, password1)
    .then(function() {
      // promise.catch(console.log(e.message));
      window.location.href = 'admin.html';
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('Verifica tus datos');
      // ...
    });
};
btnentrar.addEventListener('click', entrar);
