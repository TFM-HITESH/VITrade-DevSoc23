import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBay9BHfBqPMIY-CxuJUbVPCGT3T6m_lLo",
  authDomain: "vitrade-7d999.firebaseapp.com",
  projectId: "vitrade-7d999",
  storageBucket: "vitrade-7d999.appspot.com",
  messagingSenderId: "312432847925",
  appId: "1:312432847925:web:6e501c48490c0ebde4d57c"
};

//const analytics = getAnalytics(app);
export const Firebase= firebase.initializeApp(firebaseConfig);