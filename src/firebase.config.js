// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB_8eIugHHIKJtB1sImp4B5RNn-Y5EikUA',
	authDomain: 'house-marketplace-app-4862c.firebaseapp.com',
	projectId: 'house-marketplace-app-4862c',
	storageBucket: 'house-marketplace-app-4862c.appspot.com',
	messagingSenderId: '510340457588',
	appId: '1:510340457588:web:0a4b42312030a6a8389d21',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
