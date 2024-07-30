// show.js
const recruitmentContainer = document.getElementById('recruitments-container');

firebase.database().ref('recruitments').on('value', (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const newsData = childSnapshot.val();
    const newsHTML = `
    <div class="box">
      <div class="news-box">
        <h2 class="object">${newsData.object}</h2>
        <p class="content">${newsData.content}</p>
        <p class="writer">${newsData.mail}</p>
       </div>
        <button class="delete-button" data-key="${childSnapshot.key}">Supprimer</button>
        <hr class="bottom-line"/>
      </div>
    `;
    recruitmentContainer.innerHTML += newsHTML;
  });
});

recruitmentContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-button')) {
    const key = e.target.getAttribute('data-key');
    firebase.database().ref('recruitments').child(key).remove();
    window.location.reload();
  }
});