(function () {
    'use strict'

    var postsService = function($http){

        //var getPosts = function(){
        //    return $http.get('../data.json'
        //        ).then(function(response) {
        //            return response.data;
        //        });
        //};

      var getPosts = function(){
        return $http.get('http://lineskogebog.dk/api/get_recent_recipe/'
        ).then(function(response) {
            return response.data;
          });
      };

        return {
            getPosts: getPosts
        }
    }

    angular.module('starter')
        .factory('postsService', postsService);
})();
