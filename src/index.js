import './style.css';
/*import api from './modules/api.js';

const { createGame, postScore } = api*/

const UL = document.getElementById('leaderboard_ul_id')
const nameInput = document.getElementById('name_input')
const scoreInput = document.getElementById('score_input')

const refreshButton = document.getElementById('refresh_button');
const submitButton = document.getElementById('submit_button')

const gameId = 'SteZ9YnoWtfCLJ2KnA6J'

const submitScore = async (userName, userScore) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    const result = await response.json();
    return result
}
const fetchDataFromAPI = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const getResult = await response.json();
  const resultArray = getResult.result;
  const values = resultArray.map((result) => `<div class="display-table-list">
                      <p>${result.user}: ${result.score}</p>
                  </div>`).join('');
  UL.innerHTML = values;
};

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  await submitScore(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
  fetchDataFromAPI();
});

refreshButton.addEventListener('click', async () => {
  fetchDataFromAPI();
});


document.addEventListener('DOMContentLoaded', () => {
  fetchDataFromAPI();
})
