var app = angular.module('app', ['ngSanitize', 'ngCookies']);

app.run(function ($rootScope, $window, $cookies, $http){

    $rootScope.setLang = function (lang){
        $rootScope.lang = lang;
        $cookies.put('lang', lang);
        $window.location.reload();
    };

    var lang = $cookies.get('lang') ||
        $window.navigator.language ||
        $window.navigator.userLanguage;

    switch (lang) {
        case 'en':
        case 'en-US':
        case 'en-us':
            lang = 'en';
            break;
        case 'ru':
        case 'ru-RU':
        case 'ru-ru':
            lang = 'ru';
            break;
        default:
            lang = 'en';
    }

    $rootScope.lang = lang;

    $rootScope.translate = {};
    $http.get('data/' + lang + '/dict.json')
        .then(function (response){
            $rootScope.translate = response.data
        });
});