var num = prompt("Enter the number to be reveresed :", " ")
var n = num
// var rev = 0, rem
// while (n > 0) {
//     rem = n % 10
//     rev = rev * 10 + rem
//     n = Math.floor(n / 10)
rev = n.split("").reverse().join("")
window.alert("The given number is : " + num + " \n The reversed number is : " + rev + "\n")