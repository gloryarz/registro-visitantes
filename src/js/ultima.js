const workerName = document.getElementById('workerName');
let worker = localStorage.getItem('worker');

workerName.innerHTML = worker;

setTimeout((event) => {
    location.href = 'ultima.html';
  }, 8000);