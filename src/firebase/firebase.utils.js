import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {
  getAuth, 
  signInWithEmailAndPassword, 
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBH6lftUB80U18uGD0rp-iWBDyXRyJIacY",
  authDomain: "crwn-db-95521.firebaseapp.com",
  projectId: "crwn-db-95521",
  storageBucket: "crwn-db-95521.appspot.com",
  messagingSenderId: "605367607081",
  appId: "1:605367607081:web:43151f27d040740b2be138",
  measurementId: "G-PSQY3QGD24"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const firestore = getFirestore(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({'prompt' : 'select_account'})
export const signInWithGoogle = async() => {
  try{
    await signInWithPopup(auth, provider)
  }catch(error){
    console.log(error)
  }
  
}

export const logOut = async() =>{
  await signOut(auth)
} 

// const signWithRedirect = signInWithRedirect(auth, provider);