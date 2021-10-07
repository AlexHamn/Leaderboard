import './style.css';

let scores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hp3AefNEZGwcSDhJHhLB/scores/';

let scoresArray = [];



const scoresList = document.getElementById('scoresList');

const refreshButton = document.getElementById('refresh')


function displayScores() {

  scoresList.innerHTML = ``;

  fetch(scores , {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => {
    return res.json()
  })
    .then(data => {
      scoresArray = data.result;
      console.log(scoresArray);
    });
  
  scoresArray.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${score.user}: ${score.score}</p>`;
    scoresList.append(li);
  })
}

refreshButton.addEventListener('click', displayScores)

const addButton = document.getElementById('addButton');
const user = document.getElementById('user');
const score = document.getElementById('score');

function addScore(e) {
  e.preventDefault();

  fetch(scores , {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "user": `${user.value}`,
	  "score": score.value 
  })
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data));
}

addButton.addEventListener('click', addScore);
