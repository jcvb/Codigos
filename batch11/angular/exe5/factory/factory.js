(function(){
	'use strict';

	angular
		.module("starwars")
		.factory("apiStar", apiStar);

	apiStar.$inject = ["$resource"];
	function apiStar($resource){
		return $resource("http://swapi.co/api/:category/:id");
	}
})();