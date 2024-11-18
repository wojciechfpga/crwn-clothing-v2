// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider, signInWithPopup,
   createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc ,collection,writeBatch,query,getDocs} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoRl0PXhgak80i7-Qw8KeUlL9ka7XdI_0",
  authDomain: "shop-db-8d066.firebaseapp.com",
  projectId: "shop-db-8d066",
  storageBucket: "shop-db-8d066.firebasestorage.app",
  messagingSenderId: "907651084995",
  appId: "1:907651084995:web:138b4b5d2ebbc5fc88a876"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" })

export const auth = getAuth()

const db = getFirestore(app);

export const writeUserToDB = async (user,additional={AddtionalInfo:"None"}) => {   
    const documentOfUser=doc(db,'users',user.uid)

    const userFromDB=await getDoc(documentOfUser)
    const {displayName,email}=user
    if(!(userFromDB.exists()))
    {
      try{
        await setDoc(documentOfUser,{
          displayName,
          email,
          ...additional,
        })
      }
      catch(error)
      {

      }
    }
}

export const addCollectionAndDocument = async (collectionKey,objectsToADD)=> {
  const collectionRef=collection(db,collectionKey);
  const batch=writeBatch(db)
  console.log(objectsToADD)
  objectsToADD.forEach((object)=>{
    const docRef=doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit()
  console.log('done')
}
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
export const signinWithGooglePopup = () => signInWithPopup(auth, provider)

export const  createUser=async (password,email)=>{
  return await createUserWithEmailAndPassword(auth,email,password)
}

export const loginUser=async(email,password)=>{
    return await signInWithEmailAndPassword(auth,email,password)
  }

  export const logoutUser=async()=>{
    return await signOut(auth)
  }