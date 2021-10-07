import './style.css';

const scores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/i4vts8lsqZgTgqo77Ovp/scores/';

let scoresArray = [];

const scoresList = document.getElementById('scoresList');

const refreshButton = document.getElementById('refresh');

async function displayScores() {
  scoresList.innerHTML = '';

  const response = await fetch(scores, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  const result = await data.result;

  scoresArray = result;

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
  user.value = '';
  score.value = '';
  displayScores();
}

addButton.addEventListener('click', addScore);
