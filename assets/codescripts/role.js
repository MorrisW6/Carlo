const roles = [
    "human",
    "human",
    "human",
    "human",
    "human",
    "human",
    "patient1",
    "patient2",
    "patient3",
    "violent1",
    "violent2",
    "violent3"
];

const roleButton = document.getElementById("role-button");
const resultRole = document.getElementById("resultRole");
const module = document.getElementById("the_module");
let selectedModule = module.value;

module.addEventListener("change", function () {
    selectedModule = module.value;
    resultRole.style.display = "none";
    console.log(selectedModule);
})


roleButton.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * roles.length);

    const selectedRole = roles[randomIndex];
    console.log(selectedModule);
    resultRole.src = `../assets/images/${selectedModule}/suspect_cards/${selectedRole}.png`;

    resultRole.style.display = "block";

    console.log(selectedRole);
});
