var Myo=require('myo')
var request=require('request')

Myo.connect('com.blackLightning.jiboPair');

Myo.on("connected", function(data, timestamp) {
    console.log("Myo successfully connected. Data: " + JSON.stringify(data) + ". Timestamp: " + timestamp + ".");
    Myo.setLockingPolicy("none");
});

Myo.on("arm_synced", function() {
    console.log("Myo is synced");
    request.post(
	{  
	    "uri":"http://127.0.0.1:3000/sendresult",
	    "body": {
		"host":"Myoband",
		"desc":"synced"
	    },
	    "json":true
	},
	function(err,response,body) {
	    if(err) {
		console.log("error occured sending data"+err.message);
		return;
	    }
	}
    );
});

Myo.on("arm_unsynced", function() {
    console.log("Myo is unsynced");
    request.post(
	{
	    "uri":"http://127.0.0.1:3000/sendresult",
	    "body": {
		"host":"Myoband",
		"desc":"unsynced"
	    },
	    "json":true
	},
	function(err,response,body) {
	    if(err) {
		console.log("error occured sending data"+err.message);
		return;
	    }
	}
    );
});
Myo.on("fingers_spread", function() {
    console.log("Fingers spread!");
    request.post(
	{
	    "uri":"http://127.0.0.1:3000/sendresult",
	    "body": {
		"host":"Jibo",
		"desc":"detected finger spread"
	    },
	    "json":true
	},
	function(err,response,body) {
	    if(err) {
		console.log("error occured sending data"+err.message);
		return;
	    }
	}
    );
});
Myo.on("wave_in", function() {
    console.log("Wave in!");
    request.get(
	{
	    "uri":"http://127.0.0.1:3000/wavein",
	    "json":true
	},
	function(err,response,body) {
	    if(err) {
		console.log("error occured sending data"+err.message);
		return;
	    }
	}
    );    
});

Myo.on("wave_out",function() {
    console.log("wave out");
    request.get(
	{
	    "uri":"http://127.0.0.1:3000/waveout",
	    "json":true
	},
	function(err,response,body) {
	    if(err) {
		console.log("error occured sending data"+err.message);
		return;
	    }
	}
    );    
});
Myo.on("fist", function() {
    console.log("Fist!");
    request.get(
	{
	    "uri":"http://127.0.0.1:3000/fist",
	    "json":true
	},
	function(err,response,body) {
	    if(err) {
		console.log("error occured sending data"+err.message);
		return;
	    }
	}
    );
});
Myo.on("double_tap", function() {
    console.log("Double Tap!");
    request.post(
	{
	    "uri":"http://127.0.0.1:3000/sendresult",
	    "body": {
		"host":"Jibo",
		"desc":"detected doubletap"
	    },
	    "json":true
	},
	function(err,response,body) {
	    if(err) {
		console.log("error occured sending data"+err.message);
		return;
	    }
	}
    );
});
