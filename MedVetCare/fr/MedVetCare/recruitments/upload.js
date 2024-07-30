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

const objectInput = document.getElementById('object-input');
const contentInput = document.getElementById('content-input');
const mailInput = document.getElementById('mail-input');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const object = objectInput.value;
  const content = contentInput.value;
  const mail = mailInput.value;

  const ref = db.ref('recruitments');
  ref.push({
    object: object,
    content: content,
    mail: mail
  });

  objectInput.value = '';
  contentInput.value = '';
  mailInput.value = '';
  window.location.reload();
});