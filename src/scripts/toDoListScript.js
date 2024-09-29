const formAdd = document.querySelector("#add-form");
const formEdit = document.querySelector("#edit-form");
const tasksList = document.querySelector(".todoapp__tasks-list");
const textBoxAdd = document.querySelector("#todoapp-addTask");
const textBoxEdit = document.querySelector("#todoapp-editTask");
const btnAdd = document.querySelector("#button-Add");
const btnCancelEdit = document.querySelector("#button-Cancel");
let toDoStorage = [];

let oldInputValue;

if (!localStorage.getItem("arrayTasks")) {
  localStorage.setItem("arrayTasks", JSON.stringify([]));
}

document.addEventListener("DOMContentLoaded", () => {
  const storedTasks = localStorage.getItem("arrayTasks");
  toDoStorage = storedTasks ? JSON.parse(storedTasks) : [];

  toDoStorage.forEach((element) => {
    saveToDo(element);
  });
});

// TODO EVENTS

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("li");
  const parentDiv = targetEl.closest("div");
  const pEl = parentDiv ? parentDiv.querySelector("p") : null;
  let taskTitle;

  if (parentEl && parentEl.querySelector("p")) {
    taskTitle = parentEl.querySelector("p").innerHTML;
  }

  if (targetEl.classList.contains("todoapp__task-check")) {
    targetEl.querySelector("i").classList.toggle("fa-check");
    pEl.classList.toggle("done");

    toDoStorage.forEach((element) => {
      if (element.taskTitle === pEl.innerHTML) {
        element.isChecked = !element.isChecked;
      }
    });
    localStorage.setItem("arrayTasks", JSON.stringify(toDoStorage));
  }

  if (targetEl.classList.contains("todoapp__button--removeTask")) {
    toDoStorage = toDoStorage.filter(
      (element) => element.taskTitle !== taskTitle
    );
    localStorage.setItem("arrayTasks", JSON.stringify(toDoStorage));
    parentEl.remove();
  }

  if (targetEl.classList.contains("todoapp__button--editTask")) {
    oldInputValue = taskTitle; // Definindo o valor aqui
    toggleForms();
    textBoxEdit.value = taskTitle;
  }
});

// CREATE TASK

const saveToDo = (element) => {
  const li = document.createElement("li");
  li.className = "todoapp__task";

  const leftSide = document.createElement("div");
  leftSide.className = "task-LeftSide";

  const checkSpan = document.createElement("span");
  checkSpan.className = "todoapp__task-check";
  checkSpan.innerHTML = `<i class='fa-solid ${
    element.isChecked ? "fa-check" : ""
  }'></i>`;

  const p = document.createElement("p");
  p.className = "todoapp__task-name";
  if (element.isChecked) {
    p.classList.add("done");
  }
  p.innerText = element.taskTitle;

  leftSide.appendChild(checkSpan);
  leftSide.appendChild(p);

  const rightSide = document.createElement("div");
  rightSide.className = "task-RightSide";
  rightSide.innerHTML = `
    <button type="button" class="todoapp__button fa-solid fa-pen-to-square todoapp__button--editTask"></button>
    <button type="button" class="todoapp__button fa-solid fa-trash todoapp__button--removeTask"></button>
    `;

  li.appendChild(leftSide);
  li.appendChild(rightSide);

  tasksList.appendChild(li);
};

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = textBoxAdd.value;

  if (inputValue) {
    const objTask = {
      isChecked: false,
      taskTitle: inputValue,
    };

    saveToDo(objTask);
    toDoStorage.push(objTask);
    localStorage.setItem("arrayTasks", JSON.stringify(toDoStorage));

    textBoxAdd.value = "";
    textBoxAdd.focus();
  }
});

// EDIT TASK

const toggleForms = () => {
  formEdit.classList.toggle("hide");
  formAdd.classList.toggle("hide");
  tasksList.classList.toggle("hide");
};

const updateToDo = (text) => {
  const allTasks = document.querySelectorAll(".todoapp__task");

  allTasks.forEach((task) => {
    let taskText = task.querySelector("p");

    if (taskText.innerText === oldInputValue) {
      taskText.innerText = text;

      toDoStorage.forEach((objTask, indexTask) => {
        if (toDoStorage[indexTask].taskTitle === oldInputValue) {
          objTask.taskTitle = text;
          localStorage.setItem("arrayTasks", JSON.stringify(toDoStorage));
        }
      });
    }
  });
};

formEdit.addEventListener("submit", (e) => {
  e.preventDefault();

  const editInputValue = textBoxEdit.value;

  if (editInputValue) {
    updateToDo(editInputValue);
  }

  toggleForms();
});

btnCancelEdit.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});
