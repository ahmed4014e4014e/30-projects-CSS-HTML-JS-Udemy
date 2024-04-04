const form = document.getElementById("Form");
const input = document.getElementById("Input");
const taskList = document.getElementById("Task_list");

// console.log(form, input, taskList);

form.onsubmit = (e) => {
  e.preventDefault();
  addTask();
};

function addTask(task) {
  let taskValue = input.value;
  task ? (taskValue = task.text) : task;
  taskValue ? displayTask() : taskValue;

  // console.log(taskValue);

  function displayTask() {
    const newTask = document.createElement("li");

    newTask.innerHTML = taskValue;

    taskList.appendChild(newTask);

    input.value = "";
    // console.log(newTask);
    newTask.onclick = () => {
      newTask.classList.toggle("completed");

      newTask.classList.contains("completed")
        ? ((newTask.innerHTML = `<span>${taskValue} &#10004;</span><span onclick = "deleteTask()">&#10060</span>`),
          newTask.classList.toggle("delete_task"))
        : ((newTask.innerHTML = `${taskValue}`),
          newTask.classList.toggle("delete_task"));
    };
  }
}

// delete task function
function deleteTask() {
  document.querySelectorAll("li").forEach((element) => {
    element.classList.contains("delete_task") ? element.remove() : element;
  });
}
