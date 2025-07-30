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
emptyMessage.className = "empty";

const poweredBy = document.createElement("p");
poweredBy.textContent = "Powered By Pinecone Mongolia";

const totalCounter = document.createElement("div");
totalCounter.className = "total-counter";

function updateCounter() {
  const totalTaskCount = todoList.children.length;
  let completedCount = 0;
  for (let i = 0; i < todoList.children.length; i++) {
    if (todoList.children[i].classList.contains("completed")) {
      completedCount++;
    }
  }
  totalCounter.textContent = `${completedCount} of ${totalTaskCount} tasks completed`;
}
const onClick = () => {
  const taskText = input.value.trim();

  if (taskText !== "") {
    emptyMessage.textContent = "";

    const todoItem = document.createElement("li");
    todoItem.className = "todoItem";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";

    const taskSpan = document.createElement("p");
    taskSpan.textContent = taskText;
    taskSpan.className = "task-text";

    const deleteBtn = document.createElement("p");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(todoItem);
      if (todoList.children.length === 0) {
        emptyMessage.textContent = "No tasks yet. Add one above!";
      }
      updateCounter();
    });

    checkbox.addEventListener("click", () => {
      todoItem.classList.toggle("completed");
      updateCounter();
    });
    todoItem.appendChild(checkbox);
    todoItem.appendChild(taskSpan);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);
    input.value = "";
    updateCounter();
  }
};

const showCompleted = () => {
  const items = todoList.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    const checkbox = items[i].querySelector("input[type='checkbox']");
    items[i].style.display = checkbox.checked ? "" : "none";
  }
};

const showActive = () => {
  const items = todoList.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    const checkbox = items[i].querySelector("input[type='checkbox']");
    items[i].style.display = !checkbox.checked ? "" : "none";
  }
};

const showAll = () => {
  const items = todoList.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = "";
  }
};

addBtn.addEventListener("click", onClick);
btnCompleted.addEventListener("click", showCompleted);
btnActive.addEventListener("click", showActive);
btnAll.addEventListener("click", showAll);

container.append(
  heading,
  input,
  addBtn,
  btnAll,
  btnActive,
  btnCompleted,
  todoList,
  emptyMessage,
  poweredBy,
  totalCounter
);
