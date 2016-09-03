( function () {
    "use strict";
    var hello = {
        templateUrl: "./partials/hello.html",
        controller: helloCtrl
    };
    // var hello = {
    // 	template: `
    // 	<div class="col-md-2" ng-controller="firstCtrl as f">
    // 		<h2>{{ f.name }}</h2>
    // 		<input ng-model="c">
    // 		{{c}}
    // 		<button ng-click="f.change()">Cambiar</button>
    // 		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, porro mollitia facilis ad aut non repellendus temporibus. Iste numquam, quae hic alias voluptate natus amet assumenda ratione atque, facilis earum!
    // 	</div>

    // 	`
    // };

    angular
        .module("myApp", [])
        .component("hello", hello)
        .controller("firstCtrl", firstCtrl);

    function firstCtrl() {
        var first = this;

        first.name = "carlos";
        first.change = change;

        function change() {
            first.name = "jc";
        }
    }

    function helloCtrl() {
        var hello = this;
        hello.saludo = "hola mundo";
    }
})();
