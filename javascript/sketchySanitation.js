function raiseScore() {
    let score = document.getElementById("score");
    let value = Number(score.textContent);
    score.textContent = value + 1;
}

function lowerScore() {
    let score = document.getElementById("score");
    let value = Number(score.textContent);
    score.textContent = value - 1;
}