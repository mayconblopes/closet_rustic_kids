// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  /*
  The getAuth() function retrieves the authentication instance for the default app or a given app and can be used to authenticate a user.
  The signInWithRedirect() function authenticates with Firebase using a sign-in redirect flow. 
  The sign-in redirect flow involves redirecting the user to the identity provider service for authentication.
  The signInWithPopup() function authenticates with Firebase using a pop-up window in which the user can sign in.
  The GoogleAuthProvider object is used to configure the sign-in process with Google. 
  */
  getAuth,
  // eslint-disable-next-line no-unused-vars
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

import {
  getFirestore, // It is a function that will provide access to the Firestore database.
  doc, // It is also a function to get the reference of a document in the collection.
  getDoc, // This function fetches a specific document's data from the Cloud Firestore.
  setDoc,
  // eslint-disable-next-line no-unused-vars
  Firestore, // This function is used to write or update a document in the Cloud Firestore database with new data.
  collection, // collection() function provides reference to a Firestore collection.
  writeBatch, // writeBatch() function is used to performs multiple writes on documents in the same collection.
  query, // query(): This function creates a Query object for the specified collection or collection group.
  getDocs, // getDocs(): This function retrieves all the documents that meet the conditions specified by the Query object.
} from 'firebase/firestore'

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBJTj7wkGcsDMwlUYkn0egw0P58F6EnoA',
  authDomain: 'closet-rustic-kids-db.firebaseapp.com',
  projectId: 'closet-rustic-kids-db',
  storageBucket: 'closet-rustic-kids-db.appspot.com',
  messagingSenderId: '906394988777',
  appId: '1:906394988777:web:571e5df5390b2dbb03c078',
}

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export async function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  // gets the collection of documents matching the collectionKey
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  // objectsToAdd are the products on shopdata.js
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('bacth done')
}

export async function getCategoriesAndDocuments() {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    accumulator[title.toLowerCase()] = items
    return accumulator
  }, {})

  return categoryMap
  /*
  The above reduce() will return a single object like this 
  {
    hats: [
      {},
      {}.
    ]
  sneakers: [
    {},
    {}
  ]
  and so on ....
}
*/
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  /*The doc() function accepts three arguments:
    1 A reference to the Firestore database instance (db)
    2 A string indicating the collection in which the user document will be stored ('users')
    3 A string that represents the ID of the user document, which is generated from the user's UID (userAuth.uid)*/
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  //This function checks if there is data in database
  if (!userSnapshot.exists()) {
    // If no data exists, a new date object is created
    const createdAt = new Date()
    try {
      //A document with userAuth details and the current date is created in the database
      await setDoc(userDocRef, {
        displayName: userAuth.displayName,
        email: userAuth.email,
        createdAt: createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      //Any errors that occur during the creation of the new document will be logged to the console
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!(email && password)) return
  else return await createUserWithEmailAndPassword(auth, email, password)
}

export function signInUserWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export async function signOutUser() {
  await signOut(auth)
}

export function onAuthStateChangedListener(callback) {
  /* This code registers a callback function to be executed whenever the authentication state changes.
  The 'auth' parameter is an object representing the current user's authentication status.
  The 'callback' parameter is the function to be executed when the authentication state changes.
  onAuthStateChanged passes the user as a parameter for the callback function */
  onAuthStateChanged(auth, callback)
}
