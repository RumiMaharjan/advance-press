import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuUvdQA5neKqN8epJOGXVMq8cv86y3dy8",
  authDomain: "e-clone-2c31a.firebaseapp.com",
  projectId: "e-clone-2c31a",
  storageBucket: "e-clone-2c31a.appspot.com",
  messagingSenderId: "598252191788",
  appId: "1:598252191788:web:83e9f640166349a3841189"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};