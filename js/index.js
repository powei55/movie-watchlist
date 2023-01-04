function displayMovies(movies) {
  let myMoviesHtml = movies
    .map((movie) => {
      // const url = movie.image.url
      return `<div class="homepage-info">
                    <h2 class="home-title">${movie.title}</h2>
                    <p class="home-info">${movie.titleType}, ${movie.year}</p>
                </div>`;
    })
    .join('');

  console.log(myMoviesHtml);
  document.getElementById('homepage').innerHTML = `<div class="homepage-info">
            ${myMoviesHtml}        
     <div>`;
}

{
  /* <img  class="movie-home-img" src=${url} alt="">  */
}

async function logMovies(movieLimit) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '330915ddb9msh82893474b451bd7p16d632jsn2ae3921142e4',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };

  const response = await fetch(
    `https://imdb8.p.rapidapi.com/title/v2/find?title=game%20of&limit=${movieLimit}&sortArg=moviemeter%2Casc`,
    options
  );
  const allmovies = await response.json();
  let randomMovies = allmovies.results;

  displayMovies(randomMovies);
  console.log(randomMovies);
}
let movieLimit = 12;

logMovies(movieLimit);
