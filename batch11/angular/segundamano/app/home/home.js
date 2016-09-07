(function(){
    "use strict";

    var home = {
        templateUrl: '../../angular/segundamano/app/home/home.html',
        controller: homeCtrl
    };

    angular
        .module("segundaMano")
        .component("home",home);


    function homeCtrl() {
        var home = this;

    }

})();