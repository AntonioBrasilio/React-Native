import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDUKFLY97JniGvse5SiJNglc9bPvdYWBbY',
    authDomain: 'reactnative-dev-34620.firebaseapp.com',
    projectId: 'reactnative-dev-34620',
    storageBucket: 'reactnative-dev-34620.firebasestorage.app',
    messagingSenderId: '886605965030',
    appId: '1:886605965030:web:f1f529557c19580e6d3d27',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
