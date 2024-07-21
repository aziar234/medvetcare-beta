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

const objectInput = document.getElementById('object-input');
const contentInput = document.getElementById('content-input');
const mailInput = document.getElementById('mail-input');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const object = objectInput.value;
  const content = contentInput.value;
  const mail = mailInput.value;

  const ref = db.ref('news');
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