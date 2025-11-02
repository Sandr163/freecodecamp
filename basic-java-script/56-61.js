// Passing Values to Functions with Arguments
function functionWithArgs(arg1, arg2) {console.log(arg1 + arg2);

}
functionWithArgs(1, 2)



// Return a Value from a Function with Return
function timesFive(arg1) {
    return arg1 * 5;
}


// Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal here
    oopsGlobal = 5
}

// Only change code above this line

function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);



// Local Scope and Functions
    function myLocalScope() {
        // Only change code below this line
        const myVar = 4
        console.log('inside myLocalScope', myVar);
    }
    myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
    console.log('outside myLocalScope', myVar);//




// Global vs. Local Scope in Functions
// Setup
    const outerWear = "T-Shirt";

    function myOutfit() {
        // Only change code below this line
        var outerWear = "sweater";
        // Only change code above this line
        return outerWear;
    }
    myOutfit();



// Understanding Undefined Value returned from a Function
// Setup
    let sum = 0;

    function addThree() {
        sum = sum + 3;
    }

// Only change code below this line

    function addFive() {sum = sum + 5;}

// Only change code above this line

    addThree();
    addFive();
