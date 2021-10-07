import './style.css';

const scores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7oyqKQQCxsTaogFAwN0N/scores/';

let scoresArray = [];

const scoresList = document.getElementById('scoresList');

const refreshButton = document.getElementById('refresh');

function displayScores() {
  scoresList.innerHTML = '';

  fetch(scores, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      scoresArray = data.result;
    });

  scoresArray.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${score.user}: ${score.score}</p>`;
    scoresList.append(li);
  });
}

document.addEventListener('DOMContentLoaded', displayScores);
refreshButton.addEventListener('click', displayScores);

const addButton = document.getElementById('addButton');
const user = document.getElementById('user');
const score = document.getElementById('score');

function addScore(e) {
  e.preventDefault();

  // if (user.value && typeof score.value === 'number') {
  fetch(scores, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: `${user.value}`,
      score: score.value,
    }),
  });
  displayScores();
  // }
}

addButton.addEventListener('click', addScore);
