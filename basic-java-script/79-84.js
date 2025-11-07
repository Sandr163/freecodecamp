// Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val <  10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);


// Chaining If Else Statements
function testSize(num) {if (num < 5)
{return "Tiny"}
else if (num < 10) {return "Small"}
else if (num < 15) {return "Medium"}
else if (num < 20) {return "Large"}
else if (num >= 20) {return "Huge"}
    return "Change Me";
}
testSize(7);


// Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes === 1) {
        return names[0]; // Hole-in-one!
    } else if (strokes <= par - 2) {
        return names[1]; // Eagle
    } else if (strokes === par - 1) {
        return names[2]; // Birdie
    } else if (strokes === par) {
        return names[3]; // Par
    } else if (strokes === par + 1) {
        return names[4]; // Bogey
    } else if (strokes === par + 2) {
        return names[5]; // Double Bogey
    } else {
        return names[6]; // Go Home!
    }
    // Only change code above this line
}

console.log(golfScore(5, 4)); // Should output "Birdie"



// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    // Only change code above this line
    return answer;
}
console.log(caseInSwitch(1)); // Output: "One"


// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
    let answer = "";
    switch(val){
        case 'a':
            answer = "apple";
            break;// Only change code below this line
        case 'b':
            answer = "bird";
            break;
        case 'c':
            answer = "cat";
            break;
        default:
            answer = "stuff";}

    // Only change code above this line
    return answer;
}

switchOfStuff(1);



// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;

        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;

        case 7:
        case 8:
        case 9:
            answer = "High";
            break;

        default:
            answer = "Out of range";
    }
    return answer
}
