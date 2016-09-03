( function () {
    "use strict";
    angular
        .module("myCart", [])
        .controller("cartCtrl", cartCtrl);

    function cartCtrl() {
        var item = this;
        item.collection = [{
            "img": "images/mido1.jpg",
            "name": "Mido",
            "price": 3309.60,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit praesenti"
        }, {
            "img": "images/mido2.jpg",
            "name": "Puma",
            "price": 2333.40,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit praesentium"
        }, {
            "img": "images/mido3.jpg",
            "name": "AX",
            "price": 3000.30,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit "
        }, {
            "img": "images/mido4.jpg",
            "name": "DNK",
            "price": 5255.20,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit praesentium"
        }, {
            "img": "images/mido5.jpg",
            "name": "Timex",
            "price": 2555.00,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit?"
        }, {
            "img": "images/mido6.jpg",
            "name": "Casio",
            "price": 1500.60,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit"
        }, {
            "img": "images/mido7.jpg",
            "name": "Mido 2",
            "price": 7002.50,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit"
        }, {
            "img": "images/mido8.jpg",
            "name": "Nautica",
            "price": 3030.60,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit praesentium"
        }, {
            "img": "images/mido9.jpg",
            "name": "Puma",
            "price": 2312.60,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit"
        }, {
            "img": "images/mido10.jpg",
            "name": "AX",
            "price": 2333.50,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit "
        }, {
            "img": "images/mido11.jpg",
            "name": "Timex",
            "price": 4662.20,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit praesodit?"
        }, {
            "img": "images/mido12.jpg",
            "name": "AX",
            "price": 4444.50,
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae velit praesenti"
        }];
    }
})();
