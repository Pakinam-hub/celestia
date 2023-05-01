$(document).ready(function(){
    $("form").submit(function(){
        var post = {}
        post.title= $("#title").val()
        post.description= $("#post_description").val()
        post.timestamp = new Date().getTime();
        post.unique_id = post.timestamp;

        if(localStorage.getItem("community_blog") == 'undefined'){
            localStorage.setItem("community_blog");
        }

        var blog = {}
        blog = JSON.parse(localStorage.getItem("community_blog")) || {};
        blog[post.unique_id] = post
        localStorage.setItem("community_blog",JSON.stringify(blog))

    })
})
