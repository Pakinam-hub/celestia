$(document).ready(function(){
    var blogPosts = JSON.parse(localStorage.getItem("community_blog"));
    console.log(blogPosts);
    
    // Convert blogPosts object to array and sort by timestamp
    var blogPostsArray = Object.values(blogPosts).sort(function(a, b) {
        return b.timestamp - a.timestamp;
    });
    console.log(blogPostsArray);
    
    // Loop through sorted array and append posts to #posts element
    $.each(blogPostsArray, function(id, blogPost){
        console.log(blogPost.unique_id); // print unique_id in console
        $("#posts").append('<div class="container border post bg-light p-3 " style="margin-bottom:1%;"><h1><a class="text-decoration-none h5"href="show.html?id='+ blogPost.unique_id +'">'+blogPost["title"]+'</a></h1><p>'+blogPost["description"]+'</p></div>');
    });
    

    
});


