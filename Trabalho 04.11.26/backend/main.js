const sociedade = document.getElementById("societyButton");
const towerButton = document.getElementById("towerButton");
const returnButton = document.getElementById("returnButton");
const estorvoButton = document.getElementById("estorvo");

if (sociedade){
    societyButton.addEventListener("click", () => {
        window.location.href = "../fronted/society.html";
    });
}