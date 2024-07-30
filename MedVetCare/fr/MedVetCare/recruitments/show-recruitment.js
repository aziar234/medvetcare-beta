// show.js
const firebaseConfig = {
  apiKey: "AIzaSyAuSczDMp2I_GSzZ8SHloucNM1BV-KVi5o",
  authDomain: "recruitments-fb3cc.firebaseapp.com",
  databaseURL: "https://recruitments-fb3cc-default-rtdb.firebaseio.com",
  projectId: "recruitments-fb3cc",
  storageBucket: "recruitments-fb3cc.appspot.com",
  messagingSenderId: "1092302585605",
  appId: "1:1092302585605:web:9e739ff40ba9917559c16c",
  measurementId: "G-13GF29M3B4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const recruitmentsContainer = document.getElementById('recruitments-container');

// Récupérer l'argument key passé dans le lien en GET
const urlParams = new URLSearchParams(window.location.search);
const key = urlParams.get('key');

// Si la clé est présente, afficher le bon élément
if (key) {
  db.ref('recruitments').child(key).on('value', (snapshot) => {
    if (snapshot.exists()) {
      const recruitmentsData = snapshot.val();
      const recruitmentsHTML = `
        <div class="box">
              <div class="recruitments-box">
                <h2 class="sub-title">${recruitmentsData.object}</h2>
                <p class="content-text">${recruitmentsData.content}</p>
                <p class="content-text">${recruitmentsData.mail}</p>
              </div>
  
              <hr class="bottom-line"/>
            </div>
      `;
      recruitmentsContainer.innerHTML = recruitmentsHTML;
    } else {
      console.error("Élément non trouvé!");
    }
  });
} else {
  console.error("Clé non présente dans l'URL!");
}