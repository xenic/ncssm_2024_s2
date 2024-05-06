window.addEventListener("load", main);

function main(){
    button = document.getElementById("headLeft");
    button.addEventListener("click", headMove);
    
    button = document.getElementById("headRight");
    button.addEventListener("click", headMove);

    button = document.getElementById("headCenter");
    button.addEventListener("click", headMove);
    
    button = document.getElementById("parLeft");
    button.addEventListener("click", headMove);
    
    button = document.getElementById("parRight");
    button.addEventListener("click", headMove);

    button = document.getElementById("parCenter");
    button.addEventListener("click", headMove);
    
    button = document.getElementById("emphPlain");
    button.addEventListener("click", emphasize);

    button = document.getElementById("emphBold");
    button.addEventListener("click", emphasize);

    button = document.getElementById("bgColor");
    button.addEventListener("change", color);

    button = document.getElementById("textColor");
    button.addEventListener("change", color);
}

function color() {
    if(this.id === "bgColor"){
       document.body.style.backgroundColor = this.value;
    } {
       document.body.style.color = this.value; 
    }
}

function emphasize() {
    switch(this.id){
        case "emphBold":
            howMuch = "bold";
            break;
        case "emphPlain":
            howMuch = "";
            break;
    }
    let emphs = document.getElementsByClassName("emph");
    for(elem of emphs) {
        elem.style.fontWeight = howMuch;
    }
}

function headMove() {
    let flag = "";
    let whereTo = "";
    switch(this.id){
        case "headLeft":
            whereTo = "left";
            flag = "head";
            break;
        case "headRight":
            whereTo = "right";
            flag = "head";
            break;
        case "headCenter":
            whereTo = "center";
            flag = "head";
            break;
        case "parLeft":
            whereTo = "left";
            break;
        case "parRight":
            whereTo = "right";
            break;
        case "parCenter":
            whereTo = "center";
            break;
    }
    if (flag === "head") {
        let h1s = document.getElementsByTagName("h1");
        for(elem of h1s) {
            elem.style.textAlign = whereTo;
        }
        let h2s = document.getElementsByTagName("h2");
        for(elem of h2s) {
            elem.style.textAlign = whereTo;
        }
    } else {
        let ps = document.getElementsByTagName("p");
        for(elem of ps) {
            elem.style.textAlign = whereTo;
        }
    }
}