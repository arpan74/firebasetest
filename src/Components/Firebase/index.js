import app from "firebase/app";
import FirebaseContext from "./context";

const firebaseConfig = {
  apiKey: "AIzaSyCvIqfOxQBg4BG4Kj0GfLC21OyCzDQfs8E",
  authDomain: "habiter-a01a7.firebaseapp.com",
  databaseURL: "https://habiter-a01a7.firebaseio.com",
  projectId: "habiter-a01a7",
  storageBucket: "habiter-a01a7.appspot.com",
  messagingSenderId: "630996459835",
  appId: "1:630996459835:web:c399b3ae939e92e167971e",
  measurementId: "G-DKBG3N12SB"
};

class Firebase {
  constructor() {
    console.log(app);
    // app.initializeApp(firebaseConfig);
    console.log(app);

    this.auth = app.auth();
  }
}

export default Firebase;

export { FirebaseContext };
