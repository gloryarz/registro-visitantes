var db = firebase.firestore(); // Firestore

window.onload = () => {
  takePicture();
};

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
    file = localStorage.getItem('photo');
    uploadData();
    setTimeout((event) => {
      location.href = 'ultima.html';
    }, 2000);
  });
};


let visitor = localStorage.getItem('userName');
let worker = localStorage.getItem('worker');
let mail = localStorage.getItem('mail');
let visitantMail = localStorage.getItem('visitorMail');
let uploader = document.getElementById('uploader');
let fileButton = document.getElementById('fileButton');
const newDates = new Date();
let time = newDates.toLocaleTimeString();
let date = newDates.toLocaleDateString();
console.log(date, time);
let file = '';
var storage = firebase.storage();

const uploadData = () => {
  console.log(visitor, worker, mail);
  db.collection('visitantes').add({
    user: visitor, // ID del usuario logeado
    worker: worker, // Texto del post
    mail: mail, // Nombre del usuario
    photo: file, // Foto del usuario
    time: time, // Tiempo de registro
    date: date,
    vMail: visitantMail// Fecha de registro
  });
};