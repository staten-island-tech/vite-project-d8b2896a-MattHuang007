import WEAPONS from "./main";
console.log(WEAPONS.length)
const cardContainer=
document.querySelector(".card-container");
const query = {};

function createCardDetails(weapon){
 const nameElement=
 document.createElement("div");
 nameElement.className= 'name-rarity-${weapon.rarity}';
 nameElement.innerText=weapon.name;
 const categories=
 document.createElement("div");
 categories.innerText =[weapon.class,weapon.rarity, weapon.slot, weapon.type]
 .filter((text)=> text!==null)
 .join("/");

 const detailWrapper=
 document.createElement("div");
 detailWrapper.className="details";
 [nameElement, categories].forEach((el)=>detailWrapper.appendChild(el));
 return detailWrapper;
}
function createCard(weapons){
    const cardElement= document.createElement("div");
    cardElement.className="card";
    const iconElement=document.createElement
}