const workerName = document.getElementById('workerName');
const visitorName = document.querySelector('#visitorName');
let worker = localStorage.getItem('worker');
let visitor = localStorage.getItem('userName');

visitorName.innerHTML = visitor;
workerName.innerHTML = worker;

setTimeout((event) => {
  location.href = '../../index.html';
}, 8000);

