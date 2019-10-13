'use strict';

var database = getDb();

function getDb() {
  return JSON.parse(localStorage.getItem('data')) || [];
}

function saveToDb() {
  localStorage.setItem('data', JSON.stringify(database));
}

function addTask(text) {
  const id = new Date().toISOString().replace(/\D/g, '');
  const task = {
    id,
    text,
    completed: false
  };

  database.push(task);

  saveToDb();

  window.dispatchEvent(new CustomEvent('taskStorage', { detail: { type: 'added', task: task } }));

  return id;
}

function removeTask(id) {
  const index = database.findIndex(item => item.id === id);

  window.dispatchEvent(new CustomEvent('taskStorage', { detail: { type: 'removed', task: database[index] } }));
  database.splice(index, 1);

  saveToDb();
}

function markAsCompleted(id) {
  const index = database.findIndex(item => item.id === id);
  database[index].completed = true;
  saveToDb();
  window.dispatchEvent(new CustomEvent('taskStorage', { detail: { type: 'updated', task: database[index] } }));
}

function listenerEventStorage(callback) {
  window.addEventListener('taskStorage', event => {
    if (callback && typeof callback === 'function') callback(event);
  });
}

export default { addTask, removeTask, markAsCompleted, database, listenerEventStorage };
