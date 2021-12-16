const UL = document.getElementById('leaderboard_ul_id')
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
  const values = resultArray.map((result) => `<li class="display-table-list">
                      <p>${result.user}: ${result.score}</p>
                  </li>`).join('');
  UL.innerHTML = values;
};
const resetScoreBoard = (array) => {
  if(array.length > 5) {
    
  }
}

export default { submitScore, fetchDataFromAPI}