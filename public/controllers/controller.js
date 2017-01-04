var myApp = angular
    .module('myApp', [])
    .controller('AppCtrl', function($scope, $http) {


        var refresh = function() {
            $http.get("http://45.32.114.176:4600/todos")
                .then(function(response) {
                    var data = response.data.todos;
                    $scope.lists = data;
                    $scope.title = '';
                });
        };

        refresh();

        $scope.addList = function() {
            var title = $scope.title;
            axios.post('http://45.32.114.176:4600/todos', { todo: title })
                .then(function(response) {
                    console.log(response);
                    refresh();
                })
                .catch(function(error) {
                    console.log(error);
                });
        };

        $scope.remove = function(id) {
            console.log(id);
            // var url = 'http://45.32.114.176:4600/todos/';
        
            $http.delete('http://45.32.114.176:4600/todos?' + id).then(function(response) {
                console.log("DELETE");
                refresh();
            }, function(error) {
                console.log("ERROR DELETE");
            });

        };



    });









