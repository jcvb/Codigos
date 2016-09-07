(function(){
    "use strict";

    angular
        .module('segundaMano')
        .config(config);

    config.$inject = ["$routeProvider"];
    function config($routeProvider) {
        $routeProvider
            .when('/',
                {
                    template: "<home></home>"
                })
            .when('/login',{template: "<login></login>"})
            .otherwise({
                redirectTo : '/'
            });
    }

})();