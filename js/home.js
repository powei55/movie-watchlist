





fetch ('https://api.themoviedb.org/3/movie/76341?api_key=b74deae699ebad9cc343b80e7808d1e2')
.then(response => response.json())
.then(data =>  console.log(data))



// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>