let students = ["alex", "sydney", "kenan","piper", "natasha", "caroline", "tanuli", "chandler", "claire", "franklin", "john", "nick", "kennedy", "mayah", "jiah", "elias", "mrq", "maddy", "anjali", "shirley"];

function pick() {
    // generate a number
    // make it between 0 and 19 (inclusive)
    // display the number
    let rnd = Math.floor(Math.random() * students.length);
    let selectedStudent = students[rnd];
    console.log(document.getElementsByTagName("p").length);
    document.getElementsByTagName("p")[0].textContent = selectedStudent;
}