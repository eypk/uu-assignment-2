//GLOBALS

let selectedSection = "body";
let selectedStyle = "fontSize";

//Class Movie

class Movie {
  constructor(
    filmTitle,
    filmGenre,
    filmYear,
    filmPoster,
    filmTrailer,
    filmPlot,
    filmDirector,
    filmWriters,
    filmStars
  ) {
    this.filmTitle = filmTitle;
    this.filmGenre = filmGenre;
    this.filmYear = filmYear;
    this.filmPoster = filmPoster;
    this.filmTrailer = filmTrailer;
    this.filmPlot = filmPlot;
    this.filmDirector = filmDirector;
    this.filmWriters = filmWriters;
    this.filmStars = filmStars;
  }
}

// class Artist

class Artist {
  constructor(filmTitle, artistName, ArtistDob) {
    this.filmTitle = filmTitle;
    this.artistName = artistName;
    this.ArtistDob = ArtistDob;
  }
}

//Class Director

class Director extends Artist {
  constructor(filmName, artistName, ArtistDob, movieList, image) {
    super(filmName, artistName, ArtistDob);
    this.movieList = movieList;
    this.image = image;
  }
}

//Class Writer

class Writer extends Artist {
  constructor(filmName, artistName, ArtistDob, books, image) {
    super(filmName, artistName, ArtistDob);
    this.books = books;
    this.image = image;
  }
}

//Class Actor

class Actor extends Artist {
  constructor(filmName, artistName, ArtistDob, movieList, image) {
    super(filmName, artistName, ArtistDob);
    this.movieList = movieList;
    this.image = image;
  }
}

// Entity to be created using constructor

//moive object

const movieMI = new Movie(
  "Mission Impossible",
  "Action",
  1996,
  "https://www.themoviedb.org/t/p/w1280/l5uxY5m5OInWpcExIpKG6AR3rgL.jpg",
  "assets/m-i-v.mp4",
  "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
  [
    new Director(
      "Mission Impossible",
      "Brian De Palma",
      1940,
      [
        "Domino (2019)",
        "Passion (2012)",
        "Redacted(2007)",
        "The Black Dahlia (2006) ",
      ],
      "https://resizing.flixster.com/FbkvPvuxxhrPo2OQuvkQu-xdTVQ=/218x280/v2/https://flxt.tmsimg.com/assets/72901_v9_bb.jpg"
    ),
  ],
  [
    new Writer(
      "Mission Impossible",
      "Bruce Bernard Geller",
      1930,
      [
        "Zane Grey Theater",
        "Have Gun",
        "Will Travel",
        "The Rebel",
        "Mission Impossible",
      ],
      "https://images.mubicdn.net/images/cast_member/58314/cache-284230-1511853223/image-w856.jpg?size=240x"
    ),
    new Writer(
      "Mission Impossible",
      "David Koepp",
      1963,
      ["Jurasic Park", "Stir of Echoes", "Ghost Town"],
      "https://images.gr-assets.com/authors/1567797284p5/5620.jpg"
    ),
    new Writer(
      "Mission Impossible",
      "Steven Zaillian",
      1953,
      [
        "A Civil Action",
        "The Girl with the Dragon Tattoo",
        "MoneyBall",
        "Searching for Bobby Fischer",
      ],
      "https://www.themoviedb.org/t/p/w500/3V8X2EnjzqdrUagdnjTgKi213AJ.jpg"
    ),
  ],
  [
    new Actor(
      "Mission Impossible 1",
      "Tom Cruise",
      1962,
      [
        "The Last Samurai (2003)",
        "Mission Impossible 1-7 (1996 - 2023)",
        "Jack Reacher 1-2 (2012, 2016)",
        "Top Gun 1-2 (1986, 2022)",
      ],
      "https://www.themoviedb.org/t/p/w500/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg"
    ),
    new Actor(
      "Mission Impossible 1",
      "Jean Reno",
      1948,
      [
        "Leon (1994)",
        "Ronin (1998)",
        "Pink Panter (2006)",
        "The Big Blue (2006)",
      ],
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Jean_Reno_Cannes_2016.jpg"
    ),
    new Actor(
      "Mission Impossible 1",
      "Jon Voight",
      1938,
      [
        "Midnight Cowboy (1969)",
        "Enemy of the State (1998)",
        "Deliverance (1972)",
        "Runaway Train (1985)",
      ],
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jon_Voight_2012.jpg/440px-Jon_Voight_2012.jpg"
    ),
    new Actor(
      "Mission Impossible 1",
      "Emmanuelle Béart",
      1963,
      [
        "8 Women (2022)",
        "Torment (1994)",
        "Nelly & Monsieur Arnaud (1995)",
        "The Passengers of the Night (2022)",
      ],
      "https://m.media-amazon.com/images/M/MV5BMjExNDQ4ODU2Ml5BMl5BanBnXkFtZTYwMjI0ODgz._V1_.jpg"
    ),
  ]
);
console.log(movieMI);

//FUNCTIONS

// Create Section Select Menu
const createSectionMenu = () => {
  const selectSectionBox = document.createElement("select");
  selectSectionBox.classList = "menu selectSectionBox";

  const sectionOption1 = document.createElement("option");
  sectionOption1.value = "body";
  sectionOption1.text = "body";

  const sectionOption2 = document.createElement("option");
  sectionOption2.value = "header";
  sectionOption2.text = "header";

  const sectionOption3 = document.createElement("option");
  sectionOption3.value = "section";
  sectionOption3.text = "section";

  const sectionOption4 = document.createElement("option");
  sectionOption4.value = "article";
  sectionOption4.text = "article";

  const sectionOption5 = document.createElement("option");
  sectionOption5.value = "footer";
  sectionOption5.text = "footer";

  selectSectionBox.add(sectionOption1);
  selectSectionBox.add(sectionOption2);
  selectSectionBox.add(sectionOption3);
  selectSectionBox.add(sectionOption4);
  selectSectionBox.add(sectionOption5);

  return selectSectionBox;
};

// Create Style Slect Menu
const createStyleMenu = () => {
  const selectStyleBox = document.createElement("select");
  selectStyleBox.classList = "menu selectStyleBox";

  const option1 = document.createElement("option");
  option1.value = "Delarge";
  option1.text = "Delarge FontSize";

  const option2 = document.createElement("option");
  option2.value = "Enlarge";
  option2.text = "Enlarge FontSize";

  const option3 = document.createElement("option");
  option3.value = "DarkMode";
  option3.text = "Dark Mode";

  const option4 = document.createElement("option");
  option4.value = "LightMode";
  option4.text = "Light Mode";

  selectStyleBox.add(option1);
  selectStyleBox.add(option2);
  selectStyleBox.add(option3);
  selectStyleBox.add(option4);

  return selectStyleBox;
};

// select section
const SelectSection = (e) => {
  let section = e.target.value;

  switch (section) {
    case "body":
      selectedSection = section;
      break;

    case "header":
      selectedSection = section;
      break;

    case "article":
      selectedSection = section;
      break;

    case "section":
      selectedSection = section;
      break;

    case "footer":
      selectedSection = section;
      break;
  }
};

// change style
const ChangeStyle = (e) => {
  selectedStyle = e.target.value;
  let appliedSection = document.querySelector(selectedSection);

  switch (selectedStyle) {
    case "Enlarge":
      appliedSection.style.fontSize = "1.5rem";
      break;

    case "Delarge":
      appliedSection.style.fontSize = "1rem";
      break;

    case "DarkMode":
      appliedSection.style.backgroundColor = "black";
      appliedSection.style.color = "white";
      break;

    case "LightMode":
      appliedSection.style.backgroundColor = "white";
      appliedSection.style.color = "black";
      break;
  }
};

//create tooltip

const insertTooltip = (e) => {
  if (e.target.classList.value.includes("tooltip-container")) {
    let artist;

    if (e.target.classList.value.includes("movieStar")) {
      artist = movieMI.filmStars.filter((item) =>
        e.target.classList.value.includes(item.artistName)
      );
    }
    if (e.target.classList.value.includes("movieDirector")) {
      artist = movieMI.filmDirector.filter((item) =>
        e.target.classList.value.includes(item.artistName)
      );
    }
    if (e.target.classList.value.includes("movieWriter")) {
      artist = movieMI.filmWriters.filter((item) =>
        e.target.classList.value.includes(item.artistName)
      );
    }

    try {
      //div.tooltip
      let tooltip = document.createElement("div");
      tooltip.classList = "tooltipBox";

      let img = document.createElement("img");
      imgUrl = artist[0].image;
      img.setAttribute("src", imgUrl);
      img.setAttribute("alt", "artist image");
      tooltip.appendChild(img);

      let p1 = document.createElement("p");
      p1.classList = "artist-name-tooltip";
      p1.innerText = artist[0].artistName;
      tooltip.appendChild(p1);

      let p2 = document.createElement("p");
      p2.innerText = artist[0].movieList ? "Other Movies" : "Other Books";
      tooltip.appendChild(p2);

      let ul = document.createElement("ul");
      let list = artist[0].movieList ? artist[0].movieList : artist[0].books;

      for (let i = 0; i < list.length; i++) {
        let li = document.createElement("li");
        li.innerText = list[i];
        ul.appendChild(li);
      }
      tooltip.appendChild(ul);
      e.target.appendChild(tooltip);
    } catch (error) {}
  }
};

const deleteTooltip = (e) => {
  try {
    const tooltipContainer = e.target;
    let tooltip = tooltipContainer.querySelector(".tooltipBox");
    tooltipContainer.removeChild(tooltip);
  } catch (error) {}
};

// ONLOAD
window.onload = () => {
  //PAGE SECTIONS

  // body
  const body = document.querySelector("body");

  // body > header
  const header = document.createElement("header");
  header.appendChild(createSectionMenu());
  header.appendChild(createStyleMenu());
  body.appendChild(header);

  // body > Section
  const movieSection = document.createElement("section");
  body.appendChild(movieSection);

  // movie poster
  const poster = document.createElement("img");
  poster.classList = "poster";
  poster.setAttribute("src", movieMI.filmPoster);
  poster.setAttribute("alt", "movie poster");
  movieSection.appendChild(poster);

  //movie  thriller

  const video = document.createElement("video");
  video.classList = "thriller";
  video.setAttribute("src", movieMI.filmTrailer);
  video.setAttribute("autoplay", true);
  video.setAttribute("muted", true);
  video.setAttribute("controls", true);
  video.setAttribute("alt", "movie thriller");

  movieSection.appendChild(video);

  // body > Article
  const articleSection = document.createElement("article");
  body.appendChild(articleSection);

  //Insert Movie Info to Article

  /// title, year, genre

  const movieHeader = document.createElement("h2");
  movieHeader.innerText = movieMI.filmTitle;
  articleSection.appendChild(movieHeader);

  const movieYear = document.createElement("span");
  movieYear.classList = "year";
  movieYear.innerText = movieMI.filmYear;
  articleSection.appendChild(movieYear);

  const movieGenre = document.createElement("span");
  movieGenre.classList = "genre";
  movieGenre.innerText = movieMI.filmGenre;
  articleSection.appendChild(movieGenre);

  const moviePlot = document.createElement("p");
  moviePlot.innerText = movieMI.filmPlot;
  articleSection.appendChild(moviePlot);

  /// director

  const movieDirector = document.createElement("div");

  let directorText = document.createElement("span");
  directorText.innerText = "Director:";
  movieDirector.appendChild(directorText);

  movieMI.filmDirector.map((artist) => {
    let star = document.createElement("span");
    star.classList = `tooltip-container movieDirector ${artist.artistName}`;
    star.innerText = artist.artistName;
    movieDirector.appendChild(star);
  });

  articleSection.appendChild(movieDirector);

  /// writer

  const movieWriter = document.createElement("div");

  let writerText = document.createElement("span");
  writerText.innerText = "Writer:";
  movieWriter.appendChild(writerText);

  movieMI.filmWriters.map((artist) => {
    let star = document.createElement("span");
    star.classList = `tooltip-container movieWriter ${artist.artistName}`;
    star.innerText = artist.artistName;
    movieWriter.appendChild(star);
  });

  articleSection.appendChild(movieWriter);

  /// stars
  const movieActors = document.createElement("div");

  let movieStars = document.createElement("span");
  movieStars.innerText = "Stars:";
  movieActors.appendChild(movieStars);

  movieMI.filmStars.map((artist) => {
    let star = document.createElement("span");
    star.classList = `tooltip-container movieStar ${artist.artistName}`;
    star.innerText = artist.artistName;
    movieActors.appendChild(star);
  });

  articleSection.appendChild(movieActors);

  // body > Footer
  const footer = document.createElement("footer");
  footer.appendChild(createSectionMenu());
  footer.appendChild(createStyleMenu());
  body.appendChild(footer);

  //EVENTS

  //tooltip events

  articleSection.addEventListener("mouseover", (e) => insertTooltip(e));
  articleSection.addEventListener("mouseout", (e) => deleteTooltip(e));

  // menu events

  header.addEventListener("change", (e) => SelectSection(e));
  header.addEventListener("change", (e) => ChangeStyle(e));
  footer.addEventListener("change", (e) => SelectSection(e));
  footer.addEventListener("change", (e) => ChangeStyle(e));

  console.log("page is fully loaded");
};
