const backgroundButton = document.getElementById("background-button");
const resultBackground = document.getElementById("resultBackground");

backgroundButton.addEventListener("click", () => {

    // Random number from 1 to 6
    const randomNumber = Math.floor(Math.random() * 30) + 1;

    // Set image path
    resultBackground.src = `../assets/images/small_talk/suspect-cards/backgrounds/${randomNumber}.PNG`;

    // Optional: display alt text
    resultBackground.alt = `Image ${randomNumber}`;
    resultBackground.style.display = "block";
    console.log("Generated:", randomNumber);
});