'use strict';

var database = getDb();

function getDb() {
  return JSON.parse(localStorage.getItem('data')) || [];
}

function saveToDb() {
  localStorage.setItem('data', JSON.stringify(database));
}

function addTask(text) {
  const id = new Date()
    .toISOString()
    .match(/\d+/g)
    .join('');
  const task = {
    id,
    text,
    completed: false
  };

  database.push(task);

  saveToDb();

  return id;
}

function removeTask(id) {
  const index = database.findIndex(item => item.id === id);

  database.splice(index, 1);

  saveToDb();
}

function markAsCompleted(id) {
  const index = database.findIndex(item => item.id === id);
  database[index].completed = true;
  saveToDb();
}

export default { addTask, removeTask, markAsCompleted, database };
