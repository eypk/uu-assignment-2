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

const actorTom = new Actor(
  "Mission Impossible 1",
  "Tom Cruise",
  1962,
  [
    "The Last Samurai (2003)",
    "Mission Impossible 1-7 (1996 - 2023)",
    "Jack Reacher 1-2 (2012, 2016)",
    "Top Gun 1-2 (1986, 2022)",
    "...etc, 50+",
  ],
  "https://nypost.com/wp-content/uploads/sites/2/2022/10/newspress-collage-24181120-1665303870946.jpg?quality=75&strip=all&1665289530&w=744"
);

const actorJon = new Actor(
  "Mission Impossible 1",
  "Jon Voight",
  1938,
  [
    "Midnight Cowboy (1969)",
    "Enemy of the State (1998)",
    "Deliverance (1972)",
    "Runaway Train (1985)",
    "Transformers (2007)",
  ],
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jon_Voight_2012.jpg/440px-Jon_Voight_2012.jpg"
);

const actorReno = new Actor(
  "Mission Impossible 1",
  "Jean Reno",
  1948,
  [
    "Leon (1994)",
    "Ronin (1998)",
    "Pink Panter (2006)",
    "The Big Blue (2006)",
    "...etc, 110+",
  ],
  "https://upload.wikimedia.org/wikipedia/commons/e/e3/Jean_Reno_Cannes_2016.jpg"
);
const actorEmmanuelle = new Actor(
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
);

const directorDePalma = new Director(
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
);

const writerBruce = new Writer(
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
);
const writerDavid = new Writer(
  "Mission Impossible",
  "David Koepp",
  1963,
  ["Jurasic Park", "Stir of Echoes", "Ghost Town"],
  "https://images.gr-assets.com/authors/1567797284p5/5620.jpg"
);
const writerSteven = new Writer(
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
);

const movieMI = new Movie(
  "Mission Impossible",
  "Action",
  1996,
  "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRKJNiOaWFCkcb2qQ_zMitV7QpsYiWgDNjZVWmQEsLxAMkrLr_2MsZXY3-wUIPLPC_hV8Q3Y-Fp_vmK9XA",
  "https://m.imdb.com/video/vi3226468377/?playlistId=tt0117060&ref_=tt_pr_ov_vi",
  "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
  [directorDePalma],
  [writerBruce, writerDavid, writerSteven],
  [actorTom, actorReno, actorJon, actorEmmanuelle]
);
console.log(movieMI);

//PAGE SECTIONS

// body
const body = document.querySelector("body");
body.style.boxSizing = "border-box";
body.style.margin = "0px";
body.style.padding = "0px";

// body > header
const header = document.createElement("header");
header.style.height = "10vh";
header.style.padding = "1rem";
body.appendChild(header);

// body > Main
const articleSection = document.createElement("article");
articleSection.classList = "article";
articleSection.style.padding = "1rem";
articleSection.style.height = "40vh";
body.appendChild(articleSection);

// body > Main > Section
const movieSection = document.createElement("section");
movieSection.style.height = "40vh";
movieSection.style.padding = "2rem";
body.appendChild(movieSection);

// body > Footer
const footer = document.createElement("footer");
footer.style.height = "10vh";
footer.style.padding = "1rem";
body.appendChild(footer);

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
  sectionOption3.value = "article";
  sectionOption3.text = "article";

  const sectionOption4 = document.createElement("option");
  sectionOption4.value = "section";
  sectionOption4.text = "section";

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
  option1.value = "fontSize";
  option1.text = "Enlarge FontSize";

  const option2 = document.createElement("option");
  option2.value = "imageSize";
  option2.text = "Enlarge ImageSize";

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

// select sction
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
    case "fontSize":
      appliedSection.style.fontSize = "1.5rem";
      break;

    case "imageSize":
      appliedSection.style.fontSize = "1.5rem";
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

//Insert Movie Info

const movieHeader = document.createElement("h2");
movieHeader.innerText = movieMI.filmTitle;
articleSection.appendChild(movieHeader);

const movieYear = document.createElement("span");
movieYear.classList = "year";
movieYear.innerText = movieMI.filmYear;
articleSection.appendChild(movieYear);

const movieGenre = document.createElement("span");
movieGenre.innerText = movieMI.filmGenre;
movieGenre.classList = "genre";
articleSection.appendChild(movieGenre);

const moviePlot = document.createElement("p");
moviePlot.innerText = movieMI.filmPlot;
articleSection.appendChild(moviePlot);

//movie Director

const movieDirector = document.createElement("div");

let directorText = document.createElement("span");
directorText.innerText = "Director:";
movieDirector.appendChild(directorText);

movieMI.filmDirector.map((artist, index) => {
  let star = document.createElement("span");
  star.id = index;
  star.classList = `tooltip-container movieDirector ${artist.artistName}`;
  star.style.margin = "0px 5px";
  star.innerText = artist.artistName;
  movieDirector.appendChild(star);
});

articleSection.appendChild(movieDirector);

//MovieWriter

const movieWriter = document.createElement("div");

let writerText = document.createElement("span");
writerText.innerText = "Writer:";
movieWriter.appendChild(writerText);

movieMI.filmWriters.map((artist, index) => {
  let star = document.createElement("span");
  star.id = index;
  star.classList = `tooltip-container movieWriter ${artist.artistName}`;
  star.style.margin = "0px 5px";
  star.innerText = artist.artistName;
  movieWriter.appendChild(star);
});

articleSection.appendChild(movieWriter);

//movie Stars
const movieActors = document.createElement("div");

let movieStars = document.createElement("span");
movieStars.innerText = "Stars:";
movieActors.appendChild(movieStars);

movieMI.filmStars.map((artist, index) => {
  let star = document.createElement("span");
  star.id = index;
  star.classList = `tooltip-container movieStar ${artist.artistName}`;
  star.style.margin = "0px 5px";
  star.innerText = artist.artistName;
  movieActors.appendChild(star);
});

articleSection.appendChild(movieActors);

//tooltip events

articleSection.addEventListener("mouseover", (e) => insertTooltip(e));
articleSection.addEventListener("mouseout", (e) => deleteTooltip(e));

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
      tooltip.style.position = "absolute";
      tooltip.style.right = "5%";

      let img = document.createElement("img");
      imgUrl = artist[0].image;
      img.setAttribute("src", imgUrl);
      img.setAttribute("alt", "artist image");
      img.width = 280;
      tooltip.appendChild(img);

      let p1 = document.createElement("p");
      p1.innerText = artist[0].artistName;
      p1.style.fontWeight = "bold";
      tooltip.appendChild(p1);

      let p2 = document.createElement("p");
      p2.innerText = artist[0].movieList ? "Other Movies" : "Other Books";
      tooltip.appendChild(p2);

      let ul = document.createElement("ul");
      ul.style.padding = "0px 15px";
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

// menu events

header.addEventListener("change", (e) => SelectSection(e));
header.addEventListener("change", (e) => ChangeStyle(e));

// ONLOAD
window.onload = () => {
  console.log("page is fully loaded");
  header.appendChild(createSectionMenu());
  header.appendChild(createStyleMenu());
};
