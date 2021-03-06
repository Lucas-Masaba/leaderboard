import colorTiles from "./ui.js";

const UL = document.getElementById('leaderboard_ul_id');
const gameId = 'SteZ4YnoWtfCLJ2KnA6J';

const submitScore = async (userName, userScore) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: userName,
        score: userScore,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const result = await response.json();
  return result;
};
const fetchDataFromAPI = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
  );
  const getResult = await response.json();
  const resultArray = getResult.result;
  const values = resultArray
    .map(
      (result) => `<li class="score_item">
                      <p>${result.user}: ${result.score}</p>
                  </li>`,
    )
    .join('');
  UL.innerHTML = values;
  const scoreList = document.querySelectorAll('li');
 
  colorTiles(scoreList)
};



export default { submitScore, fetchDataFromAPI };
