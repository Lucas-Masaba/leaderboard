/*const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

//postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2/scores/', { user: 'John Doe', score:'42' })
 // .then(data => {
 //   console.log(data); 
 // });

const createGame = () => {
  postData(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/",
    { name: "New game" }
  ).then(data => localStorage.setItem("data", JSON.stringify(data)));
};

const postScore = (nameInput, numberInput) => {
  postData(
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SteZ9YnoWtfCLJ2KnA6J/scores/",
    { user: nameInput, score: numberInput }
  ).then(data => localStorage.setItem('data', JSON.stringify(data)))
    console.log()
};
export default { createGame, postScore }*/