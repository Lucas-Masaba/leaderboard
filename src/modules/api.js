
  
    fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/scores/", {
      method: "POST",
      body: JSON.stringify({
        user: "John Doe",
        score: 42,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(json => console.log(json))


