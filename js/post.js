function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

/*

*/
const postContainer = document.getElementById("post_container");
function displayPost(posts) {
  for (const post of posts) {
    console.log(post);
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
   <h4> user- ${post.userId} </h4>
   <h5>Post title : ${post.title}</h5>
   <p>post Description : ${post.body}</p>
   
   `;
    postContainer.appendChild(div);
  }
}
loadPost();
