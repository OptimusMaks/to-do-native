function addTask() {
  let name = document.getElementById("taskName").value;
  let container = document.querySelector(".tasks-container");


  container.innerHTML = '<div class="task__item">\n' +
    '      <p class="task__item-title">' + name + '</p>\n' +
    '      <div class="task__item_btns">\n' +
    '        <button class="done" id="doneBtn">Заверишть</button>\n' +
    '        <button class="delete" id="deleteBtn">Удалить</button>\n' +
    '      </div>\n' +
    '    </div>';

    // document.body.insertBefore(newDiv, my_div);
}