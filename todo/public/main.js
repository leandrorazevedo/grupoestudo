'use strict';
import fire from './database/firebase.js';

const txtAdd = document.getElementById('txtAddTask');

window.addEventListener('load', async () => {
  await fire.init();
  fire.listenerEventStorage(renderStorageToHtml);
});

txtAdd.addEventListener('keyup', KeyboardEvent => {
  if (KeyboardEvent.keyCode === 13 && txtAdd.value.trim()) {
    fire.addTask(txtAdd.value);
    clearInput();
  }
});

function insertIntoNotCompleted(newTask) {
  newTask.dataset.parent = '.notcompleted';
  document.querySelector('.notcompleted').appendChild(newTask);
}

function insertIntoCompleted(newTask) {
  newTask.dataset.parent = '.completed';
  document.querySelector('.completed').appendChild(newTask);
}

function removeTask(task) {
  const taskHtml = document.getElementById(task.id);
  document.querySelector(taskHtml.dataset.parent).removeChild(taskHtml);
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
      fire.removeTask(id);
    });
    return trashIcon;
  }

  function createCheckIcon() {
    const checkIcon = document.createElement('i');
    checkIcon.setAttribute('class', 'fa fa-check');
    checkIcon.setAttribute('title', 'Complete Task');
    checkIcon.addEventListener('click', function() {
      fire.markAsCompleted(id);
    });
    return checkIcon;
  }
}

function renderStorageToHtml(event) {
  let task = null;

  if (event.type === 'added') {
    task = createTask(event.task.text, event.task.id);
    event.task.completed ? insertIntoCompleted(task) : insertIntoNotCompleted(task);
  }

  if (event.type === 'removed') {
    removeTask(event.task);
  }

  if (event.type === 'modified') {
    task = document.getElementById(event.task.id);
    event.task.completed ? insertIntoCompleted(task) : insertIntoNotCompleted(task);
  }
}
