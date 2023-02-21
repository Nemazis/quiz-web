angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quizapifoob-env.eba-hbggmih7.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);