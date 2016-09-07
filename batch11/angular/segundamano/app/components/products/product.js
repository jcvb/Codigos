( function () {
	"use strict";

	var productList = {
		templateUrl : "../../angular/segundamano/app/components/products/product.html",
		controller: productCtrl
	};

	angular
		.module("segundaMano")
		.component("productList", productList);

	productCtrl.$inject = ["apiProducts"];
	function productCtrl (apiProducts) {
		var products = this;

		products.apiData = apiProducts.query();
	}
})();