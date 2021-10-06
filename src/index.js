import './style.css';

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: "My cool new game" 
  })
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data));