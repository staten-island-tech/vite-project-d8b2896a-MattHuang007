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
function createCard(weapon){
    const cardElement= document.createElement("div");
    cardElement.className="card";
    const iconElement=document.createElement("img");
    iconElement.src=weapon.image;
    iconElement.className="icon";
    
    const detailWrapper=
    createCardDetails(weapon);
    [iconElement,detailWrapper].forEach((el)=> cardElement.appendChild(el));
    
    return cardElement;
}

function generateCards(weapons){
    const cardElements=
    weapons.map(createCard);
    cardElements.forEach((el)=> cardContainer.appendChild(el));
}

updateCards(WEAPONS);

const classFilterSelect=
document.getElementById("class-filter");
const rarityFilterSelect=
document.getElementById("rarity-filter");
const slotFilterSelect=
document.getElementById("slot-filter");
const typeFilterSelect=
document.getElementById("type-filter");

function filterWeaponsByQuery(query){
    let filteredWeapons =[...WEAPONS];
    for (const [key,value] of Object.entries(query)){
        if(value==="All") continue;
        filteredWeapons = filteredWeapons.filter((weapon)=>
        weapon[key]===value);
    }
    updateCards(filteredWeapons);
}
classFilterSelect.addEventListener("change",(event)=>{
    query["class"] = event.target.value;
    filterWeaponsByQuery(query);
});

rarityFilterSelect.addEventListener("change",(event)=>{
    query["rarity"]=event.target.value;
    filterWeaponsByQuery(query);
});
slotFilterSelect.addEventListener("change", (event) => {
    query["slot"] = event.target.value;
    filterWeaponsByQuery(query);
  });

  typeFilterSelect.addEventListener("change", (event) => {
    query["type"] = event.target.value;
    filterWeaponsByQuery(query);
  });
  
  function updateCards(weaponList) {
    cardContainer.innerHTML = "";
    generateCards(weaponList);
  }