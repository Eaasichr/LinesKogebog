(function () {

  angular
    .module("starter.recipeDetail", [])
    .controller("recipeDetailCtrl", recipeDetailController);

  function recipeDetailController() {
    var vm = this;
    console.log($scope.test);
  }

}());
