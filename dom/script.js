const mainContainer = document.getElementById("main");
mainContainer.className = "main";
const text = document.createElement("p");
const note = document.createTextNode("hello world");
text.appendChild(note);
document.getElementById("main").appendChild(text);
