import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: 'AIzaSyChlXsItBPh96Z6u1TFGXgdttCiYnqxvuo',
    authDomain: 'netflix-clone-8b14a.firebaseapp.com',
    projectId: 'netflix-clone-8b14a',
    storageBucket: 'netflix-clone-8b14a.appspot.com',
    messagingSenderId: '550211851879',
    appId: '1:550211851879:web:18c3929e0727d58cae66c2',
};

const firebase = Firebase.initializeApp(config);

export { firebase };