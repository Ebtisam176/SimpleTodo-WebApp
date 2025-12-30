const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim(); // get the task text and remove spaces
    if(taskText !== "") {
        const li = document.createElement('li'); // create a new list item
        li.textContent = taskText;

        const deleteBtn = document.createElement('button'); // create delete button
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li); // remove the task when clicked
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li); // add the task to the list
        taskInput.value = ""; // clear input field
    } else {
        alert("Please enter a task!");
    }
});
