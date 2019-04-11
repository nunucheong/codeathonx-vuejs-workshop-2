import * as firebase from "firebase";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyB232oBHaQ2tcmq_6LJsegKLMPZHN7OSuw",
  authDomain: "vuetify-1c22d.firebaseapp.com",
  databaseURL: "https://vuetify-1c22d.firebaseio.com",
  projectId: "vuetify-1c22d",
  storageBucket: "vuetify-1c22d.appspot.com",
  messagingSenderId: "717790140505"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
