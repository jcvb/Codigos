(function() {
    'use strict';
    var login = {
        templateUrl: './partials/login.html',
        controller: validateController
    };
    angular
        .module('formLogin', [])
        .component('login', login);

    function validateController() {
        var loginForm = this;
        loginForm.validateForm = validateForm;

        function validateForm() {
            console.log(loginForm.user)
            console.log(loginForm.password)
        }
    }
})();
