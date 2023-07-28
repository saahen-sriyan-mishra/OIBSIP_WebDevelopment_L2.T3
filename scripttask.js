    
        //line-through font for task as complete
        function toggleTask(checkbox) {
            var label = checkbox.parentNode;
            if (checkbox.checked) {
                label.style.textDecoration = "line-through";
            } else {
                label.style.textDecoration = "none";
            }
        }

        // Function to edit a task
        function editTask(taskTextElement) {
            var updatedTask = prompt("Edit the task:", taskTextElement.textContent);
            if (updatedTask !== null) {
                taskTextElement.textContent = updatedTask.trim();
            }
        }

        // Function to clear all tasks
        function clearAllTasks() {
            var taskList = document.getElementById("task-list");
            taskList.innerHTML = "";
            // Remove all tasks from list
        }

        // Function to clear input box history
        //I dont like those
        function clearInputHistory() {
            var input = document.getElementById("ipbox");
            input.value = ""; // Clear the input box
            input.autocomplete = "off"; // Disable autocomplete
            input.autocomplete = "on"; // Re-enable autocomplete
        }

        // Create a new task list item with checkbox and buttons
        function createTaskListItem(taskText) {
            var taskItem = document.createElement("li");

            // Create a container for task and buttons
            var taskContainer = document.createElement("div");
            taskContainer.className = "task-container";

            // Create the checkbox for task
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.onchange = function () {
                toggleTask(this);
            };
            taskContainer.appendChild(checkbox);

            // Add the task text to the container
            var taskTextElement = document.createElement("span");
            taskTextElement.textContent = taskText;
            taskContainer.appendChild(taskTextElement);

            // Create Edit button
            var editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.onclick = function () {
                editTask(taskTextElement);
            };
            taskContainer.appendChild(editButton);

            // Create Clear button
            var clearButton = document.createElement("button");
            clearButton.textContent = "Clear";
            clearButton.onclick = function () {
                taskItem.remove(); 
                // Remove the task,clear button.
            };
            taskContainer.appendChild(clearButton);

            taskItem.appendChild(taskContainer);
            return taskItem;
        }

        // Function to add a new task to list
        function addTask() {
            var input = document.getElementById("ipbox");
            var taskText = input.value.trim();

            if (taskText === "") {
                alert("Please enter a task!");
                return;
            }

            var taskList = document.getElementById("task-list");
            var taskItem = createTaskListItem(taskText);
            taskList.appendChild(taskItem);

            // Clear the input after adding task
            input.value = "";
        }
//Completed