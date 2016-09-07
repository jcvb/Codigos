( function () {
	"use strict";

	var square = {
		templateUrl: "../../angular/segundamano/app/components/squares/square.html",
		controller: squareCtrl
	};

	angular
		.module("segundaMano")
		.component("square", square);


squareCtrl.$inject = ["apiCategory"];
	function squareCtrl(apiCategory) {
		var square = this;

		square.categories = apiCategory.query();
	}
})();