let watchListDiv = document.getElementById('watch-list')
let moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies") ) || []


if (watchListDiv.innerHTML) {
    watchListDiv.innerHTML += getHtml(moviesFromLocalStorage)
}else {
    watchListDiv.innerHTML = `<div> there is no stored films here</div>`
}


document.getElementById("remove").addEventListener("click", () => {
     watchListDiv.innerHTML = "";
})

    

    
function getHtml(data) {
    
        return `
            <div class="movie-data">
                        <div class="movie-data-primary">
                            <img src="${data.Poster}" class="movie-poster-img">
                        </div>
                        
                        <div class="movie-data-secondary">
                            <div class="data-heading">
                                <h3 class="film-title">${data.Title}</h3>
                                <span><img class="side-img" src="https://us.123rf.com/450wm/jenjawin/jenjawin1904/jenjawin190400218/120265451-gold-star-rating-icon-vector-eps10-star-sign-yellow-star-icon-.jpg?ver=6"></span>
                                <p>${data.imdbRating}</p>
                            </div>
                            
                            <div class="data-details">
                                 <div class="data-sub-title">
                                    <p class="text">${data.Runtime},</p>
                                    <p class="text"> ${data.Genre}</p>
                                    <button id="remove" class="text">remove</button>
                                </div>
                                   
                                <div class="data-info">
                                     <p class="text">${data.Plot}</p>
                                </div>
                            </div>
                            
                        </div>
            </div>
        ` 
}




// FavMovie()


// async function FavMovie() {
//     storedMovie()
    
//     favourite.map(async title => {
//         const res = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=4d776c51`)
//         const data = await res.json()
//         watchListDiv.innerHTML += getHtml(data)
        
//     })
// }


// function storedMovie() {
//     for (let i = 0; i < localStorage.length; i++) {
//         favourite.push(moviesFromLocalStorage)[i]
//     }
//     return favourite
// }
// console.log(favourite)