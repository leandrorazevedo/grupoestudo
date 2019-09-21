'use strict';
import db from './database/localstorage.js';

const txtAdd = document.getElementById('txtAddTask');

render();

txtAdd.addEventListener('keyup', KeyboardEvent => {
  if (KeyboardEvent.keyCode === 13 && txtAdd.value.trim()) {
    const id = db.addTask(txtAdd.value);

    clearInput();

    render();
  }
});

function insertIntoNotCompleted(newTask) {
  document.querySelector('.notcompleted').appendChild(newTask);
}

function insertIntoCompleted(newTask) {
  document.querySelector('.completed').appendChild(newTask);
}

function clearInput() {
  txtAdd.value = '';
}

function createTask(text, id) {
  const newTask = document.createElement('div');
  newTask.innerHTML = text;
  newTask.setAttribute('class', 'task');
  newTask.setAttribute('data-parent', '.notcompleted');
  newTask.setAttribute('id', id);

  const checkIcon = createCheckIcon();

  const trashIcon = createTrashIcon();

  newTask.append(trashIcon, checkIcon);

  return newTask;

  function createTrashIcon() {
    const trashIcon = document.createElement('i');
    trashIcon.setAttribute('class', 'fa fa-trash');
    trashIcon.setAttribute('title', 'Delete Task');
    trashIcon.addEventListener('click', function() {
      db.removeTask(id);
      const parent = this.parentElement.getAttribute('data-parent');
      document.querySelector(parent).removeChild(this.parentElement);
    });
    return trashIcon;
  }

  function createCheckIcon() {
    const checkIcon = document.createElement('i');
    checkIcon.setAttribute('class', 'fa fa-check');
    checkIcon.setAttribute('title', 'Complete Task');
    checkIcon.addEventListener('click', function() {
      db.markAsCompleted(id);
      const task = this.parentElement;
      task.setAttribute('data-parent', '.completed');
      document.querySelector('.completed').appendChild(this.parentElement);
      // this.parentElement.removeChild(this);
    });
    return checkIcon;
  }
}

function render() {
  document.querySelector('.notcompleted').innerHTML = '<h3>Not Completed</h3>';
  document.querySelector('.completed').innerHTML = '<h3>Completed</h3>';

  db.database.forEach(row => {
    const newTask = createTask(row.text, row.id);
    row.completed ? insertIntoCompleted(newTask) : insertIntoNotCompleted(newTask);
  });
}
