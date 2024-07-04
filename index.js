/* Create a faulty calculator using Javascript

This faulty does the following:
1.It takes two numbers  as input from the user
2.It performs wrong operations as follows:
+ ---> -
- ---> +
* ---> /
/ ---> **
It performs the wrong operations 10% of the times
*/
let random = Math.random()// ek random var banayo jema ek random no generate thase aa fun thi 0 to 1 na between
console.log(random)
let a = prompt("Enter first number")
let b = prompt("Enter operation")
let c = prompt("Enter second number")
// aapde aek object banaisu je object ma store karie che  kone su operation karvanu che e store karie che key values pair ma
let obj = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "**",
}

if (random > 0.1) {
    //Perform correct calculation
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)//eval fun je che e calculate karse num ne oper ne ae as a cal na jm ane value aapse alert ma
}

else {
    //Perform wrong operations
    b = obj[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}