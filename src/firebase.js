import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC3JlyeBEd61TpWVkeju0oUVg-AtiCqU7Q",
  authDomain: "reactproject-416508.firebaseapp.com",
  projectId: "reactproject-416508",
  storageBucket: "reactproject-416508.appspot.com",
  databaseURL: "https://reactproject-416508-default-rtdb.asia-southeast1.firebasedatabase.app",
  messagingSenderId: "482785679903",
  appId: "1:482785679903:web:21ef2064d95c44bf54932a"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth };
export default firebaseApp; 
