(function () {

  angular
    .module("starter.posts", [])
    .controller("postsCtrl", postsController);

  function postsController(postsService, $rootScope, $scope, $window) {
    var vm = this;
    postsService.getPosts()
      .then(function (result) {
        vm.posts = result.posts;
        $rootScope.posts = result.posts;
      });

    vm.getPostDetail = function (id) {
      for (var i = 0; i < vm.posts.length; i++) {
        if (id == vm.posts[i].id) {
          $rootScope.postDetail = vm.posts[i];
          $rootScope.currentRecipe = vm.posts[i].title;
        }
      }
    }

    $scope.$watch(function(){
      return (($window.innerWidth-35)/2)/1.5;
    }, function(value) {
      $scope.testHeight = value+70;
    });
  }

}());
