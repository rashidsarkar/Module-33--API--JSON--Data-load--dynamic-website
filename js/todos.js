function loadtodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodo(data));
}
function displayTodo(todos) {
  const todoContainer = document.getElementById("todo_container");
  for (const todo of todos) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("work");

    todoDiv.innerHTML = `
    <h3>title : ${todo.title}</h3>
    <p> user ${todo.userId}</p>
    <p>Is  ${todo.completed ? "Compleated" : "Not Compleated"}</p>

    `;
    todoContainer.appendChild(todoDiv);
  }
}
loadtodos();
