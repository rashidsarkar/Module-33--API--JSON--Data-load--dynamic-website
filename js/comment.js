/*

const comentContainer = document.getElementById("comment_container");



function loadComment() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(5));
}

function displayDatta(allComment) {
  console.log(allComment);
  // for (const item of allComment) {
  //   console.log(item);
  /*
    const div = document.createElement("div");
    div.innerHTML = `
    <h3>User Email : ${item.email}</h3>
    <p>${item.body}</p>
    `;
    comentContainer.appendChild(div);
    */

//
const comentContainer = document.getElementById("comment_container");

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => displayDatta(data));

function displayDatta(allComment) {
  console.log(allComment);
  for (const item of allComment) {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>User Email : ${item.email}</h3>
      <p>${item.body}</p>
      `;
    div.classList.add("work");

    comentContainer.appendChild(div);
  }
}
