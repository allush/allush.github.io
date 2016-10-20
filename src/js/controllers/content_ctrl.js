app.controller('ContentCtrl', function ContentCtrl($rootScope, $scope, $http){
    var lang = $rootScope.lang;
    $scope.skills = [];
    $http.get('data/' + lang + '/skills.json')
        .then(function (response){
            $scope.skills = response.data
        });

    $scope.educations = [];
    $http.get('data/' + lang + '/educations.json')
        .then(function (response){
            $scope.educations = response.data
        });

    $scope.jobs = [];
    $http.get('data/' + lang + '/jobs.json')
        .then(function (response){
            $scope.jobs = response.data
        });
});