(function() {
    'use strict';
    var login = {
        templateUrl: './partials/login.html',
        controller: validateController
    };
    angular
        .module('formLogin', [])
        .component('login', login)
        .controller('loginController', loginController);

    function loginController() {
        var loginForm = this;
        loginForm.validateForm = validateForm;

        function validateForm() {
        	console.log(loginForm.user)
        	console.log(loginForm.password)
        }
    }

    function validateController() {
    	var login = this;
    }
})();
