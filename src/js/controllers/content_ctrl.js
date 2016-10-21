app.controller('ContentCtrl', function ContentCtrl($rootScope, $scope, $http){

    $scope.skills = [];
    $scope.educations = [];
    $scope.jobs = [];

    var load = function (lang){
        $http.get('data/' + lang + '/skills.json')
            .then(function (response){
                $scope.skills = response.data
            });

        $http.get('data/' + lang + '/educations.json')
            .then(function (response){
                $scope.educations = response.data
            });

        $http.get('data/' + lang + '/jobs.json')
            .then(function (response){
                $scope.jobs = response.data
            });
    };

    load($rootScope.lang);

    $rootScope.$watch('lang', function (){
        load($rootScope.lang);
    })
});