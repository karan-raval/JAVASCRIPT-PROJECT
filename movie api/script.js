const main = document.getElementById("content");
const form = document
  .getElementById("form")
  .addEventListener("submit", (ele) => {
    ele.preventDefault();
    const search = document.getElementById("search").value;
    // console.log(search);

    // 
    fetch(`https://www.omdbapi.com/?t=${search}&apikey=c6674cc9`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.Error == 'Incorrect IMDb ID.') {
            // swal("Empty Input", "", "error");
            Swal.fire({
                title: "Please Enter Movie or Web-series Name",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        } else if (res.Error == 'Movie not found!') {
            // swal("Bad Input", ", "warning");
            Swal.fire({
                title: "Entered Name didn't matched",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
            } else {
        main.innerHTML = "";
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
            <img src="${res.Poster}" alt="${res.Title}" />
            <div class="movie-info">
                 <h3>${res.Title}</h3>
                <span class="${res.imdbRating}"</span>
            </div>
             <div class="overview">
             <h3>Type:&nbsp;<span>${res.Type}</span></h3>
             <h3>Season:&nbsp;<span>${res.totalSeasons}</span></h3>
             <h3>Year:&nbsp;<span>${res.Year}</span></h3>
             <h3>IMDb:&nbsp;<span>${res.imdbRating}</span></h3>
             <h3>Gener:&nbsp;<span>${res.Genre}</span></h3>
             </div>`;

        main.appendChild(movieEl);
        }
      })
  });


   function view()
   {
    fetch(`https://www.omdbapi.com/?t=Wednesday&apikey=c6674cc9`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      main.innerHTML = "";

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
          <img src="${res.Poster}" alt="${res.Title}" />
          <div class="movie-info">
               <h3>${res.Title}</h3>
              <span class="${res.imdbRating}"</span>
          </div>
           <div class="overview">
           <h3>Type:&nbsp;<span>${res.Type}</span></h3>
           <h3>Season:&nbsp;<span>${res.totalSeasons}</span></h3>
           <h3>Year:&nbsp;<span>${res.Year}</span></h3>
           <h3>IMDb:&nbsp;<span>${res.imdbRating}</span></h3>
           <h3>Gener:&nbsp;<span>${res.Genre}</span></h3>
           </div>`;

      main.appendChild(movieEl);
    })

    fetch(`https://www.omdbapi.com/?t=lucifer&apikey=c6674cc9`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
          <img src="${res.Poster}" alt="${res.Title}" />
          <div class="movie-info">
               <h3>${res.Title}</h3>
              <span class="${res.imdbRating}"</span>
          </div>
           <div class="overview">
           <h3>Type:&nbsp;<span>${res.Type}</span></h3>
           <h3>Season:&nbsp;<span>${res.totalSeasons}</span></h3>
           <h3>Year:&nbsp;<span>${res.Year}</span></h3>
           <h3>IMDb:&nbsp;<span>${res.imdbRating}</span></h3>
           <h3>Gener:&nbsp;<span>${res.Genre}</span></h3>
           </div>`;

      main.appendChild(movieEl);
    })
    fetch(`https://www.omdbapi.com/?t=Stranger Things&apikey=c6674cc9`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
          <img src="${res.Poster}" alt="${res.Title}" />
          <div class="movie-info">
               <h3>${res.Title}</h3>
              <span class="${res.imdbRating}"</span>
          </div>
           <div class="overview">
           <h3>Type:&nbsp;<span>${res.Type}</span></h3>
           <h3>Season:&nbsp;<span>${res.totalSeasons}</span></h3>
           <h3>Year:&nbsp;<span>${res.Year}</span></h3>
           <h3>IMDb:&nbsp;<span>${res.imdbRating}</span></h3>
           <h3>Gener:&nbsp;<span>${res.Genre}</span></h3>
           </div>`;

      main.appendChild(movieEl);
    })

    fetch(`https://www.omdbapi.com/?t=Sacred Games&apikey=c6674cc9`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
          <img src="${res.Poster}" alt="${res.Title}" />
          <div class="movie-info">
               <h3>${res.Title}</h3>
              <span class="${res.imdbRating}"</span>
          </div>
           <div class="overview">
           <h3>Type:&nbsp;<span>${res.Type}</span></h3>
           <h3>Season:&nbsp;<span>${res.totalSeasons}</span></h3>
           <h3>Year:&nbsp;<span>${res.Year}</span></h3>
           <h3>IMDb:&nbsp;<span>${res.imdbRating}</span></h3>
           <h3>Gener:&nbsp;<span>${res.Genre}</span></h3>
           </div>`;

      main.appendChild(movieEl);
    })


    fetch(`https://www.omdbapi.com/?t=Breaking Bad&apikey=c6674cc9`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
          <img src="${res.Poster}" alt="${res.Title}" />
          <div class="movie-info">
               <h3>${res.Title}</h3>
              <span class="${res.imdbRating}"</span>
          </div>
           <div class="overview">
           <h3>Type:&nbsp;<span>${res.Type}</span></h3>
           <h3>Season:&nbsp;<span>${res.totalSeasons}</span></h3>
           <h3>Year:&nbsp;<span>${res.Year}</span></h3>
           <h3>IMDb:&nbsp;<span>${res.imdbRating}</span></h3>
           <h3>Gener:&nbsp;<span>${res.Genre}</span></h3>
           </div>`;

      main.appendChild(movieEl);
    })
    fetch(`https://www.omdbapi.com/?t=Money Heist&apikey=c6674cc9`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
          <img src="${res.Poster}" alt="${res.Title}" />
          <div class="movie-info">
               <h3>${res.Title}</h3>
              <span class="${res.imdbRating}"</span>
          </div>
           <div class="overview">
           <h3>Type:&nbsp;<span>${res.Type}</span></h3>
           <h3>Season:&nbsp;<span>${res.totalSeasons}</span></h3>
           <h3>Year:&nbsp;<span>${res.Year}</span></h3>
           <h3>IMDb:&nbsp;<span>${res.imdbRating}</span></h3>
           <h3>Gener:&nbsp;<span>${res.Genre}</span></h3>
           </div>`;

      main.appendChild(movieEl);
    })

    fetch(`https://www.omdbapi.com/?t=kota factory&apikey=c6674cc9`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
          <img src="${res.Poster}" alt="${res.Title}" />
          <div class="movie-info">
               <h3>${res.Title}</h3>
              <span class="${res.imdbRating}"</span>
          </div>
           <div class="overview">
           <h3>Type:&nbsp;<span>${res.Type}</span></h3>
           <h3>Season:&nbsp;<span>${res.totalSeasons}</span></h3>
           <h3>Year:&nbsp;<span>${res.Year}</span></h3>
           <h3>IMDb:&nbsp;<span>${res.imdbRating}</span></h3>
           <h3>Gener:&nbsp;<span>${res.Genre}</span></h3>
           </div>`;

      main.appendChild(movieEl);
    })

    fetch(`https://www.omdbapi.com/?t=delhi crime&apikey=c6674cc9`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      const movieEl = document.createElement("div");
      movieEl.classList.add("movie");

      movieEl.innerHTML = `
          <img src="${res.Poster}" alt="${res.Title}" />
          <div class="movie-info">
               <h3>${res.Title}</h3>
              <span class="${res.imdbRating}"</span>
          </div>
           <div class="overview">
           <h3>Type:&nbsp;<span>${res.Type}</span></h3>
           <h3>Season:&nbsp;<span>${res.totalSeasons}</span></h3>
           <h3>Year:&nbsp;<span>${res.Year}</span></h3>
           <h3>IMDb:&nbsp;<span>${res.imdbRating}</span></h3>
           <h3>Gener:&nbsp;<span>${res.Genre}</span></h3>
           </div>`;

      main.appendChild(movieEl);
    })
   }

   view()
   
   