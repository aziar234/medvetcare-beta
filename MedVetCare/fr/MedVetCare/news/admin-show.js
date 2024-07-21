// show.js
const newsContainer = document.getElementById('news-container');

firebase.database().ref('news').on('value', (snapshot) => {
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
    newsContainer.innerHTML += newsHTML;
  });
});

newsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-button')) {
    const key = e.target.getAttribute('data-key');
    firebase.database().ref('news').child(key).remove();
    window.location.reload();
  }
});