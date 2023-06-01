import {initializeApp} from 'firebase/app'
import {doc, getDoc, getFirestore, setDoc,} from 'firebase/firestore'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
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
export const db = getFirestore(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({'prompt' : 'select_account'})
export const signInWithGoogle = async() => {
  try{
    await signInWithPopup(auth, provider)
  }catch(error){
    console.log(error)
  }
  
}

export const createProfileUserDocument = async(userAuth, additionalData ) => {
  if(!userAuth) return;

  const userRef = doc(db,'users', `${userAuth.uid}`)
  const userSnap = await getDoc(userRef) 
  // console.log(userSnap)

  if(!userSnap.exists()){
    const createdAt = new Date()
    
    try {
      const docRef = await setDoc(doc(db, 'users',`${userAuth.uid}` ), {
        email: userAuth.email,
        createdAt: createdAt,
        ...additionalData
      })
      console.log('id user',docRef)
    }catch(e){
      console.log('Error adding a user',e)
    }
  }

  return userRef 
}

export const logOut = async() =>{
  await signOut(auth)
} 

// const signWithRedirect = signInWithRedirect(auth, provider);