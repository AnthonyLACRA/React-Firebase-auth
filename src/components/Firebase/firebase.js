import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAflqCXaF5-NIVVBNrWtVZxUy38ASVifQA",
    authDomain: "my-firebase-project-prod-bf806.firebaseapp.com",
    databaseURL: "https://my-firebase-project-prod-bf806.firebaseio.com",
    projectId: "my-firebase-project-prod-bf806",
    storageBucket: "",
    messagingSenderId: "194901531839",
}

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email,password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

}


export default Firebase;