angular.module('reddit').service('postsService',function(scope) {
  return {
      newComment: {},
      newPost,
      view: {},
      searchText: "",
      newPostVisible: false,
      sortableFields: ['votes', 'date', 'title'],
      currentSort: $scope.view.sortableFields[0],
      orderVal: '-vo',
    addPost: function(post) {
        post.date= moment().calendar();
        post.votes= 0;
        post.comments= [];
        post.commentsVisible= false;
        post.newCommentVisible= false;
        $scope.view.posts.push(post);
        $scope.view.newPostVisible= false;
        $scope.newPost=  {};
        $scope.postForm.$setUntouched();
      }
    }

});
