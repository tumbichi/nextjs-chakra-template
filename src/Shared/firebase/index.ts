import firebaseConfig from "./config";

const firebase = initializeApp(firebaseConfig);

// const db = getFirestore(firebase);
// const auth = getAuth(firebase);

// export { db, auth }

export default firebase;
