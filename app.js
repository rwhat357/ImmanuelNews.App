(function() {
    'use strict';

    angular.module('app', [
        'ui.bootstrap'
    ]);

    angular
        .module('app')
        .controller('HomeController', HomeController);

    //HomeController.$inject = ['HomeController'];
    function HomeController() {
        var vm = this;
        vm.someText = "no text";        

        activate();
        console.log('here');
        ////////////////

        function activate() { }
    }
})();