var db = firebase.firestore();
const bodyTable = document.getElementById('bodyTable');

// Se obtienen mensajes de firestore
db.collection('visitantes').onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    let visitorID = doc.id; // ID del visitante
    let visitorMail = doc.data().mail; // Mail del visitante
    let visitorPhoto = doc.data().photo; // URI foto del visitante
    let workerName = doc.data().worker; // Texto del post
    let visitorName = doc.data().user; // ID del usuario logeado
    showData(visitorMail, visitorName, workerName, visitorPhoto);
  });
});

const showData = (visitorMail, visitorName, workerName, visitorPhoto) => {
  bodyTable.innerHTML += ` <tr>
  <th scope="row"><img src='${visitorPhoto}'></th>
  <td>${visitorName} ${visitorMail}</td>
  <td>${workerName}</td>
  <td>@mdo</td>
</tr>`;
};

