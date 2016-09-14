( function () {
	"use strict";
	var statusApp = {
		templateUrl : "../../../../../examples/ecobici/app/components/statusStations/statusStation.html",
		controller: StatusAppCtrl
	};


	function StatusAppCtrl (ApiService) {
		var status = this;
        status.stations = null;
	    ApiService.getToken()
	        .then(function (response) {
	        	if (response.data.access_token) {
	        		makeRequest(response.data.access_token);
	        	}
	        }, function(error){
	        	console.log(error)
	        });
	    var makeRequest = function(token) {
	    	
	    	ApiService.makeRequestEcobici(token)
	    	.then(function(data){
	    		console.log(data)
	    	}, function(error){
	    		console.log(error)
	    	});
	   
	    }
	}

	StatusAppCtrl.$inject = ["ApiService", "$q"];

	statusApp.$inject = ["ApiService"];
	angular
		.module("ecobici")
		.component("statusApp", statusApp);

	
})();