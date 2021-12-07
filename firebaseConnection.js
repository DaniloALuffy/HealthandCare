import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAuC1nx9hNgLvGCxYS9NVCa3kvw5I5Eda8",
    authDomain: "healthandcare-0405.firebaseapp.com ",
    databaseURL: "https://healthandcare-0405.firebaseio.com",
    projectId: "healthandcare-r",
    storageBucket: "healthandcare-r.appspot.com",
    messagingSenderId: "878284647672",
    appId: "1:878284647672:android:1e036075ec6dc0f565df0d",
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;