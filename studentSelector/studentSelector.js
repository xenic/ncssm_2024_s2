let students = ["alex", "sydney", "kenan","piper", "natasha", "caroline", "tanuli", "chandler", "claire", "franklin", "john", "nick", "kennedy", "mayah", "jiah", "elias", "mrq", "maddy", "anjali", "shirley"];



function pick() {
    // generate a number
    // make it between 0 and 19 (inclusive)
    // display the number
    let rnd = Math.floor(Math.random() * students.length);
    let selectedStudent = students[rnd];
    // console.log(document.getElementsByTagName("p").length);
    // document.getElementsByTagName("p")[0].textContent = selectedStudent;
    // document.getElementById("selectedStudentPlace").textContent += selectedStudent;
    let studentList = document.getElementById("selectedStudentPlace");
    let placeholder = studentList.firstElementChild;
    console.log(placeholder.textContent);
    let newItem = document.createElement("li");
    newItem.textContent = selectedStudent;
    if (placeholder.textContent in students) {
        studentList.appendChild(newItem);
    } else {
        studentList.replaceChild(newItem, placeholder);        
    }
    
}

function initialize() {
    console.log("initialize");
}

function condition() {
    console.log("condition");
    return Math.random() > .5;
}

function update() {
    console.log("update");
}

function iterate(){
    // for(initialize(); condition(); update()) {
    //     console.log("something happened");
    // }

    // for(let i = 0; i < students.length; i++) {
    //     console.log(students[i]);
    // }

    // for(x in collection) iterates over the indices of the collection.
    // for(student in students) {
    //     console.log(students[student]);
    // }

    // for(x of collection) iterates over the elements of the collection.
    // for(student of students) {
    //     console.log(student);
    // }
    // let x = prompt("What is the name of the mascot?");
    // while(x !== "trogdor") {
    //     console.log(x);
    //     x = prompt("What is the name of the mascot?");
    // }

    let target = Number(prompt("enter a number"))
    if(target < 0) {
        for(let i = 0; i >= target; i--){
            console.log(i);
        }
    } else {
        for(let i = 0; i <= target; i++){
            console.log(i);
        }    
    }
}