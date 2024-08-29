const div = document.getElementById("main-div");

for (let i = 0; i < 100; i++) {
    const divCell = document.createElement("div");
    divCell.className = "div-cell";
    div.appendChild(divCell)

    const dispNum = document.createElement("span");
    dispNum.innerText = i + 1;
    divCell.appendChild(dispNum);
}

for (let i = 0; i < 24; i++){
    const cardDivCell = document.createElement("div")
    cardDivCell.className = "card-div-cell";
    const card = document.getElementById("card");
    card.appendChild(cardDivCell);

    const dispNum = document.createElement("span");
    dispNum.innerText = Math.floor(Math.random() * 100);
    cardDivCell.appendChild(dispNum);
}


const mainButton = document.getElementById("gen-num");

const usedNumber = [];
let randomNumber;

mainButton.onclick = () => {
    do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } while (usedNumber.includes(randomNumber));
    usedNumber.push(randomNumber);

    console.log(usedNumber);

    usedNumber.forEach((num) => {
        const divCells = document.querySelectorAll(".div-cell");
        const cardDivCell = document.querySelectorAll(".card-div-cell");

        divCells.forEach((divCell) => {
            const dispNum = divCell.querySelector("span").innerText;
            if (parseInt(dispNum) === num) {
                divCell.classList.add("selected-div");
            }
        });

        cardDivCell.forEach((cardDiv) => {
            const dispNum = cardDiv.querySelector("span").innerText;
            if (parseInt(dispNum) === num) {
                cardDiv.classList.add("selected-card-div");
            }
        });
    });
};





