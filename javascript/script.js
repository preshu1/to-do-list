const userInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#add");
const ul = document.querySelector("#taskList");

addBtn.addEventListener("click", function () {
  //validation if the user input is empty
  if (userInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }
  //creating li element
  const li = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.textContent = userInput.value;

  taskText.addEventListener("click", function () {
    taskText.classList.toggle("completed");
  });

  //create a delete button to remove task
  const delbtn = document.createElement("button");
  delbtn.textContent = "X";
  delbtn.classList.add("delete-btn");

  //add event listener to remove the entire task
  delbtn.addEventListener("click", function () {
    li.remove();
  });
  li.appendChild(taskText);
  li.appendChild(delbtn);
  ul.appendChild(li);

  userInput.value = "";
  userInput.focus();
});
// adding event listener for enter button
userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
