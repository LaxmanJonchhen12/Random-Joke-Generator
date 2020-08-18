// function to get random joke
async function getRandomJoke() {
  let originalData = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );
  //   fetching the data from the api and getting json data
  let jsData = await originalData.json();
  //   converting the json data to javascript object
  //   showing the data form the api result in the screen
  document.getElementById("joke").innerHTML = `Joke:   ${jsData.setup}`;
  document.getElementById(
    "punchline"
  ).innerHTML = `PunchLine:   ${jsData.punchline}`;
}
// selecting the random joke button
document.getElementById("btn").addEventListener("click", getRandomJoke);
