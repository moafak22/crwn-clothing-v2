import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDydjCcH3CKt5YXOwW9CEo3csmZOG95DK4",
  authDomain: "crwn-clothing-123789.firebaseapp.com",
  projectId: "crwn-clothing-123789",
  storageBucket: "crwn-clothing-123789.appspot.com",
  messagingSenderId: "234157594943",
  appId: "1:234157594943:web:b2bf9888fd5dd3a8c3db8a"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleprovider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalIformation={}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalIformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }



  return userDocRef;
};

export const createAuthuserWithEmailAndPassword = async (email,password)=>{

  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password)

}


export const signInuserWithEmailAndPassword = async (email,password)=>{

  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password)

}