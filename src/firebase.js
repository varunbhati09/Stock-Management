// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3ZULzS2JCi6Bu9OOSVKhhksjutWQ-tUs",
    authDomain: "stock-management-fb61e.firebaseapp.com",
    projectId: "stock-management-fb61e",
    storageBucket: "stock-management-fb61e.appspot.com",
    messagingSenderId: "533734888169",
    appId: "1:533734888169:web:d5be48a0e144b6bcd35678",
    measurementId: "G-3ZJ977B1T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);


export {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  };


export const addProduct = async (productData) => {
  try {
    await addDoc(collection(firestore, 'products'), productData);
    console.log('Product added successfully!');
  } catch (error) {
    console.error('Error adding product: ', error);
  }
};


export const updateProduct = async (productId, productData) => {
  try {
    await updateDoc(doc(firestore, 'products', productId), productData);
    console.log('Product updated successfully!');
  } catch (error) {
    console.error('Error updating product: ', error);
  }
};


export const deleteProduct = async (productId) => {
  try {
    await deleteDoc(doc(firestore, 'products', productId));
    console.log('Product deleted successfully!');
  } catch (error) {
    console.error('Error deleting product: ', error);
  }
};


export const getProducts = async () => {
  try {
    const snapshot = await getDocs(collection(firestore, 'products'));
    const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return productsData;
  } catch (error) {
    console.error('Error fetching products: ', error);
    return [];
  }
};

export { firestore, auth};
