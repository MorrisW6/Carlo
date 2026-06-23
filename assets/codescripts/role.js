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

roleButton.addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * roles.length);

    const selectedRole = roles[randomIndex];

    resultRole.src = `../assets/images/small_talk/suspect-cards/${selectedRole}.png`;

    resultRole.style.display = "block";

    console.log(selectedRole);
});