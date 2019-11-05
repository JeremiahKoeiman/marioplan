import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-ESxWacFPOwzJIoU_pokd_Vg8hCap3hY",
    authDomain: "my-v-marioplan.firebaseapp.com",
    databaseURL: "https://my-v-marioplan.firebaseio.com",
    projectId: "my-v-marioplan",
    storageBucket: "my-v-marioplan.appspot.com",
    messagingSenderId: "525945818171",
    appId: "1:525945818171:web:2fe6114320b35fd009e01e",
    measurementId: "G-7HEC9QEGRB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
