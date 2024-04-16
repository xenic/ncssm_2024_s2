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

function countNeighbors(posX, posY){
    // deal with edge cases...
    // if you're at the edge (top, bottom, left, right)
    // no wrapping.
    // posX === 0  left
    // posY === 0  top
    // posX === maxWidth (9)
    // posY === maxHeight (9)
    
}

