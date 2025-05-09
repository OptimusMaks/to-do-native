function addTask() {
    let name = document.getElementById("taskName").value;
    let container = document.querySelector(".tasks-container");

    let newTask = document.createElement("div");
    newTask.classList.add("task__item");

    newTask.innerHTML = '<p class="task__item-title">' + name + '</p>\n' +
        '      <div class="task__item_btns">\n' +
        '        <button class="done" id="doneBtn">Заверишть</button>\n' +
        '        <button class="delete" id="deleteBtn" onclick="removeTask(this)">Удалить</button>\n' +
        '      </div>\n' +
        '    </div>';

    container.insertBefore(newTask, container.querySelector(".task__item"));
}

function removeTask(rmBtn) {
    console.log(rmBtn);
    rmBtn.closest('.task__item').remove();
}

// document.addEventListener("DOMContentLoaded", (event) => {
//   // removeTask();
// })