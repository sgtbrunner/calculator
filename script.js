// VARIABLE DECLARATION
const display = document.getElementById('display');
const list = document.getElementsByClassName('button');

// FUNCTIONS
const clearDisplay = () => { display.textContent = '0'; }

const change = () => {
	if (display.textContent[0] === "-") {
		if (hasOperator(display.textContent.slice(1)) != true) {
			display.textContent = display.textContent*(-1)			
		}
	} else { 
		if (hasOperator(display.textContent) != true) {
			display.textContent = display.textContent*(-1)			
		}
	}
}

const backspace = () => { display.textContent = (display.textContent.length > 1) ? display.textContent.substr(0, display.textContent.length-1) : '0'}

const isOperator = (value) => { if (value === "*" || value === "/" || value === "+" || value === "-" ) { return true } }

const isDot = (char) => { if (char === ".") { return true} }

const hasOperator = (string) => {
	for (i=0; i < string.length ; i++) {
		if (isOperator(string[i])) {
			return true;
		}
	}
}

const hasDot = (string) => {
	for (i=0; i < string.length ; i++) {
		if (isDot(string[i])) {
			return true;
		}
	}
}

const addValue = (value) => {
	display.textContent += value.toString();
}

const writeValue = (value) => {
	if (display.textContent === '0') {
		if (isOperator(value) != true) {
			display.textContent = value;
		}
	} else {
		if (isOperator(value) != true && isDot(value) != true) {
			addValue(value);			
		} else {
			if (isOperator(value) === true && hasOperator(display.textContent.slice(1)) != true) {
				addValue(value);					
			} else {
				if (isDot(value) === true && hasDot(display.textContent) != true) {
					addValue(value);	
				}
			}
		}
	}
}

const evaluateResult = () => { display.textContent = eval(display.textContent) }

const doActionOnKeyPress = (event) => {
	switch (event.key) {
		case "Delete":
			clearDisplay();
			break;
		case " ":
			change();
			break;
		case "Backspace":
			backspace();
			break;
		case "/":
			writeValue("/");
			break;
		case "1":
			writeValue("1");
			break;
		case "2":
			writeValue("2");
			break;
		case "3":
			writeValue("3");
			break;
		case "*":
			writeValue("*");
			break;
		case "4":
			writeValue("4");
			break;
		case "5":
			writeValue("5");
			break;
		case "6":
			writeValue("6");
			break;
		case "-":
			writeValue("-");
			break;
		case "7":
			writeValue("7");
			break;
		case "8":
			writeValue("8");
			break;
		case "9":
			writeValue("9");
			break;
		case "+":
			writeValue("+");
			break;
		case "0":
			writeValue("0");
			break;
		case ".":
			writeValue(".");
			break;
		case "Enter":
			evaluateResult();
			break;
		case "=":
			evaluateResult();
			break;
	}
}

// // CALL FUNCTION EVENTS
					// On Keypress
document.addEventListener("keydown", doActionOnKeyPress);
					// On Click
list[0].addEventListener("click", clearDisplay);
list[1].addEventListener("click", change);
list[2].addEventListener("click", backspace);
list[3].addEventListener("click", function() {writeValue("/")});
list[4].addEventListener("click", function() {writeValue("1")});
list[5].addEventListener("click", function() {writeValue("2")});
list[6].addEventListener("click", function() {writeValue("3")});
list[7].addEventListener("click", function() {writeValue("*")});
list[8].addEventListener("click", function() {writeValue("4")});
list[9].addEventListener("click", function() {writeValue("5")});
list[10].addEventListener("click", function() {writeValue("6")});
list[11].addEventListener("click", function() {writeValue("-")});
list[12].addEventListener("click", function() {writeValue("7")});
list[13].addEventListener("click", function() {writeValue("8")});
list[14].addEventListener("click", function() {writeValue("9")});
list[15].addEventListener("click", function() {writeValue("+")});
list[16].addEventListener("click", function() {writeValue("0")});
list[17].addEventListener("click", function() {writeValue(".")});
list[18].addEventListener("click", evaluateResult);

// BUTTON CHEAT SHEET
// C = list[0];
// +/- = list[1];
// ← = list[2];
// / = list[3];
// 1 = list[4];
// 2 = list[5];
// 3 = list[6];
// X = list[7];
// 4 = list[8];
// 5 = list[9];
// 6 = list[10];
// - = list[11];
// 7 = list[12];
// 8 = list[13];
// 9 = list[14];
// + = list[15];
// 0 = list[16];
// . = list[17];
// = = list[18];