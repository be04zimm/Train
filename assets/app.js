$(document).ready(function() {

    // Initialize Firebase

    var config = {
        apiKey: "AIzaSyBPs9og7y3IEzbHKFVWgu8qtPXxRWC4Z1Y",
        authDomain: "click-counter-d96b0.firebaseapp.com",
        databaseURL: "https://click-counter-d96b0.firebaseio.com",
        projectId: "click-counter-d96b0",
        storageBucket: "click-counter-d96b0.appspot.com",
        messagingSenderId: "98388927375"
    };

    firebase.initializeApp(config);

    var database = firebase.database();
    
});