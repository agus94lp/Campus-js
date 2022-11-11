let sumafactorial = 1;
let num = 10;
while (true) {
    sumafactorial*= num;
    num--;
    if (num===1) 
        break;
}
console.log(sumafactorial);