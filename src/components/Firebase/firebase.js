import app from 'firebase/app';

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
    }
}

export default Firebase;