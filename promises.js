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

function createPost(post){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push(post);

            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error : Something went wrong !.');
            }
            

             },2000);
    });
    
}

createPost({title: "Post three", Body : " This is post three"})
            .then(getPosts)
            .catch(err => console.log(err));





