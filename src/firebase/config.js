import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBXCrOQOcoTxIF5Ze-5ShDw0R2fS0PExew",
  authDomain: "testhp-d2c81.firebaseapp.com",
  projectId: "testhp-d2c81",
  storageBucket: "testhp-d2c81.appspot.com",
  messagingSenderId: "933001689772",
  appId: "1:933001689772:web:8ebc9856962097ad4cfd09"
};

//const analytics = getAnalytics(app);
export const Firebase= firebase.initializeApp(firebaseConfig);