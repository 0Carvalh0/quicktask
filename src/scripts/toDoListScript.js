const formAdd = document.querySelector("#add-form");
const formEdit = document.querySelector("#edit-form");
const tasksList = document.querySelector(".tasksList-listTasks");
const textBoxAdd = document.querySelector("#todoapp-addTask");
const textBoxEdit = document.querySelector("#todoapp-editTask");
const btnAdd = document.querySelector("#button-Add");
const btnCancelEdit = document.querySelector("#button-Cancel");
let toDoStorage = [];

let oldInputValue;

// LOCAL STORAGE

if (localStorage.getItem("arrayTasks") == "") {
  localStorage.removeItem("arrayTasks");
}

document.addEventListener("DOMContentLoaded", () => {
  toDoStorage = JSON.parse(localStorage.getItem("arrayTasks"));

  toDoStorage.forEach((element) => {
    saveToDo(element);
  });
});

// TODO EVENTS

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("li");
  const pEl = targetEl.closest("div").querySelector("p");
  let taskTitle;

  if (parentEl && parentEl.querySelector("p")) {
    taskTitle = parentEl.querySelector("p").innerHTML;
  }

  if (targetEl.classList.contains("tasksList-taskCheck")) {
    targetEl.querySelector("i").classList.toggle("fa-check");
    pEl.classList.toggle("done");

    toDoStorage.forEach((element) => {
      if (element.taskTitle == pEl.innerHTML) {
        element.isChecked = !element.isChecked;
      }
    });
    localStorage.setItem("arrayTasks", JSON.stringify(toDoStorage));
  }

  if (targetEl.classList.contains("tasksList-taskRemove")) {
    toDoStorage = toDoStorage.filter(
      (element) => element.taskTitle !== taskTitle
    );
    localStorage.setItem("arrayTasks", JSON.stringify(toDoStorage));

    parentEl.remove();
  }

  if (targetEl.classList.contains("tasksList-taskEdit")) {
    toggleForms();

    textBoxEdit.value = taskTitle;
    oldInputValue = taskTitle;
  }
});

// CREATE TASK

const saveToDo = (element) => {
  if (element.isChecked) {
    tasksList.innerHTML += `
      <li class="tasksList-task">
        <div class="task-LeftSide">
          <span class="tasksList-taskCheck">
            <i class='fa-solid fa-check'></i>
          </span>
          <p class="tasksList-taskName done">${element.taskTitle}</p>
        </div>
        <div class="task-RightSide">
          <button
            type="button"
            class="todo-button fa-solid fa-pen-to-square tasksList-taskEdit"
          ></button>
          <button
            type="button"
            class="todo-button fa-solid fa-trash tasksList-taskRemove"
          ></button>
        </div>
      </li>
      `;
  } else {
    tasksList.innerHTML += `
      <li class="tasksList-task">
        <div class="task-LeftSide">
          <span class="tasksList-taskCheck">
            <i class='fa-solid'></i>
          </span>
          <p class="tasksList-taskName">${element.taskTitle}</p>
        </div>
        <div class="task-RightSide">
          <button
            type="button"
            class="todo-button fa-solid fa-pen-to-square tasksList-taskEdit"
          ></button>
          <button
            type="button"
            class="todo-button fa-solid fa-trash tasksList-taskRemove"
          ></button>
        </div>
      </li>
      `;
  }
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
  const allTasks = document.querySelectorAll(".tasksList-task");

  allTasks.forEach((task) => {
    let taskText = task.querySelector("p");

    if (taskText.innerText === oldInputValue) {
      taskText.innerText = text;

      toDoStorage.forEach((objTask, indexTask) => {
        if (toDoStorage[indexTask].taskTitle == oldInputValue) {
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
