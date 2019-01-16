const posts = [{title:"Post one", Body:"This is post one"},{title:"Post two", Body:"This is secont post"}];
function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach((post,index) => {
            output += `<li> ${post.title} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// its simple function without call back so create post not working ....


function createPost(post){
    setTimeout(() => {
posts.push(post)
    },2000);
}

getPosts();
 

