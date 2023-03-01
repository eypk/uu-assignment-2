console.log("homework2");

//everything will be developed using pure javascript

// First Class Consrtuctor functions will be created

//Class Movie parent Class

class Movie {
  constructor(filmName, filmRating) {
    this.filmName = filmName;
    this.filmRating = filmRating;
  }
}
//ok

//class Movies

class Movies {
  constructor(movieList) {
    this.movieList = movieList;
  }
}
//ok

//Class Artisit by Mark

class Artist extends Movie {
  constructor(filmName, filmRating, artistName, ArtistDob) {
    super(filmName, filmRating);
    this.artistName = artistName;
    this.ArtistDob = ArtistDob;
  }
}
//ok

//Class Director by Fatih

class Director extends Artist {
  constructor(filmName, filmRating, artistName, ArtistDob, movieList) {
    super(filmName, filmRating, artistName, ArtistDob);
    this.movieList = movieList;
  }
}

//Class Writer by Eyup

//Class Actor by Fatih

// Entity to be created using constructor

const film1 = new Movie("mission impossible", 8);
const film2 = new Movie("mission impossible-2", 8);
const film3 = new Movie("mission impossible-3", 8);

const movieList = new Movies([film1, film2, film3]);

const artistTom = new Artist("mission impossible", 8, "Tom Cruise", 1966);

const director1 = new Director(
  "mission impossible",
  8,
  "Tom Cruise",
  1966,
  movieList
);

console.log(director1);

//html creation part

const filmPara = document.createElement("p");
filmPara.innerHTML = film1.filmName;

const filmCard = document.querySelector(".root");
filmCard.appendChild(filmPara);
