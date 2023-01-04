const searchInput = document.querySelector('#movie-name');
// const getMovie = document.getElementById('searchBtn')
const findFilm = document.getElementById('find-film');
let movieArray = [];
let films = [];
let searchBtn = document.querySelector('#searchBtn');
let closeBtn = document.querySelector('#closeBtn');
let searchBox = document.querySelector('.searchBox');
let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('#menuToggle');
let header = document.querySelector('header');

searchBtn.onclick = function () {
  searchBox.classList.add('active');
  closeBtn.classList.add('active');
  searchBtn.classList.add('active');
  menuToggle.classList.add('hide');
  header.classList.remove('open');
};

closeBtn.onclick = function () {
  searchBox.classList.remove('active');
  closeBtn.classList.remove('active');
  searchBtn.classList.remove('active');
  menuToggle.classList.remove('hide');
};

menuToggle.onclick = function () {
  header.classList.toggle('open');
  searchBox.classList.remove('active');
  closeBtn.classList.remove('active');
  searchBtn.classList.remove('active');
};

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loadMovies();
  console.log(loadMovies);
});

async function loadMovies() {
  findFilm.innerHTML = '';
  movieArray = [];
  const url = `https://www.omdbapi.com/?apikey=4d776c51&s=${searchInput.value}`;
  const res = await fetch(`${url}`);
  const data = await res.json();

  console.log(data.Response);

  if (data.Response === 'True') {
    renderMovie(data);
  } else {
    findFilm.innerHTML = `<div class="fail-container">                 
                  <p class="fail-text">Unable to find what you’re looking for. Please try another search.</p>
                  </div>
            `;
  }
}

async function renderMovie(data) {
  for (let i = 0; i < 6; i++) {
    movieArray.push(data.Search[i].imdbID);
  }

  for (let i = 0; i < movieArray.length; i++) {
    const dataResponse = await fetch(`https://www.apiomdb.com/?apikey=4d776c51&i=${movieArray[i]}`);
    const data = await dataResponse.json();

    findFilm.innerHTML += ` <div class="movie-data">
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
}

async function test(title) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=4d776c51&i=${title}`);
  const result = await res.json();
  console.log(result);

  localStorage.setItem('movies', JSON.stringify(result));
}

// localStorage.setItem('myCat', 'Tom');
// const cat = localStorage.getItem('myCat')

// localStorage.removeItem(cat);
// localStorage.clear();
// console.log(cat)
//
// findFilm.innerHTML += `
//             <div class="movie-data">
//                         <div class="movie-data-primary">
//                             <img src="${data.Poster}" class="movie-poster-img">
//                         </div>

//                         <div class="movie-data-secondary">
//                             <div class="data-heading">
//                                 <h3 class="film-title">${data.Title}</h3>
//                                 <span><img class="side-img" src="https://us.123rf.com/450wm/jenjawin/jenjawin1904/jenjawin190400218/120265451-gold-star-rating-icon-vector-eps10-star-sign-yellow-star-icon-.jpg?ver=6"></span>
//                                 <p>${data.imdbRating}</p>
//                             </div>

//                             <div class="data-details">
//                                  <div class="data-sub-title">
//                                     <p class="text">${data.Runtime}</p>
//                                     <p class="text"> ${data.Genre}</p>
//                                     <button class="text" name="add" id="${data.imdbID}"><img class="side-img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"
//                                     onclick=test("${data.imdbID}")></button>
//                                     <p class="text">watchlist</p>
//                                 </div>

//                                 <div class="data-info">
//                                      <p class="text">${data.Plot}</p>
//                                 </div>
//                             </div>

//                         </div>
//             </div>
//         `

//
