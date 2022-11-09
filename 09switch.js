// function checkNum(a) {
//     switch (a) {
//         case 1:
//             return ("one")
//             break;
//         case 2:
//             return ("two")
//             break;
//         case 3:
//             return ("three")
//             break;
//         case 4:
//             return ("four")
//             break;
//         case 5:
//             return ("five")
//             break;
//         default:
//             return ("not in the range")
//             break;
//     }
// }

// console.log(checkNum(3))
// function printDay(day) {
//     switch (day) {
//         case 0:
//             console.log("sunday")
//             break;
//         case 1:
//             console.log("monday")
//             break;
//         case 2:
//             console.log("tuesday")
//             break;
//         case 3:
//             console.log("wednesday")
//             break;
//         case 4:
//             console.log("thursday")
//             break;
//         case 5:
//             console.log("friday")
//             break;
//         case 6:
//             console.log("saturday")
//             break;
//         default:
//             console.log("invalid day")

//     }
// }
// printDay(0)
// function customMessage(message) {
//     message = message.toLowerCase()
//     switch (message) {
//         case "hi":
//             console.log("hi there,big offers are awaiting for you")
//             break;
//         case "offer":
//         case "offers":
//             console.log("here are some amazing offers fot you,  iphone 14 for 75000")
//             break;
//         default:
//             console.log("hey,we are thre for you")
//             break;
//     }
// }
// let message = "Hi"
// customMessage(message)
// function calculator(num1, num2, operator) {
//     switch (operator) {
//         case '+':
//             console.log(num1 + num2)
//             break;
//         case "-":
//             console.log(num1 - num2)
//             break;
//         case "*":
//             console.log(num1 * num2)
//             break;
//         case "/":
//             console.log(num1 / num2)
//             break;
//         default:
//             console.log("invalid operator")
//             break;



//     }
// }
// calculator(2, 3, '+')
function countMonthDays(month) {
    month = month.toLowerCase()
    switch (month) {
        case "january":
        case "march":
        case "may":
        case "july":
        case "september":
        case "november":
            console.log("31 days")
            break;
        case "april":
        case "june":
        case "august":
        case "october":
        case "december":
            console.log("30 days")
            break;
        case "february":
            console.log("28 days")
            break;
        default:
            console.log("invalid month")
            break;
    }
}
countMonthDays("August")
function wishMe(date) {
    let today = 09
    if (date > today) {
        return ("days for your bithday is" + (date - today))
    }
    else if (date = today) {
        return ("happy bithday")
    }
    else {
        return ("wish next year")
    }

}
console.log(wishMe(25))