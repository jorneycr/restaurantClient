import app from 'firebase/compat/app';
import firebaseConfig from './config';

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
    }
}

const firebase = new Firebase();
export default firebase;