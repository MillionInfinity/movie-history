const domString = (movieArray, config, whereToPrint, myCollectionMode = false) => {
  let strang = '';
  movieArray.forEach((movie, index) => {
    console.error('index:', index);
    if (index % 3 === 0) {
      strang += `<div class="row">`;
    }
    strang += `<div class="col-sm-6 col-md-6">`;
    strang +=   `<div class="thumbnail movie">`;
    if (myCollectionMode) {
      strang += `<a class="btn deleteMovieFromCollectionEvent">X</a>`;
    }
    strang +=     `<img data-poster="${movie.poster_path}"src="${config.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
    strang +=     `<div class="caption">`;
    strang +=       `<h3 class ="movie-title">${movie.original_title ? movie.original_title : movie.title}</h3>`; // the ? is like an if statement
    strang +=       `<p class ="movie-overview">${movie.overview}</p>`;
    if (!myCollectionMode) {
      strang +=       `<p><a href="#" class="btn btn-default addMovieToWishList" role="button">Wishlist</a></p>`;
    } else if (myCollectionMode && !movie.isWatched) {
      strang += `<p><a class="btn btn-primary updateMovieToWatched" role="button">I've Watched It</a>`;
    } else {
      strang += `<p>I'm going to put star rating here one day.<p>`;
    }
    strang +=     `</div>`;
    strang +=   `</div>`;
    strang += `</div>`;

    if (index % 3 === 2) {
      strang += `</div>`;
    }
  });
  printToDom(whereToPrint, strang);
};

const printToDom = (whereToPrint, stringz) => {
  $(`#${whereToPrint}`).html(stringz);
};

module.exports = {
  domString,
};
