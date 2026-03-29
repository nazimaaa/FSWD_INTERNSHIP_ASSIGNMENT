const users = [
    { name: "Ali", age: 21 },
    { name: "Sara", age: 22 },
    { name: "John", age: 23 }
];

const list = document.getElementById("list");

users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name + " - " + user.age;
    list.appendChild(li);
});