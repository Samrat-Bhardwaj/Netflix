import Firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
// import { seedDatabase } from "../seed";
let obj = require("../secrets");

// console.log(seedDatabase);

const firebase= Firebase.initializeApp(obj);
// let auth=firebase.auth();

// export const firestore = firebase.firestore();
// seedDatabase(firebase);

export { firebase };