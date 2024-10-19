const text = document.querySelector(".text");
console.log(text);

const input = document.createElement("input");
console.log(input);

const containers = document.querySelectorAll(".container");
containers[2].append(input);

const p = document.createElement("p");
p.innerHTML = "Hello, JS!"
containers[1].append(p);

const users = ["Jax Teller", "Tara Knowles", "Gemma Morrow", "Chibs Telford", "Opie Winston"];
const ul = document.querySelector(".users");

users.forEach(user => {
    const li = document.createElement("li");
    li.classList.add("user-item");
    li.innerHTML = user;
    ul.append(li);
})

//const container = document.querySelector(".container"); // containers[0]
containers[1].classList.remove("wrapper");
containers[1].style = "background-color: #54dd11;";
