const SUBJECT = ["국어", "영어", "수학", "웹프"];

class ScoreTable{
    studentList = [];

    drawTable(){
        document.write(this.studentList[0].id + " " + this.studentList[0].name + "&nbsp");
        for(let i = 0; i < this.studentList[0].score.length; i++){
            document.write(this.studentList[0].score[1] + "&nbsp");
        }
    }
}

class Student{
    id;
    name;
    score;
    rank;
    constructor(id, name , score){
        this.id = id;
        this.name = name;
        this.score = score;

    }

    getGrade(score){
        switch(parseInt(score/10)){
            case 10:
            case 9:
                return "A";
            case 8:
                return "B";
            case 7:
                return "C";
            default:
                return "F";
        }
    }



    printScore(){
        document.write(`<h3>학번: ${this.id} 이름: ${this.name}</h3>`);    
        for (let i = 0; i < SUBJECT.length; i++) {
        document.write(
            `${SUBJECT[i]} | ${this.score[i]} | ${this.toGrade(this.score[i])}<br>`
        );
        }
    }
}


let table = new ScoreTable();
let student1 = new Student(1, "김경원",[98,56,75,83]);
table.studentList.push(student1);


console.log(table);
console.log(student1);

function drawTitle(){

    let star = true;

for(let i =0; i<5;i++){
    for(let j = 0;j < 51;j++){
        if(i == 2){
            document.write("<h1> SEIS 대선린서비스 </h1>");
            star = !star;
            break;
        }else if(star){
            document.write("*");
        }else{
            document.write("&nbsp");
        }
        star = !star;
    }

    document.write("<br>");
}
}

drawTitle();
student1.printScore();

let isTeacher = confirm("선생님이십니까?");

if(isTeacher){

}else{
    let studentID = prompt("학번을 입력하세요");
    if(parseInt(studentID) == student1.id){
        student1.printScore();
    }
}
