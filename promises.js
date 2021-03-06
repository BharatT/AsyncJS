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
/*
createPost({title: "Post three", Body : " This is post three"})
            .then(getPosts)
            .catch(err => console.log(err));
*/

//  Async / wait  
/*
async function init(){
   await createPost({title: "Post three", Body : " This is post three"});

   getPosts();
}
init();
*/

// Async / Await / Fatch

async function fetchUser(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

fetchUser();













// promice.all

/*
const promic1 = Promise.resolve("Hello Bharat");
const promic2 = 10;
const promic3 = new Promise((resolve, reject) => setTimeout(resolve,2000, ' Jai Shree Ram'));
const promic4 = fetch("https://jsonplaceholder.typicode.com/users").then( res => res.json())

Promise.all([promic1,promic2,promic3,promic4]).then(value => console.log(value));
*/





