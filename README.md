📄 README.md
# Swapping Numbers using JavaScript (Third Variable Method)

This project demonstrates how to **swap two numbers using a third variable** in **two environments**:

1. **Browser (with `prompt`)**
2. **Node.js Terminal (with `readline`)**

---

## 🚀 Features
- Swap two numbers easily.
- Two implementations (Browser & Node.js).
- Explains important JavaScript methods step by step.
- Beginner friendly.

---

## 📂 Project Structure


📦 SwappingProject
┣ 📜 browser-swap.js # For Browser
┣ 📜 node-swap.js # For Node.js
┗ 📜 README.md # Documentation


---

## 1️⃣ Browser Version (using `prompt`)

### 📜 Code: `browser-swap.js`
```js
// Swapping Using Third Variable - Browser Version

let num1 = Number(prompt("Write First Number : "));
let num2 = Number(prompt("Write Second Number : "));

function SwappUsingThirdVariable(a, b) {
    let temp = a;   // temp stores first number
    a = b;          // assign second number to first
    b = temp;       // assign temp (first number) to second
    return [a, b];  // return swapped values
}

let [newNum1, newNum2] = SwappUsingThirdVariable(num1, num2);

console.log("Before Swapping \n First Number Is : ", num1, " \n Second Number Is : ", num2);
console.log("After Swapping \n First Number Is : ", newNum1, " \n Second Number Is : ", newNum2);

▶️ Run in Browser

Copy code into a .js file.

Link it in an index.html using <script src="browser-swap.js"></script>.

Open in browser → It will ask for numbers with prompt.

2️⃣ Node.js Version (using readline)
📜 Code: node-swap.js
// Swapping Using Third Variable - Node.js Version
const readline = require("readline");

// Create interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask first number
rl.question("Write First Number: ", (num1) => {
    // Ask second number
    rl.question("Write Second Number: ", (num2) => {
        
        function SwappUsingThirdVariable(a, b) {
            let temp = a;   // store a in temp
            a = b;          // assign b to a
            b = temp;       // assign temp to b
            return [a, b];  // return swapped values
        }

        let [newNum1, newNum2] = SwappUsingThirdVariable(Number(num1), Number(num2));

        console.log("Before Swapping \n First Number Is :", num1, "\n Second Number Is :", num2);
        console.log("After Swapping \n First Number Is :", newNum1, "\n Second Number Is :", newNum2);

        rl.close();
    });
});

▶️ Run in Node.js
node node-swap.js

📚 Functions and Methods Documentation
🔹 prompt() (Browser only)

Function to take input from user.

Always returns string.

Used with Number() to convert input to number.

Example:

let num = Number(prompt("Enter a number: "));

🔹 Number()

Converts string → number.

Example: Number("10") → 10.

🔹 function SwappUsingThirdVariable(a, b)

Custom function to swap two values.

Uses a third variable (temp) to store one value temporarily.

Returns swapped values as an array [a, b].

🔹 readline (Node.js only)

Built-in Node.js module to handle user input/output.

Methods used:

readline.createInterface({ input, output })
Creates an interface for input and output stream.

input: process.stdin → read input from terminal.

output: process.stdout → show messages in terminal.

rl.question("message", callback)
Asks user for input and executes callback with entered value.

rl.close()
Ends the input interface.

🔹 console.log()

Prints output in terminal/browser console.

📊 Example Outputs
Browser Version
Before Swapping 
 First Number Is :  10 
 Second Number Is :  20
After Swapping 
 First Number Is :  20 
 Second Number Is :  10

Node.js Version
Write First Number: 5
Write Second Number: 15

Before Swapping 
 First Number Is : 5 
 Second Number Is : 15
After Swapping 
 First Number Is : 15 
 Second Number Is : 5

👨‍💻 Author

Rahul Pandey
Backend Developer | JavaScript Learner | Open Source Enthusiast


---

👉 Rahul, kya tum chahte ho mai iske liye ek **comparative table (Browser vs Node.js)** bhi bana du taaki difference aur clearly dikh jaye?

You said:
im=nka proper documentation do
ChatGPT said:

Samajh gaya Rahul 👍
Ab main tumhe proper documentation deta hu (jaise industry-level projects me hota hai) jisme dono version (Browser + Node.js) ke liye detail explanation, working, flow, and methods honge.

📘 Documentation – Swapping Two Numbers Using Third Variable
📖 Overview

This project demonstrates the concept of swapping two numbers using a temporary (third) variable.
It is implemented in two environments:

Browser (JavaScript + prompt)

Node.js Terminal (JavaScript + readline)

The program highlights how input/output differs in browser and terminal while solving the same problem.

🔢 Problem Statement

Swap the values of two variables (num1 and num2) using a third variable (temp) and print:

Before Swapping values

After Swapping values

⚙️ Working Principle (Algorithm)

Take two input numbers.

Store the value of the first number in a temporary variable.

Assign the second number to the first variable.

Assign the temporary variable’s value to the second variable.

Print swapped results.

📂 Project Structure
📦 SwappingProject
 ┣ 📜 browser-swap.js   # Browser implementation
 ┣ 📜 node-swap.js      # Node.js implementation
 ┗ 📜 README.md         # Documentation

1️⃣ Browser Version
📜 Code (browser-swap.js)
let num1 = Number(prompt("Write First Number : "));
let num2 = Number(prompt("Write Second Number : "));

function SwappUsingThirdVariable(a, b) {
    let temp = a;   // store a in temp
    a = b;          // assign b to a
    b = temp;       // assign temp to b
    return [a, b];  // return swapped values
}

let [newNum1, newNum2] = SwappUsingThirdVariable(num1, num2);

console.log("Before Swapping \n First Number Is : ", num1, " \n Second Number Is : ", num2);
console.log("After Swapping \n First Number Is : ", newNum1, " \n Second Number Is : ", newNum2);

▶️ How to Run

Copy the code into browser-swap.js.

Create an index.html with:

<script src="browser-swap.js"></script>


Open index.html in a browser.

Input numbers when prompted → See output in console (F12 → Console).

🧩 Explanation of Methods

prompt() → Takes user input in string format.

Number() → Converts input string to number.

console.log() → Prints result in browser console.

2️⃣ Node.js Version
📜 Code (node-swap.js)
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Write First Number: ", (num1) => {
    rl.question("Write Second Number: ", (num2) => {
        
        function SwappUsingThirdVariable(a, b) {
            let temp = a;   // store a in temp
            a = b;          // assign b to a
            b = temp;       // assign temp to b
            return [a, b];
        }

        let [newNum1, newNum2] = SwappUsingThirdVariable(Number(num1), Number(num2));

        console.log("Before Swapping \n First Number Is :", num1, "\n Second Number Is :", num2);
        console.log("After Swapping \n First Number Is :", newNum1, "\n Second Number Is :", newNum2);

        rl.close();
    });
});

▶️ How to Run

Save code in node-swap.js.

Run in terminal:

node node-swap.js


Enter numbers when asked → Output will show in terminal.

🧩 Explanation of Methods

require("readline") → Imports Node.js input/output module.

readline.createInterface() → Creates input/output stream.

rl.question("msg", callback) → Asks user for input and passes it to callback.

rl.close() → Ends input session.

Number() → Converts string to number.

console.log() → Prints results in terminal.

🔍 Comparative Table (Browser vs Node.js)
Feature	Browser Version (prompt)	Node.js Version (readline)
Input Method	prompt() popup box	rl.question() in terminal
Output Location	Browser Console (F12)	Terminal / Command Line
Conversion to Number	Number(prompt())	Number(input)
End Program	Automatic after script run	rl.close() required
📊 Example Outputs
✅ Browser Version
Before Swapping 
 First Number Is :  10 
 Second Number Is :  20
After Swapping 
 First Number Is :  20 
 Second Number Is :  10

✅ Node.js Version
Write First Number: 5
Write Second Number: 15

Before Swapping 
 First Number Is : 5 
 Second Number Is : 15
After Swapping 
 First Number Is : 15 
 Second Number Is : 5

📚 Concepts Learned

Variables and Data Types

Functions and Parameters

Temporary Variable for Swapping

Input/Output in Browser vs Node.js

Type Conversion (Number())
Today 13 September And I Sovled Leet Code Problem Duplicate Element From Sorted Array Using two Pointer Algorithim