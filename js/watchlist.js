let watchListDiv = document.getElementById('watch-list');
let moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies')) || [];

if (watchListDiv.innerHTML) {
  watchListDiv.innerHTML += getHtml(moviesFromLocalStorage);
} else {
  watchListDiv.innerHTML = `<div> there is no stored films here</div>`;
}

document.getElementById('remove').addEventListener('click', () => {
  watchListDiv.innerHTML = '';
});

function getHtml(data) {
  return ` <div class="movie-data">
                       
                        <img src="${data.Poster}" class="movie-poster-img">
                        <div class="data-heading">
                            <h3 class="film-title">${data.Title}</h3>
                            <span><img class="side-img" src="https://us.123rf.com/450wm/jenjawin/jenjawin1904/jenjawin190400218/120265451-gold-star-rating-icon-vector-eps10-star-sign-yellow-star-icon-.jpg?ver=6"></span>
                            <p class="star-rating">${data.imdbRating}</p>
                        </div>

                        <div class="data-info">
                            <p class="text">${data.Runtime},</p>
                            <p class="text"> ${data.Genre}</p>
                            <button class=" text watch-list-btn" onclick=test("${data.imdbID}")>watchlist</button> 
                        </div>
                        <p class="plot-text">${data.Plot}</p>
                </div>
`;
}
