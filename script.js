const container = document.querySelector(".container");

const heading = document.createElement("h1");
heading.textContent = "To-Do List";

const input = document.createElement("input");
input.type = "text";
input.id = "todoInput";
input.placeholder = "Enter a task";
input.className = "input";

const addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.className = "add-btn";

const btnAll = document.createElement("button");
btnAll.textContent = "All";
btnAll.className = "add-btn";

const btnActive = document.createElement("button");
btnActive.textContent = "Active";
btnActive.className = "add-btn";

const btnCompleted = document.createElement("button");
btnCompleted.textContent = "Completed";
btnCompleted.className = "add-btn";

const todoList = document.createElement("ul");
todoList.id = "todoList";
todoList.className = "todo-list";

const emptyMessage = document.createElement("p");
emptyMessage.id = "emptyMessage";
emptyMessage.textContent = "No tasks yet. Add one above!";

const poweredBy = document.createElement("p");
poweredBy.textContent = "Powered By Pinecone Mongolia";

const onClick = () => {
  const taskText = input.value;

  if (taskText.trim() !== "") {
    emptyMessage.textContent = "";
    const todoItem = document.createElement("li");
    todoItem.textContent = taskText;

    todoList.appendChild(todoItem);

    input.value = "";
  }
};

addBtn.addEventListener("click", onClick);
container.append(
  heading,
  input,
  addBtn,
  btnAll,
  btnActive,
  btnCompleted,
  todoList,
  emptyMessage,
  poweredBy
);
