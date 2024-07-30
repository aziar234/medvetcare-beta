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
  
  db.ref('recruitments').on('value', (snapshot) => {
    const recruitmentsContainer = document.getElementById('recruitments-container');
    if (recruitmentsContainer) {
      if (snapshot.exists()) {
        recruitmentsContainer.innerHTML = `<div class="sub-title">Nos offres d'emploie : </div>`; // clear the container before rendering new recruitments items
        snapshot.forEach((childSnapshot) => {
          const recruitmentsData = childSnapshot.val();
          const recruitmentsHTML = `
            <a class="content-text" href="recruitments.html?key=${childSnapshot.key}">${recruitmentsData.object}</a>
          `;
          recruitmentsContainer.innerHTML += recruitmentsHTML;
        });
      } else {
        const norecruitmentsHTML = `
          
        `;
        recruitmentsContainer.innerHTML = norecruitmentsHTML;
      }
    } else {
      console.error("Element with ID 'recruitments-container' not found!");
    }
  });