(function () {

  angular
    .module("starter.categoryDetail", ['ngSanitize'])
    .controller("categoryDetailCtrl", categoryDetailController);

  function categoryDetailController($rootScope) {
    var vm = this;
    vm.posts = $rootScope.posts;
    vm.currentCategory = $rootScope.currentCategory;
    console.log(vm.currentCategory);

    vm.getPostDetail = function (id) {
      for (var i = 0; i < vm.posts.length; i++) {
        if (id == vm.posts[i].id) {
          $rootScope.postDetail = vm.posts[i];
        }
      }
    }
  }

}());
