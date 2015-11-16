(function () {

  angular
    .module("starter.posts", [])
    .controller("postsCtrl", postsController);

  function postsController(postsService) {
    var vm = this;
    postsService.getPosts()
      .then(function (result) {
        //console.log(result);
        vm.posts = result;
      }).then(function () {
        vm.testposts = [];
        vm.categories = [];
        for (var i = 0; i < vm.posts.count; i++) {
          var title = vm.posts.posts[i].title;
          var ingredients = vm.posts.posts[i].ingredients;
          var description = vm.posts.posts[i].approach;
          var tools = vm.posts.posts[i].tools;
          var number_quantity = vm.posts.posts[i].number_quantity;
          var thumbnail = vm.posts.posts[i].thumbnail;
          var category = vm.posts.posts[i].category;
          var id = vm.posts.posts[i].id;
          var newPost = {
            title: title,
            ingredients: ingredients,
            description: description,
            tools: tools,
            number_quantity: number_quantity,
            thumbnail: thumbnail,
            category: category,
            id: id
          }
          vm.testposts.push(newPost);
          if(!contains(vm.categories, category)){
            vm.categories.push(category);
          }
        }
      });

    function contains(a, obj) {
      for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
          return true;
        }
      }
      return false;
    }

    vm.getPostDetail = function(id){
      console.log("Test function");
      for(var i = 0; i < vm.testposts.length; i++){
        if(id == vm.testposts[i].id){
          var postDetail = {
            title: vm.testposts[i].title,
            ingredients: vm.testposts[i].ingredients,
            description: vm.testposts[i].description,
            tools: vm.testposts[i].tools,
            number_quantity: vm.testposts[i].number_quantity,
            thumbnail: vm.testposts[i].thumbnail,
            category: vm.testposts[i].category,
            id: vm.testposts[i].id
          }
          vm.postDetail = postDetail;
          console.log(vm.postDetail);
        }else{
          console.log("not found");
        }
      }
    }
  }

}());
