const user = { id: 1, name: "rongila", job: "actor", prem: false };
//JavaScript Object Notation (JSON)
const stringFy = JSON.stringify(user);
console.log(user);
console.log(stringFy);
const userObj = JSON.parse(stringFy);
console.log(userObj);
