
let output = "";
const display = document.querySelector(".display,.button");

// Function to add content to display
function addToDisplay(value) {
    if (value === 'C') {
        output = "";
    } else {
        output += value;
    }
    display.innerText = output;
}

// Function to evaluate and display result
function calculate(symbol) {
    const result = eval(output);
    display.innerText = result;
    output = ""; // Reset output after calculation
    const inputValue = parseFloat(document.getElementById('display').value);

    // Check the symbol and perform the corresponding operation
    switch (symbol) {
        case 'log':
            result = logarithm(inputValue);
            break;
        case 'alog':
            result = alogarithm(inputValue);
            break;
        case 'sqrt':
            result = squareRoot(inputValue);
            break;
        case 'cubrt':
            result = cubeRoot(inputValue);
            break;
        case 'square':
            result = square(inputValue);
            break;
        case 'cube':
            result = cube(inputValue);
            break;
        default:
            result = "Invalid operation";
    }

    // Display the result
    document.getElementById('display').value = result;
}
function logarithm(number) {
    return Math.log10(number);
}

// Function to calculate natural logarithm (base e)
function alogarithm(number) {
    return Math.log(number);
}

// Function to calculate square root
function squareRoot(number) {
    return Math.sqrt(number);
}

// Function to calculate cube root
function cubeRoot(number) {
    return Math.cbrt(number);
}

// Function to calculate square
function square(number) {
    return Math.pow(number, 2);
}

// Function to calculate cube
function cube(number) {
    return Math.pow(number, 3);
}
// Updated clearDisplay function
function clearDisplay(type) {
    if (type === 'C') {
        // Clear last entered digit
        output = output.slice(0, -1); // Remove the last character from output
        display.innerText = output || '0';
    } else if (type === 'AC') {
        // Clear all
        output = "";
        display.innerText = '0';
        // You might want to reset any other variables or states related to your calculator here
    }
}


// Function to handle keydown event
function handleKeyDown(event) {
    // Check if the pressed key is a number key (0-9)
    if (event.key >= "0" && event.key <= "9") {
        // Call addToDisplay function with the pressed key
        addToDisplay(event.key);
    }
    else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {
        // If the pressed key is an operator (+, -, *, /), add it to the display
        addToDisplay(" " + event.key + " "); // Add spaces around the operator for clarity
    }
    else if (event.key === "=" || event.key === "Enter") {
        // If the pressed key is equal to (=) or Enter, evaluate the expression and display the result
        calculate();
    }
 else if (event.key === "Backspace") {
    // If the pressed key is Backspace, delete the last entered digit
    clearDisplay('C');
} else if (event.key === "d" || event.key === "D") {
    // If the pressed key is D or d, perform all-clear (AC) operation
    clearDisplay('AC');
}

}

// Add event listener for keydown event on the document
document.addEventListener("keydown", handleKeyDown);

// Get the toggle switch and the div container
const toggleDivs = document.getElementById('toggleDivs');
const divContainer = document.getElementById('divContainer');

// Function to add divs
function addDivs() {
    const divs = ['log', 'alog', 'sqrt','cubrt','x^2','x^3']; // Example divs
    divs.forEach(divText => {
        const div = document.createElement('div');
        div.textContent = divText;
        div.classList.add('button'); // Add a class name to the div
        div.addEventListener('click', () => {
            addToDisplay(divText); // Call addToDisplay function with the divText
        });
        divContainer.appendChild(div);
    });
}

// Function to remove divs
function removeDivs() {
    divContainer.innerHTML = ''; // Remove all divs
}

// Event listener for toggle switch
toggleDivs.addEventListener('change', function() {
    if (toggleDivs.checked) {
        // If the slider is turned on, add divs
        addDivs();
    } else {
        // If the slider is turned off, remove divs
        removeDivs();
    }
});


