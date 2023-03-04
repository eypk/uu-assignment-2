// OverAll

// Develop a dynamic version of the website created in Assignment 1 using JavaScript (if necessary, you can change/extend the main theme). Use DOM methods, nodes, properties and events to interactively modify the content and appearance of your web-pages according to user actions. Use event listeners to process the events. Implement at least 1 case of event propagation (W3C model).
// Create an info.html page whose main content is constructed purely through DOM manipulation (not document.write(), not .innerHTML). In other words, such elements as <nav>,< header>, <footer> and <aside> can still be a part of the file info.html, but all the actual content of the page has to be produced by JavaScript on the fly when the page is loaded.

// Assigment Part

// '''The content of this page should be populated using a hierarchy of objects where each object stores a structured representation of a corresponding entity. You need to implement several classes:
// Class Movie will hold the structural representation of the entire film.
// Class Artist will describe any person involved in the movie industry; it should specify at least the name and the year of birth.
// Class Director will extend the class Artist; it can add a list of movies that this person has directed before.
// Class Writer will extend the class Artist; it can add a list of books that this person has written before.
// Class Actor will extend the class Artist; it can add a list of movies, in which this person starred before, and a link to his/her photo.
// We assume, that nobody is interested in how writers and directors look like, and also that the same person cannot be an Actor and a Director and/or Writer.'''

//Class Movie parent Class

class Movie {
  constructor(filmName, filmRating) {
    this.filmName = filmName;
    this.filmRating = filmRating;
  }
}

//Class Artisit

class Artist extends Movie {
  constructor(filmName, filmRating, artistName, ArtistDob) {
    super(filmName, filmRating);
    this.artistName = artistName;
    this.ArtistDob = ArtistDob;
  }
}

//Class Director

class Director extends Artist {
  constructor(filmName, filmRating, artistName, ArtistDob, movieList) {
    super(filmName, filmRating, artistName, ArtistDob);
    this.movieList = movieList;
  }
}

//Class Writer

class Writer extends Artist {
  constructor(filmName, filmRating, artistName, ArtistDob, books) {
    super(filmName, filmRating, artistName, ArtistDob);
    this.books = books;
  }
}

//Class Actor

class Actor extends Artist {
  constructor(filmName, filmRating, artistName, ArtistDob, movieList, image) {
    super(filmName, filmRating, artistName, ArtistDob);
    this.movieList = movieList;
    this.image = image;
  }
}

//Class ok

// Entity to be created using constructor

const artistTom = new Artist(
  "mission impossible",
  8,
  "Tom Cruise",
  1966,
  ["mission impossible", "jack reacher"],
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmubi.com%2Fcast%2Ftom-cruise&psig=AOvVaw3kpUjzQlx10YQGdETGC68e&ust=1677938730816000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOiOxoH3v_0CFQAAAAAdAAAAABAE"
);

const directorTarantino = new Director(
  "kill bill",
  7.5,
  "quentin tarantino",
  1978,
  [
    "kill bill - 1",
    "kill bill - 2",
    "unchanged django",
    "iglorious bustards",
    "good fellas",
  ]
);

const writerNolan = new Writer("Dark Noght", 8, "Christopher Nolan", 1970, [
  "Dark-Night",
  "Tenet",
  "inception",
  "intersellar",
  "Dunkirk",
]);

console.log(directorTarantino);
console.log(artistTom);
console.log(writerNolan);

//Assignment HTML Part

// Use ES6 classes and ES6-style object construction.
// The users should be able to mouseover the names/photos of Artists and see their extended information (previous books, movies) in a tooltip.
// Implement two menus in your <header> or <footer> that allow the user to dynamically change the appearance of elements on a page. One menu should be used to select an element, another to modify the selected element appearance.
//1- The options of the first menu should contain body, header, footer, aside, articles and sections(do not go deeper in the DOM hierarchy). They should be created on the fly by traversing the DOM of the page.In other words, a page can have more than one article and more than one section, and not necessarily have an aside, but the menu should be able to read them correctly from the DOM of the page.
//2- The option of the second menu should allow to change at least the font size and the color of the selected elements.

//body style reset

document.body.style.boxSizing = "border-box";
document.body.style.margin = "0px";
document.body.style.padding = "0px";
document.body.style.backgroundColor = "#fafafa";

// ROOT

const root = document.querySelector(".root");

// Root > navbar

const navBar = document.createElement("nav");
root.appendChild(navBar);

const headerMenu = document.createElement("header");
navBar.appendChild(headerMenu);

// Select Box Menu in navBar

let selectedMenuItem = directorTarantino;

const selectBox = document.createElement("select");

const option1 = document.createElement("option");
option1.value = "Director";
option1.text = "Director";

const option2 = document.createElement("option");
option2.value = "Writer";
option2.text = "Writer";

const option3 = document.createElement("option");
option3.value = "Actor";
option3.text = "Actor";

selectBox.add(option1);
selectBox.add(option2);
selectBox.add(option3);

headerMenu.appendChild(selectBox);

// change event

const SelectItem = (e) => {
  selectedMenuItem = e.target.value;

  switch (selectedMenuItem) {
    case "Director":
      createArtistCard(directorTarantino);
      selectedMenuItem = directorTarantino;
      console.log("Director chosen");
      break;

    case "Writer":
      createArtistCard(writerNolan);
      selectedMenuItem = writerNolan;
      console.log("Writer chosen");
      break;

    case "Actor":
      createArtistCard(artistTom);
      selectedMenuItem = artistTom;
      console.log("Actor chosen");
      break;
  }

  // createArtistCard(selectedMenuItem);
};

selectBox.addEventListener("change", (e) => {
  SelectItem(e);
});

// Root > Main

const mainSection = document.createElement("main");
root.appendChild(mainSection);

const createArtistCard = (object) => {
  let card = `<div class="card tooltip-container">
  <img class="card image"src="./assets/images/m-i.jpg" alt="Avatar" style="width:200px">
  <h4><b>${object.artistName}</b></h4> 
  <p>${object.ArtistDob}</p> 
  </div>`;

  mainSection.innerHTML = card;
};

//TOOLTIP

//onMouseOver

mainSection.addEventListener("mouseover", (e) => showTooltip(e));

const showTooltip = (e) => {
  try {
    const tooltipContainer = e.target.closest(".tooltip-container");
    let tooltip = `
    <div class="tooltip">
    <p>${selectedMenuItem.artistName}</p>
    <img class="card image"src="./assets/images/m-i.jpg" alt="Avatar" style="width:20px">
    </div>`;
    tooltipContainer.insertAdjacentHTML("afterbegin", tooltip);
  } catch (error) {}
};

//onMouseOut
mainSection.addEventListener("mouseout", (e) => deleteTooltip(e));

const deleteTooltip = (e) => {
  try {
    const tooltipContainer = e.target.closest(".tooltip-container");
    let tooltip = tooltipContainer.querySelector(".tooltip");
    tooltipContainer.removeChild(tooltip);
  } catch (error) {}
};

//window load
window.onload = () => {
  console.log("page is fully loaded");
  createArtistCard(selectedMenuItem);
};
