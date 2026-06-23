const penaltyButton = document.getElementById("penalty");
const resultImage = document.getElementById("resultImage");
// const appearImage = document.getElementById("image-box")

penaltyButton.addEventListener("click", () => {

    // Random number from 1 to 6
    const randomNumber = Math.floor(Math.random() * 18) + 1;

    // Set image path
    resultImage.src = `../assets/images/penalties/${randomNumber}.png`;

    // Optional: display alt text
    resultImage.alt = `Image ${randomNumber}`;
    resultImage.style = "display: block;"
    // appearImage.style = "display: block;"
    console.log("Generated:", randomNumber);
});