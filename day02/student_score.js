function studenScore(){
let score=32;
switch(true)
{
case score>=90:
console.log("this student belongs to grade A");
break;
case score>=80:
    console.log("this student belongs to grade B");
        break;

case score>=70:
    console.log("this student belongs to grade c");
    break;

case score>=60:
console.log("this student belongs to grade D");
break;
case score>=50:
    console.log("this student belongs to grade F");
    break;
    default:
        console.log("this student belongs to grade G");
        break;

    
}

}
studenScore();
