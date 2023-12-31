const exotics = [
  {
    name: "Edge of Action",
    class: "Titan",
    rarity: "Exotic",
    slot: "Energy",
    type: "Glaive",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/add494c1e1fbdb062b7f6dc4c179c35b.jpg",
  },
  {
    name: "Conditional Finality",
    class: null,
    rarity: "Exotic",
    slot: "Kinetic",
    type: "Shotgun",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/c9b4d65adcdfcadde871e5961ce912fb.jpg",
  },
  {
    name: "Rat King",
    class: null,
    rarity: "Exotic",
    slot: "Kinetic",
    type: "Sidearm",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/b86c24934b3ec9954218ecfa0992aeb2.jpg",
  },
  {
    name: "Heartshadow",
    class: null,
    rarity: "Exotic",
    slot: "Power",
    type: "sword",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/94c6933727fa885fb2002a8c7aee5e42.jpg",
  },
  {
    name: "Edge of Intent",
    class: "Warlock",
    rarity: "Exotic",
    slot: "Energy",
    type: "Glaive",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/beec2a35b2cffd3fac488e0fb8cf25a5.jpg",
  },
  {
    name: "Edge of Concurrence",
    class: "Hunter",
    rarity: "Exotic",
    slot: "Energy",
    type: "Glaive",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/6301bf4e6d9d9728aaf5f9bea06c6a1a.jpg",
  },
  {
    name: "Necrochasm",
    class: null,
    rarity: "Exotic",
    slot: "Kinetic",
    type: "Auto Rifle",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/52e8bb636771f4731da3f73f06fcad04.jpg",
  },
  {
    name: "Arbalest",
    class: null,
    rarity: "Exotic",
    slot: "Kinetic",
    type: "Linear Fusion Rifle",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/c95ea75fe09d9f090a88d5322923d07a.jpg",
  },
  {
    name: "Merciless",
    class: null,
    rarity: "Exotic",
    slot: "Energy",
    type: "Fusion Rifle",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/f3714197408d2c8935a2ce7be69a210c.jpg",
  },
  {
    name: "Anarchy",
    class: null,
    rarity: "Exotic",
    slot: "Power",
    type: "Grenade Launcher",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/f24e3336a1142847d6bf47b56b492eea.jpg",
  },
  {
    name: "Outbreak Perfected",
    class: null,
    rarity: "Exotic",
    slot: "Kinetic",
    type: "Pulse Rifle",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/a1b6a5f3e52878610397249986300b23.jpg",
  },
  {
    name: "Ager's Scepter",
    class: null,
    rarity: "Exotic",
    slot: "Kinetic",
    type: "Trace Rifle",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/252db75c7ea885016f17895e2a154503.jpg",
  },
  {
    name: "Osteo Striga",
    class: null,
    rarity: "Exotic",
    slot: "Kinetic",
    type: "Submachine Gun",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/2752ee2761149f004df20e78749c1bab.jpg",
  },
  {
    name: "Grand Overture",
    class: null,
    rarity: "Exotic",
    slot: "Power",
    type: "Machine Gun",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/bc76e54c9cd266c09d8e08036ebcfd42.jpg",
  },
  {
    name: "Ticuu's Divination",
    class: null,
    rarity: "Exotic",
    slot: "Energy",
    type: "Combat Bow",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/39ef1673136f2f463879a83a44f11b0d.jpg",
  },
  {
    name: "Dead Man's Tale",
    class: null,
    rarity: "Exotic",
    slot: "Kinetic",
    type: "Scout Rifle",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/cfc2c246cfd404d749fffbfe3ae3dfec.jpg",
  },
  {
    name: "Sunshot",
    class: null,
    rarity: "Exotic",
    slot: "Energy",
    type: "Hand Cannon",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/f45a7d8e52bf0d88bbd43d4354878313.jpg",
  },
  {
    name: "Gjallarhorn",
    class: null,
    rarity: "Exotic",
    slot: "Power",
    type: "Rocket Launcher",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/b62083eed6a4708e581fc9a061bcc8e9.jpg",
  },
  {
    name: "Traveler's Chosen",
    class: null,
    rarity: "Exotic",
    slot: "Kinetic",
    type: "Sidearm",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/6f0f3ab28d86316feb7fe27c5855ab4c.jpg",
  },
  {
    name: "Touch of Malice",
    class: null,
    rarity: "Exotic",
    slot: "Kinetic",
    type: "Scout Rifle",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/106a8a40a6e55b5ec5088a26d1ed979d.jpg",
  },
];

const legendaries = [
  {
    name: "Other Half",
    class: null,
    rarity: "Legendary",
    slot: "Power",
    type: "sword",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/f730bec7be3701d9ccc902dfacc4fbd4.jpg",
  },
  {
    name: "Crown Splitter",
    class: "Titan",
    rarity: "Legendary",
    slot: "Power",
    type: "sword",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/98a3ea161c6c591d523636bf83491997.jpg",
  },
  {
    name: "Quickfang",
    class: "Hunter",
    rarity: "Legendary",
    slot: "Power",
    type: "Sword",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/05e475c998f7afc191b1aba4114de370.jpg",
  },
  {
    name: "Eternity's Edge",
    class: "Warlock",
    rarity: "Legendary",
    slot: "Power",
    type: "Sword",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/db84dfbb8cc5045c401583367df23276.jpg",
  },
  {
    name: "CALUS Mini-Tool",
    class: null,
    rarity: "Legendary",
    slot: "Energy",
    type: "Submachine Gun",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/40909558f2b45d65917eb0c9e245f403.jpg",
  },
  {
    name: "Forbearance",
    class: null,
    rarity: "Legendary",
    slot: "Energy",
    type: "Grenade Launcher",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/2222167aadddbfe4954b9710784c1f6e.jpg",
  },
  {
    name: "Succession",
    class: null,
    rarity: "Legendary",
    slot: "Kinetic",
    type: "Sniper Rifle",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/86b418d0b9f753883931354137ede858.jpg",
  },
  {
    name: "New Pacific Epitaph",
    class: null,
    rarity: "Legendary",
    slot: "Kinetic",
    type: "Grenade Launcher",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/8badd2112f3bb7431f7d218e3ef10b33.jpg",
  },
  {
    name: "Throne-Cleaver",
    class: "Titan",
    rarity: "Legendary",
    slot: "Power",
    type: "Sword",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/2c551c6b35d38608c0b6287e1ebe1ec0.jpg",
  },
  {
    name: "Goldtusk",
    class: "Hunter",
    rarity: "Legendary",
    slot: "Power",
    type: "Sword",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/8735d9b7b4ca360356b704a752b3efb5.jpg",
  },
  {
    name: "Death's Razor",
    class: "Warlock",
    rarity: "Legendary",
    slot: "Power",
    type: "Sword",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/8b97dae4f5ae0e71b6271adfd478b8d7.jpg",
  },
  {
    name: "Chroma Rush",
    class: null,
    rarity: "Legendary",
    slot: "Kinetic",
    type: "Auto Rifle",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/7393c216e3b437571e64f78a613dc181.jpg",
  },
  {
    name: "Eidolon Ally",
    class: null,
    rarity: "Legendary",
    slot: "Kinetic",
    type: "Auto Rifle",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/f7acb1f2b6d63796661c35f84d2b8fcc.jpg",
  },
  {
    name: "Accrued Redemption",
    class: null,
    rarity: "Legendary",
    slot: "Kinetic",
    type: "Combat Bow",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/adbd4c3544c36a8c94e976bbb806095d.jpg",
  },
  {
    name: "Deliverance",
    class: null,
    rarity: "Legendary",
    slot: "Kinetic",
    type: "Fusion Rifle",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/b32b09e7a3e0cf827ca1bea39dc71d05.jpg",
  },
  {
    name: "Apex Predator",
    class: null,
    rarity: "Legendary",
    slot: "Power",
    type: "Rocket Launcher",
    image:
      "https://www.bungie.net/common/destiny2_content/icons/74e3e47ee5478055a662bd4083774119.jpg",
  },
];

const WEAPONS = [...exotics, ...legendaries];
export default WEAPONS;
