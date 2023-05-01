$(document).ready(function(){
  var urlParams = new URLSearchParams(window.location.search);
  var id = parseInt(urlParams.get('id'));
  
  var blogPosts = JSON.parse(localStorage.getItem("community_blog"));
  var blogPost = blogPosts[id];
  
  $(".title").append(blogPost["title"]);
  $(".description").append(blogPost["description"]);
});