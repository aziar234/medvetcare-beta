// show.js
const firebaseConfig = {
    apiKey: "AIzaSyCmmBaqROV4WT__S6mJviBB3MWEptpWzFI",
    authDomain: "medvetcare-news.firebaseapp.com",
    databaseURL: "https://medvetcare-news-default-rtdb.firebaseio.com",
    projectId: "medvetcare-news",
    storageBucket: "medvetcare-news.appspot.com",
    messagingSenderId: "807330603621",
    appId: "1:807330603621:web:a6eb31cbdc52f3a9469c8c",
    measurementId: "G-RKC57WYXP0"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const newsContainer = document.getElementById('news-container');
  
  db.ref('news').on('value', (snapshot) => {
    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
      if (snapshot.exists()) {
        newsContainer.innerHTML = ''; // clear the container before rendering new news items
        snapshot.forEach((childSnapshot) => {
          const newsData = childSnapshot.val();
          const newsHTML = `
            <div class="box">
              <div class="news-box">
                <h2 class="object">${newsData.object}</h2>
                <p class="content">${newsData.content}</p>
                <p class="writer">${newsData.mail}</p>
              </div>
  
              <hr class="bottom-line"/>
            </div>
          `;
          newsContainer.innerHTML += newsHTML;
        });
      } else {
        const noNewsHTML = `
          <p>Aucune nouvelle pour le moment.</p>
        `;
        newsContainer.innerHTML = noNewsHTML;
      }
    } else {
      console.error("Element with ID 'news-container' not found!");
    }
  });