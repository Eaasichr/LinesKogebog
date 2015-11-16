(function () {

  angular
    .module("starter.recipeDetail", ['ngSanitize'])
    .controller("recipeDetailCtrl", recipeDetailController);

  function recipeDetailController($rootScope, postsService) {
    var vm = this;
    vm.postDetail = $rootScope.postDetail;
    console.log($rootScope.postDetail);

    //vm.favorite = function(id){
    //  postsService.addRecipeToFavorite(id);
    //}
    //
    //vm.unFavorite = function(id){
    //  postsService.removeRecipeFromFavorites(id);
    //}

    //vm.isFavorite = function(id){
    //  vm.isFavorite = postsService.isFavorite(id);
    //}


  }

}());
