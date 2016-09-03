( function () {
    "use strict";

    angular
        .module("nasa")
        .factory("apiNasa", apiNasa);

    apiNasa.$inject = ["$resource"];

    function apiNasa($resource) {

        return $resource("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=3yyIu5h6y7pd055av9ZQUsbeGl3V8mr7JvK1idKc");
    }
})();
