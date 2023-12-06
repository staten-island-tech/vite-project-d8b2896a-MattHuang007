import WEAPONS from "./main.js";
import "../css/style.css";

console.log(WEAPONS.length);
const cardContainer = document.querySelector(".card-container");
const query = {};

let isDarkMode = true;

// Generates the detail portion of weapon card
function createCardDetails(weapon) {
  const nameElement = document.createElement("div");
  nameElement.className = `name rarity-${weapon.rarity}`;
  nameElement.innerText = weapon.name;

  const categories = document.createElement("div");
  categories.innerText = [weapon.class, weapon.rarity, weapon.slot, weapon.type]
    .filter((text) => text !== null)
    .join(" / ");

  const detailWrapper = document.createElement("div");
  detailWrapper.className = "details " + (isDarkMode ? "dark" : "light");

  [nameElement, categories].forEach((el) => detailWrapper.appendChild(el));

  return detailWrapper;
}

// Creates a single weapon card
function createCard(weapon) {
  const cardElement = document.createElement("div");
  cardElement.className = "card " + (isDarkMode ? "dark" : "light");

  const iconElement = document.createElement("img");
  iconElement.src = weapon.image;
  iconElement.alt = weapon.name;
  iconElement.className = "icon " + (isDarkMode ? "dark" : "light");

  const detailWrapper = createCardDetails(weapon);
  [iconElement, detailWrapper].forEach((el) => cardElement.appendChild(el));

  return cardElement;
}

// Creates a card for each weapon and adds it to cardContainer in html
function generateCards(weapons) {
  const cardElements = weapons.map(createCard);
  cardElements.forEach((el) => cardContainer.appendChild(el));
}

// initial load
updateCards(WEAPONS);

// event listeners for filters
const classFilterSelect = document.getElementById("class-filter");
const rarityFilterSelect = document.getElementById("rarity-filter");
const slotFilterSelect = document.getElementById("slot-filter");
const typeFilterSelect = document.getElementById("type-filter");

// filter by specified query
function filterWeaponsByQuery(query) {
  let filteredWeapons = [...WEAPONS]; // copy weapon array
  for (const [key, value] of Object.entries(query)) {
    if (value === "All") continue; // dont filter
    filteredWeapons = filteredWeapons.filter((weapon) => weapon[key] === value);
  }
  updateCards(filteredWeapons);
}
// update class query
classFilterSelect.addEventListener("change", (event) => {
  query["class"] = event.target.value;
  filterWeaponsByQuery(query);
});

// update rarity query
rarityFilterSelect.addEventListener("change", (event) => {
  query["rarity"] = event.target.value;
  filterWeaponsByQuery(query);
});

// update slot query
slotFilterSelect.addEventListener("change", (event) => {
  query["slot"] = event.target.value;
  filterWeaponsByQuery(query);
});

// update type query
typeFilterSelect.addEventListener("change", (event) => {
  query["type"] = event.target.value;
  filterWeaponsByQuery(query);
});

// refresh card list
function updateCards(weaponList) {
  console.log("update");
  cardContainer.innerHTML = "";
  generateCards(weaponList);
}

// update theme when clicked, re-render cards
const themeToggle = document.querySelector(".theme > input");
themeToggle.addEventListener("click", (event) => {
  console.log(event.target.checked);
  isDarkMode = event.target.checked;
  filterWeaponsByQuery(query);

  const html = document.querySelector("html");
  html.style.backgroundColor = isDarkMode ? "black" : "white";
  html.style.color = isDarkMode ? "white" : "black";
});
