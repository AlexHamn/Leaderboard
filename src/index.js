import './style.css';

let game = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hp3AefNEZGwcSDhJHhLB';
let scores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hp3AefNEZGwcSDhJHhLB/scores/';

// fetch(scores , {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     "user": "John Doe",
// 	  "score": 42 
//   })
// })
//   .then(res => {
//     return res.json()
//   })
//   .then(data => console.log(data));

let scoresArray = [];

const refreshButton = document.getElementById('refresh')


const scoresList = document.getElementById('scoresList');



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
  
  console.log('ouch!');

    
  
  scoresArray.forEach((score) => {

    console.log('working')
    const li = document.createElement('li');
    
    li.innerHTML = `<p>${score.user}: ${score.score}</p>`;

    scoresList.append(li);
  })
}

refreshButton.addEventListener('click', displayScores)


