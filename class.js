function print(name,gender,age){
    let details= name+" "+gender+" "+age;
    return details;
}
let std1=print("Rehman","Male",23)
console.log(std1);
let std2=print("Ramsha","female",21)
console.log(std2);
//switch statement
let dayofweek=prompt("Enter name of day!")
switch(dayofweek){
    case "sat":
        alert("Yippe! its weekend");
        break;
    case "sun":
        alert("Yippe! its weekend");
        break;
    case "fri":
        alert("TGIF");
        break;
    default:
        alert("Just shoot me!")
}
let y=10
switch(true){
    case(y<0):
        console.log("num is less than 0");
        break;
    case(y==0):
        console.log("num is equal to 0");
        break;
    default:
        console.log("num is greater than 0")
}

//while loop
let i=0;
while(i<=4){
    alert(i)
    i++;
}

let j=1;
let num=prompt("Enter a number to create a table?")
while(j<=10){
    console.log(num+"x"+j+"="+num*j)
    j++;
}

