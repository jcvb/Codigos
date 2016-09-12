(function () {
	"use strict";
	console.log('factory');
	angular
		.module("ecobici")
		.factory("apiEcobici", apiEcobici);

	apiEcobici.$inject = ["$resource", "$http"];
	 
	function apiEcobici ($resource, $http) {
		var apiEco = this;
		console.log('factoryR');
		var client_id = "";
		var client_secret = "";
		var url = "https://pubsbapi.smartbike.com/oauth/v2/token?client_id="+client_id+"&client_secret="+client_secret+"&grant_type=client_credentials";
		
		apiEco.access_token = null;
		apiEco.refresh_token = null;

		$http.get(url).then(function(response) {
			console.log(response.data)
        	apiEco.access_token = response.access_token;
        	apiEco.refresh_token = response.refresh_token;
    	});

		return $resource("http://swapi.co/api/:category/:id");
	}
})();