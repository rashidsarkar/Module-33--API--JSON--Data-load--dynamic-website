/*
function loaduser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}
function displayUser(data) {
  const ul = document.getElementById("user_list");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
*/
function loaduser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((rest) => rest.json())
    .then((data) => disply(data));
}
function disply(users) {
  for (user of users) {
    const ul = document.getElementById("user_list");
    const li = document.createElement("li");
    li.innerText = user.username;

    ul.appendChild(li);
  }
}
