$(document).ready(function() {

	//Firebase link

  	var config = {
	    apiKey: "AIzaSyBPs9og7y3IEzbHKFVWgu8qtPXxRWC4Z1Y",
	    authDomain: "train-schedule-db.firebaseapp.com",
	    databaseURL: "https://train-schedule-db.firebaseio.com",
	    projectId: "train-schedule-db",
	    storageBucket: "train-schedule-db.appspot.com",
	    messagingSenderId: "60174437847"
  	};

	firebase.initializeApp(config);

    var database = firebase.database();
    
});