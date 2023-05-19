//1
/*
var name = prompt('Enter your name:');
console.log('Hello ' + name);
*/
//2
/*
const year = prompt('Enter your year of birth:');
if( year<=2023)
{
    var age = 2023 - year;
}
console.log("Your age is " + age);
*/
//3
/*
var length = prompt('Square length:');
if(length >0)
{
    var answer = length * 4;

}

console.log('P square is ' + answer);
*/
//4
/*
var r = prompt('Circle radius:');
if(r > 0)
{
    var S1 = (r*r) * 3.14;
    var S2 = (r*r);
}

console.log('S is ' + S1 +' or '+ S2+'π');
*/
//5
/*
var S = prompt('Distance(km):');
var t = prompt('Time:');
var V = S/t;


console.log('V is ' + V);
*/
//6
/*
var dollars = prompt('Enter dollars:');
var evro = 0.9243;

var answer = dollars * evro;

console.log(answer + ' evro');
*/
//7
/*
var flesh_card = prompt('Enter Mb:');
var file = 820;

var answer = flesh_card/file;

console.log(Math.trunc(answer));
*/
//8
/*
var money = prompt('Enter money:');
var price = prompt('Enter chocolate price:');
var answer = Math.trunc(money/price);
var answer2 = money - (answer*price);

console.log(answer, answer2);
*/

//9
/*
var number = prompt('Enter number:');

var one = Math.trunc(number/100);
var two = Math.trunc((number/10)%10);
var three = number%10;
console.log(three,two,one);
*/
//10
/*
var number = prompt('Enter number:');

if(number%2==0)
{
    console.log('Even number');

}
else
{
    console.log('Odd number');
}
*/