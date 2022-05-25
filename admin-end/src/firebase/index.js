import {initializeApp} from 'firebase/app';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4qqy0BGXNXpsIM4w7JPw9a7C7TdAgmgk",
    authDomain: "srizon-5fcc1.firebaseapp.com",
    projectId: "srizon-5fcc1",
    storageBucket: "srizon-5fcc1.appspot.com",
    messagingSenderId: "621866427964",
    appId: "1:621866427964:web:7f520c2a93d4d11a160539",
    measurementId: "G-CGG4QER5TS"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);