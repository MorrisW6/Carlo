const module = document.getElementById("the_module");
const intro = document.getElementById("intro-image");
const primary1 = document.getElementById("primary1");
const primary2 = document.getElementById("primary2");
const primary3 = document.getElementById("primary3");
const secondary1 = document.getElementById("secondary1");
const secondary2 = document.getElementById("secondary2");
const secondary3 = document.getElementById("secondary3");

module.addEventListener("change",function() {
let selectedModule = module.value;

intro.src = `../assets/images/${selectedModule}/investigator_cards/intro1.png`
primary1.src = `../assets/images/${selectedModule}/investigator_cards/primary1.png`;
primary2.src = `../assets/images/${selectedModule}/investigator_cards/primary2.png`;
primary3.src = `../assets/images/${selectedModule}/investigator_cards/primary3.png`;
secondary1.src = `../assets/images/${selectedModule}/investigator_cards/secondary1.png`;
secondary2.src = `../assets/images/${selectedModule}/investigator_cards/secondary2.png`;
secondary3.src = `../assets/images/${selectedModule}/investigator_cards/secondary3.png`;

console.log("Selected:", selectedModule);
})