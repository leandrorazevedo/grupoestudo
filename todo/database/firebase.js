'use strict';

const TASK_COLLECTION = 'tasks';
var firestore = null;

async function init() {
  let firebaseConfig = {
    apiKey: 'AIzaSyBJwUU0lNqIHE-EvSRXnvcZv7SJ2BJa68s',
    authDomain: 'todo-54a15.firebaseapp.com',
    databaseURL: 'https://todo-54a15.firebaseio.com',
    projectId: 'todo-54a15',
    storageBucket: '',
    messagingSenderId: '877132224552',
    appId: '1:877132224552:web:50f530d8e84da0fb727d1d'
  };
  // Initialize Firebase
  await firebase.initializeApp(firebaseConfig);
  firestore = firebase.firestore();
}

async function addTask(text) {
  const refTask = await firestore.collection(TASK_COLLECTION).doc();
  const task = {
    id: refTask.id,
    text,
    completed: false
  };

  await refTask.set(task);
}

async function removeTask(id) {
  await firestore
    .collection(TASK_COLLECTION)
    .doc(id)
    .delete();
}

async function getDb() {
  return await firestore.collection(TASK_COLLECTION).get();
}

async function markAsCompleted(id) {
  await firestore
    .collection(TASK_COLLECTION)
    .doc(id)
    .update({ completed: true });
}

function listenerEventStorage(callback) {
  firestore.collection(TASK_COLLECTION).onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      const eventTask = {
        type: change.type,
        task: {
          id: change.doc.id,
          ...change.doc.data()
        }
      };
      console.log(eventTask);
      if (callback && typeof callback === 'function') callback(eventTask);
    });
  });
}

export default { init, addTask, removeTask, getDb, markAsCompleted, listenerEventStorage };
