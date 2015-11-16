(function () {

  angular
    .module("starter.category", [])
    .controller("categoryCtrl", categoryController);

  function categoryController(postsService, $rootScope) {
    var vm = this;
    postsService.getCategories()
      .then(function (result) {
        vm.categories = result.categories;
      });

    vm.setCategory = function(category){
      $rootScope.currentCategory = category;
    }
  }
}());
