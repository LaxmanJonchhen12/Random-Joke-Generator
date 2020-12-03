let jokeElement = document.getElementById("joke");
let punchLineElement = document.getElementById("punchline");
// function to get random joke
async function getRandomJoke() {
  let originalData = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );
  //   fetching the data from the api and getting json data
  let jsData = await originalData.json();
  //   converting the json data to javascript object
  //   showing the data form the api result in the screen
  jokeElement.innerHTML = `Joke:  ${jsData.setup}`;
  punchLineElement.innerHTML = `PunchLine:  ${jsData.punchline}`;
}
// selecting the random joke button
document.getElementById("btn").addEventListener("click", getRandomJoke);
