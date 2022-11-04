function say_hello() {
    console.log("hello")
}
say_hello()
say_hello()
say_hello()
function say_hello_to_you(x) {
    console.log("hello " + x)
}
say_hello_to_you("Athira")
say_hello_to_you("vyshnavi")
function printPlusFive(y) {
    console.log(y + 5)
}
printPlusFive(8)
printPlusFive(12)
function printsum(a, b) {
    console.log(a + b)
}
printsum(5, 6)
printsum(10, 5)
function printbirthyear(age) {
    let ab = 2022 - age

    console.log("you are born in" + ab)
    return ab
    console.log("you are born in" + ab)

}

printbirthyear(20)
function printsquare(s) {

    console.log(s * s)
}
printsquare(7)
printsquare(2)
printsquare(5)
function getSquare(num) {
    return (num * num)
}
let x = getSquare(2)
console.log(x)
let year = printbirthyear(20)
console.log(year)
function getTriangleArea(b, h) {

    return ("area = " + 0.5 * b * h)
}
let area = getTriangleArea(10, 15)
console.log(area)
console.log(getTriangleArea(7, 8))
function getbasketBallPoint(three, two, free) {
    return ("total points = " + (3 * three + 2 * two + free))
}
console.log(getbasketBallPoint(2, 3, 4))
console.log(getbasketBallPoint(8, 25, 15))
let basketball = getbasketBallPoint
console.log(basketball(2, 3, 4));

