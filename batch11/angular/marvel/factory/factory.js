( function () {
    "use strict";

    angular
        .module("marvel")
        .factory("apiMarvel", apiMarvel);

    apiMarvel.$inject = ["$resource"];

    function apiMarvel($resource) {
        var apiKey = "e019dcaa709dc76d8290ed9bdc674adc";
        var hash = "66ced2c229c87609265e46bc4567eb7e";

        return $resource("http://gateway.marvel.com/v1/public/characters?ts=1&hash=" + hash + "&apikey=" + apiKey);
    }
})();
