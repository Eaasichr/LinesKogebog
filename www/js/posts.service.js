(function () {
  'use strict'

  var postsService = function ($http, $rootScope) {

    var getPosts = function () {
      return $http.get('../data.json')
        .then(function (response) {
          return response.data;
        });
    };

    var getCategories = function(){
      return $http.get('../categories.json'
      ).then(function(response) {
          return response.data;
        });
    };

    var getPostsWithCategoryId = function(){
      return $http.get('http://lineskogebog.dk/api/get_category_posts/?category_id=' + 7)
        .then(function(response){
          return response.data;
        })
    }

    //var getPosts = function(){
    //  return $http.get('http://lineskogebog.dk/api/get_recent_recipe/'
    //  ).then(function(response) {
    //      return response.data;
    //    });
    //};
    //
    //var getCategories = function () {
    //  return $http.get('http://lineskogebog.dk/api/get_category_index')
    //    .then(function (response) {
    //      return response.data;
    //    });
    //};

    //var addRecipeToFavorite = function(id){
    //  var favorites = new Array(
    //    favorites.pushValues($rootScope.favorites.values())
    //  );
    //  //favorites = $rootScope.favorites;
    //  console.log(favorites);
    //  favorites.push(id);
    //  console.log(favorites);
    //  $rootScope.favorites = favorites;
    //}
    //
    //var removeRecipeFromFavorites = function (id) {
    //  var favorites = [];
    //  favorites = $rootScope.favorites;
    //  console.log(favorites);
    //  for(var recipe in favorites){
    //    if(id == recipe){
    //      favorites.splice(recipe);
    //      console.log("Favoritte removed!" + favorites);
    //    }
    //  }
    //  $rootScope.favorites = favorites;
    //}
    //
    //var isFavorite = function (id) {
    //  var favorites = [];
    //  favorites = $rootScope.favorites;
    //  for(var i = 0; i < favorites.length; i++){
    //    if(favorites[i] == id){
    //      return true;
    //    }
    //  }
    //  return false;
    //}

    return {
      getPosts: getPosts,
      getCategories: getCategories,
      getPostsWithCategoryId: getPostsWithCategoryId
    }
  }

  angular.module('starter')
    .factory('postsService', postsService);
})();
