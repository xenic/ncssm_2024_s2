function makeGrid(rows, cols){
    // Get the table
    let table = document.getElementById("grid");
    for(let y=0; y < rows; y++){
        // Create a table row
        let tableRow = document.createElement("tr");
        // Add row to the table.
        table.appendChild(tableRow);
        for(let x=0; x < cols; x++){
            // Create a cell
            let tableData = document.createElement("td");
            tableData.onclick = toggle;
            tableData.id = x + "," + y;
            // Add cell to the row
            tableRow.appendChild(tableData);
        }
    }
}

function toggle(){
    // "this" is a magic keyword that is contextually self referential (hand-wavy)
    console.log(this);
    // toggle the class on and off.
    this.classList.toggle("live");
}

function isAliveV1(posX, posY){
    // Determine whether a cell is alive
    let cell = document.getElementById(posX + "," + posY);
    // document.getElementById(`${posX},${posY}`);
    return cell.classList.contains("live");
}

function isAlive(cell) {
    if(cell) {
        return cell.classList.contains("live");
    }
    return false;
}

function countNeighbors(posX, posY){
    // deal with edge cases...
    // if you're at the edge (top, bottom, left, right)
    // no wrapping.
    // posX === 0  left
    // posY === 0  top
    // posX === maxWidth (9)
    // posY === maxHeight (9)
    let right     = document.getElementById((posX + 1) + "," +  posY); 
    let left      = document.getElementById((posX - 1) + "," +  posY); 
    let up        = document.getElementById( posX      + "," + (posY - 1)); 
    let down      = document.getElementById( posX      + "," + (posY + 1)); 
    let upright   = document.getElementById((posX + 1) + "," + (posY - 1)); 
    let upleft    = document.getElementById((posX - 1) + "," + (posY - 1)); 
    let downright = document.getElementById((posX + 1) + "," + (posY + 1)); 
    let downleft  = document.getElementById((posX - 1) + "," + (posY + 1));

    let sum = isAlive(right) + isAlive(left) + isAlive(up) + isAlive(down)
    sum += isAlive(upright) + isAlive(upleft) + isAlive(downright) + isAlive(downleft);
    
    return sum;
}

function step() {
    let newState = []; // array of new state. array of arrays
    for(let x = 0; x < 10; x++){
        newState[x] = [];
        for(let y = 0; y < 10; y++){
            if(isAliveV1(x, y)){
                if(countNeighbors(x, y) <= 1 || countNeighbors(x, y) >= 4){
                    newState[x][y] = "";
                } else {
                    newState[x][y] = "live";
                }
            } else { // dead
                if(countNeighbors(x, y) === 3) {
                    newState[x][y] = "live";
                } else {
                    newState[x][y] = "";
                }
            } 
        }
    }
    // console.log(newState);
    for(let x = 0; x < 10; x++){
        for(let y = 0; y < 10; y++){
            let cell = document.getElementById(x + "," + y);
            // cell.classList.remove("live");
            // cell.classList.add("live");
            cell.setAttribute("class", newState[x][y]);
        }
    }
    // console.log(newState);
}

function sleep(ms) {
    // returns after "ms" milliseconds.
    var date = new Date();
    var curDate = null;
    do {
         curDate = new Date();
    } while(curDate-date < ms);
}

let intervalId;

function start() {
    // let now = Date();
    // let future = Date().setMinutes(now.getMinutes() + 10);
    // console.log(now);
    // console.log(future);
    // while(true){
    // let i = 0;
    // for reasons I don't understand, using sleep doesn't work.
    // while(i<10){
    //     console.log(i++);
    //     sleep(500);
    //     step();
    // }
    intervalId = setInterval(step, 500);

    document.getElementById("start").style.display = "none";
    document.getElementById("stop").style.display = "inline";
}

function stop() {
    clearInterval(intervalId);
    
    document.getElementById("stop").style.display = "none";
    document.getElementById("start").style.display = "inline";
}

