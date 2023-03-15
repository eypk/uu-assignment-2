//GLOBALS

let selectedSection = "body";
let selectedStyle = "fontSize";

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

// ONLOAD
window.onload = () => {
  // adding functionalities to menus

  document.querySelector(".headerMiddleDiv").appendChild(createSectionMenu());
  document.querySelector(".headerMiddleDiv").appendChild(createStyleMenu());

  document.querySelector("#footer_middle").appendChild(createSectionMenu());
  document.querySelector("#footer_middle").appendChild(createStyleMenu());

  // adding menu events traversing on the web page

  document
    .querySelector("header")
    .addEventListener("change", (e) => SelectSection(e));
  document
    .querySelector("header")
    .addEventListener("change", (e) => ChangeStyle(e));

  document
    .querySelector("footer")
    .addEventListener("change", (e) => SelectSection(e));
  document;
  document
    .querySelector("footer")
    .addEventListener("change", (e) => ChangeStyle(e));

  console.log("page is fully loaded");
};
