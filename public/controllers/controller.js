var myApp = angular.module('myApp', [
    'ngRoute']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/todopage', { templateUrl: 'todopage.html' });
        $routeProvider.when('/settingpage', { templateUrl: 'settingpage.html' });
        $routeProvider.otherwise({ redirectTo: '/index.html' });

        $locationProvider.html5Mode({ enabled: true, requireBase: false });
    }]);



myApp.controller('AppCtrl', function ($scope, $http) {


    var refresh = function () {
        $http.get("http://45.32.114.176:4600/todos")
            .then(function (response) {
                var data = response.data.todos;
                $scope.lists = data;
                $scope.title = '';
            });
    };

    refresh();

    $scope.addList = function () {
        var title = $scope.title;
        axios.post('http://45.32.114.176:4600/todos', { todo: title })
            .then(function (response) {
                refresh();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    $scope.remove = function (id) {
        console.log(id);
        axios.delete('http://45.32.114.176:4600/todos/' + id)
            .then(function (response) {
                refresh();
            })
            .catch(function (response) {
                console.log(response);
            });
    };



});