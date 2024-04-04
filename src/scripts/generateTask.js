const btnAdd = document.querySelector("#button-Add");
const textBoxAdd = document.querySelector("#todoapp-addTask");
const sectionAdd = document.querySelector(".tasksList-listTasks");
let tasksList = [];

btnAdd.addEventListener("click", () => {
  if (textBoxAdd.value === "") {
    window.alert("[ERRO] Você não digitou nenhuma tarefa!");
  } else {
    tasksList.push(textBoxAdd.value);
    
    sectionAdd.innerHTML += `
    <li class="tasksList-task">
    <div>
    <input
    type="checkbox"
    name="taskCheck"
        id="task${tasksList.length}"
        class="tasksList-taskCheck"
        />
        <label for="task${tasksList.length}">${textBoxAdd.value}</label>
        </div>
        <div>
        <button
        type="button"
        class="todo-button fa-solid fa-pen-to-square"
        ></button>
        <button
        type="button"
        class="todo-button fa-solid fa-trash"
        ></button>
        </div>
        </li>
        `;
    }
    textBoxAdd.value = "";
});
