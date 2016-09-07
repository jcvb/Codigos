(function () {
	"use strict";

	angular
		.module("segundaMano")
		.factory("apiCategory", apiCategory);

	apiCategory.$inject = ["$resource"];

	function apiCategory ($resource) {
		return $resource("/angular/segundamano/server/categories.json");
	}
})();