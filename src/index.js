import './style.css';

let game = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hp3AefNEZGwcSDhJHhLB';
let scores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hp3AefNEZGwcSDhJHhLB/scores/';

fetch(scores , {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "user": "John Doe",
	  "score": 42 
  })
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data));

  fetch(scores , {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  // body: JSON.stringify({
  //   "user": "John Doe",
	//   "score": 42 
  // })
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data));