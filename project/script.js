Looped
l0oped
Online

Joe Swanson II — 11/16/2023 6:02 PM
Image
@JukeDuke didnt u do this one time
JukeDuke — 11/16/2023 6:31 PM
@koko eating bananas
^^
koko eating bananas — 11/16/2023 6:53 PM
why pinging me boi
ive never seen this in my life
JukeDuke — 11/16/2023 6:56 PM
:mike~1:
Joe Swanson I — 11/16/2023 7:29 PM
Do you make a new matrix for updated stats then replace the old one
Joe Swanson I — 11/17/2023 1:49 AM
bool isAlive(vector<vector<char>> world, int row, int col)
{
    if (world[row][col] == '*')
        return true;

    return false;
}
https://github.com/Juke-Duke/GameOfLife/blob/master/GameOfLife.cpp#L87
GitHub
GameOfLife/GameOfLife.cpp at master · Juke-Duke/GameOfLife
C++ program that will read an appropriate user file input and let the user input the amount of generations they want to see their world of cells change to. Watch life play out with your own very ey...
GameOfLife/GameOfLife.cpp at master · Juke-Duke/GameOfLife
Joe Swanson I — 11/17/2023 2:04 AM
https://github.com/DLi7077/game-of-life
GitHub
GitHub - DLi7077/game-of-life
Contribute to DLi7077/game-of-life development by creating an account on GitHub.
GitHub - DLi7077/game-of-life
@JukeDuke
Image
this is a still state
Joe Swanson II — 11/17/2023 3:10 PM
i think i just update the matrix with next state right
Image
do diagonal neighbors count as neighbors?
Joe Swanson I — 11/17/2023 3:10 PM
yeah
diagonals count
Joe Swanson II — 11/17/2023 3:10 PM
ok
Joe Swanson I — 11/17/2023 3:13 PM
https://github.com/DLi7077/game-of-life/blob/master/index.ts
GitHub
game-of-life/index.ts at master · DLi7077/game-of-life
Contribute to DLi7077/game-of-life development by creating an account on GitHub.
game-of-life/index.ts at master · DLi7077/game-of-life
import { printGrid, sleep } from "./utils";

const CELL = "*";
const VOID = " ";

function inBounds(grid: string[][], row: number, col: number) {
  return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function cellNeighborCount(grid: string[][]) {
  const rows = grid.length;
  const columns = grid[0].length;
  const neighborCount = new Array(grid.length)
    .fill(null)
    .map(() => new Array(grid[0].length).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      directions.forEach(([x, y]) => {
        const nextRow = row + x;
        const nextCol = col + y;
        if (!inBounds(grid, nextRow, nextCol)) return;
        neighborCount[row][col] += grid[nextRow][nextCol] === CELL;
      });
    }
  }

  return neighborCount;
}

async function gameOfLife(rows: number, columns: number) {
  let iterations = 200;
  const grid: string[][] = new Array(rows)
    .fill(null)
    .map(() => new Array(columns).fill(VOID));

  let randomPoints = Math.floor((rows * columns) / 15);

  while (randomPoints--) {
    const randomRow = Math.floor(Math.random() * rows);
    const randomCol = Math.floor(Math.random() * columns);
    grid[randomRow][randomCol] = CELL;
  }

  while (iterations--) {
    await sleep(50);
    console.clear();
    console.log("iterations left:", iterations);

    const neighborCount = cellNeighborCount(grid);
    printGrid(grid);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        if (neighborCount[row][col] < 2) grid[row][col] = VOID;
        else if (neighborCount[row][col] === 2) continue;
        else if (neighborCount[row][col] === 3) grid[row][col] = CELL;
        else if (neighborCount[row][col] === 4) grid[row][col] = VOID;
      }
    }
  }
}

gameOfLife(85, 210);
was pretty simple
Joe Swanson II — 11/17/2023 3:16 PM
Image
Joe Swanson II — 11/17/2023 3:16 PM
idk if this is the next state to this
i can prob run the code later
Joe Swanson I — 11/17/2023 3:17 PM
wym
Joe Swanson II — 11/17/2023 3:18 PM
like if the pic i sent is initial state, would this be the next iteration
Joe Swanson I — 11/17/2023 3:25 PM
oh
lemme c
[
[3,3,3,2,1]
[2,4,3,3,0]
[3,4,2,3,2]
[0,3,3,4,1]
[1,2,1,2,1]
]
 
[
yeah i think youre good
Joe Swanson II — 11/17/2023 3:55 PM
🙏🙏
Keet — 11/17/2023 6:13 PM
@koko eating bananas can i see your resume
koko eating bananas — 11/17/2023 6:40 PM
nah man
koko eating bananas — 11/18/2023 1:32 PM
https://docs.google.com/document/d/1FDNg0uBh4BmQpBai47EOx-Z8bP59NMlTFD6ubQOxcYw/edit?usp=sharing
Google Docs
Project Overview
We are not naming this Edge Brief Project Overview unless this is our main doc then just go wild and edit Project Overview The platform being built is an online learning platform similar to LeetCode and Anubis. The aim is to provide a platform for instructors to easily assign and grade wor...
Image
guys contribute
Joe Swanson I — 11/18/2023 2:30 PM
You wrote it like youssef is holding us hostage
Finn the Fiend — 11/19/2023 7:05 PM
help me with my project or I will
Attachment file type: acrobat
Bon_Appe-Vite_Rubric.pdf
55.42 KB
Attachment file type: acrobat
Bon_Appe-Vite_Project.pdf
61.08 KB
JukeDuke — Yesterday at 6:18 PM
@Joe Swanson I
help matt please
Joe Swanson I — Yesterday at 6:18 PM
Im working
JukeDuke — Yesterday at 6:18 PM
oh right
fuck
JukeDuke — Yesterday at 6:37 PM
Attachment file type: archive
fega-maggot.zip
9.78 MB
JukeDuke — Yesterday at 6:37 PM
pdfs
Joe Swanson I — Yesterday at 9:10 PM
@Finn the Fiend
@Finn the Fiend
get bcak
import WEAPONS from "./weapons";

console.log(WEAPONS.length)
const cardContainer = document.querySelector(".card-container");
const query = {};

Expand
script.js
3 KB
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
Expand
index.html
3 KB
html {
  height: 100%;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-family: "Roboto", sans-serif;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
}

.card-container {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  width: 320px;
  height: 80px;
  background-color: white;
  border: 1px solid gray;
  display: flex;
  justify-content: flex-start;
  padding: 4px;
  box-sizing: border-box;

  .icon {
    object-fit: cover;
    border: 1px solid gray;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin-left: 4px;
  }
  .name {
    font-size: larger;
  }
  .rarity-Exotic {
    color: #e6c028;
  }
  .rarity-Legendary {
    color: #9656b9;
  }
}
.card-img {
  width: 81px;
  height: 81px;
  object-fit: cover;
}
Collapse
style.css
1 KB
const EXOTICS = [
  {
    name: "Edge of Action",
    class: "Titan",
    rarity: "Exotic",
    slot: "Energy",
Expand
weapons.js
25 KB
﻿
import WEAPONS from "./weapons";

console.log(WEAPONS.length)
const cardContainer = document.querySelector(".card-container");
const query = {};

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
  detailWrapper.className = "details";

  [nameElement, categories].forEach((el) => detailWrapper.appendChild(el));

  return detailWrapper;
}

// Creates a single weapon card
function createCard(weapon) {
  const cardElement = document.createElement("div");
  cardElement.className = "card";

  const iconElement = document.createElement("img");
  iconElement.src = weapon.image;
  iconElement.className = "icon";

  const detailWrapper = createCardDetails(weapon);
  [iconElement, detailWrapper].forEach((el) => cardElement.appendChild(el));

  return cardElement;
}

// Creates a card for each weapon and adds it to cardContainer in html 
function generateCards(weapons) {
  const cardElements = weapons.map(createCard);
  cardElements.forEach((el) => cardContainer.appendChild(el));
}
