//for
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

//while
let i = 0;
while (i < 10) {
    
        console.log(i);
        i++;
    }

//do while
let i=10;
do{
    console.log(i);
    i--;
}while(i<10 && i>0);

//for in
const person ={
    name: "Meet",
    age: 21,

};
 for (const y in person){
    console.log(person[y]);
 }

//forEach
const number = [10,20,30];
number.forEach((x,y) => {
    console.log(x);
    console.log(y);
});



