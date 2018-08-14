var db = firebase.firestore();
const bodyTable = document.getElementById('bodyTable');

// Se obtienen mensajes de firestore
db.collection('visitantes').onSnapshot((querySnapshot) => {
  bodyTable.innerHTML = '';
  querySnapshot.forEach((doc) => {
    let visitorID = doc.id; // ID del visitante
    let visitorMail = doc.data().mail; // Mail del visitante
    let visitorPhoto = doc.data().photo; // URI foto del visitante
    let workerName = doc.data().worker; // Nombre del trabajador
    let visitorName = doc.data().user; // Nombre del visitante
    let visitTime = doc.data().time; // Hora
    let visitDate = doc.data().date; // Fecha
    showData(visitorMail, visitorName, workerName, visitorPhoto, visitTime, visitDate);
  });
});

const showData = (visitorMail, visitorName, workerName, visitorPhoto, visitTime, visitDate) => {
  bodyTable.innerHTML += ` <tr>
  <th scope="row"><img src='${visitorPhoto}' class="photos"></th>
  <td><strong>${visitorName}</strong> <span class="block"> Correo: ${visitorMail}</span></td>
  <td>${workerName}</td>
  <td>${visitTime}</td>
</tr>`;
};
