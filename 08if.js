if (true) {
    console.log(" if is working")
} else {
    console.log("if is not working")
}
function gtHundred(a) {
    if (a > 100) {
        return (true)
    } else {
        return (false)
    }

}
console.log(gtHundred(1))
function oddOrEven(b) {
    if (b % 2 == 0) {
        return ("number is even")
    } else {
        return ("number is odd")
    }
}
console.log(oddOrEven(8))
function zero(c) {
    if (c == 0) {
        return ("number is zero")
    }
    if (c % 2 == 0) {
        return ("number is even")

    } else {
        return ("number is odd")
    }


}
console.log(zero(5))
function oddOrEvenInt(s) {
    if (s == 0) {
        return ("number is zero")
    }
    else if (s % 2 == 0) {
        if (s > 0) {
            return ("positive even number")
        } else {
            return ("negative even number")
        }
    }
    else {
        if (s > 0) {
            return ("positive odd number")
        } else {
            return ("negative odd number")
        }
    }

}
console.log(oddOrEvenInt(0))
function checkArray(arr) {
    if (arr[0] == 0 && arr.length == 5 && arr.length <= 5)
        return ("true")
    else
        return ("false")
}

console.log(checkArray([0, 1, 2,]))
function bartender(birth) {
    if (birth <= 2001)
        return ("cheers")
    else
        return ("sorry you're not adult")
}
let birth = 2002
console.log(bartender(birth))