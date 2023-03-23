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
} from 'firebase/auth'

import {
  getFirestore, // It is a function that will provide access to the Firestore database.
  doc, // It is also a function to get the reference of a document in the collection.
  getDoc, // This function fetches a specific document's data from the Cloud Firestore.
  setDoc,
  // eslint-disable-next-line no-unused-vars
  Firestore, // This function is used to write or update a document in the Cloud Firestore database with new data.
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
