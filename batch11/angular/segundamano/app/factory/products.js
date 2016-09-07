(function () {
	"use strict";

	angular
		.module("segundaMano")
		.factory("apiProducts", apiProducts);

	apiProducts.$inject = ["$resource"];

	function apiProducts ($resource) {
		return $resource("/angular/segundamano/server/myproducts.json");
	}
})();