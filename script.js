// Select elements from the DOM
const inputBox = document.querySelector("input");
const addButton = document.querySelector("button");
const taskList = document.querySelector(".taskList");

// Function to add a new task
function addTask() {
    // Get user input
    let taskText = inputBox.value.trim(); 

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!"); 
        return;
    }

    // Create a new <li> element
    let listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a "Delete" button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteTask");

    // Append the button to the task item
    listItem.appendChild(deleteButton);

    // Append the task to the task list
    taskList.appendChild(listItem);

    // Clear the input box after adding the task
    inputBox.value = "";
}

// Function to delete a task
function deleteTask(event) {
    if (event.target.classList.contains("deleteTask")) {
        event.target.parentElement.remove(); // Remove the <li> element
    }
}

// Add event listener for "Add Task" button
addButton.addEventListener("click", addTask);

// Add event listener to delete tasks
taskList.addEventListener("click", deleteTask);

// Allow adding task using "Enter" key
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
