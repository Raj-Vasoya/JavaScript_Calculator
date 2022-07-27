const calculator = {
    value: '0', //display on screen
    value1: null,
    value2: false, // value2 is true when click on one operator
    operator: null,
};

function number1(num) {
    const { value, value2 } = calculator;

    if (value2 === true) {
        calculator.value = num;
        calculator.value2 = false;
        console.log('value2'); //value2 log
    }
    else {
        calculator.value = value === '0' ? num : value + num; // value is o then print num otherwise append
        console.log('value1'); // value1 log
    }
}

function decimal(dot) {
    if (calculator.value2 === true) {
        calculator.value = "0." // value2 true then print 0.
        calculator.value2 = false;
        console.log('dot'); //after operator
        return
    }

    if (!calculator.value.includes(dot)) {
        calculator.value += dot; // already any value exist then append the dot
        console.log('dot value'); //after clear screen
    }
}

function operator2(op) {
    const { value1, value, operator } = calculator
    const value3 = parseFloat(value);

    if (value1 == null && !isNaN(value3)) { //value1 null and value3 is nan then value3 store as value1
        calculator.value1 = value3;
        calculator.value += op;
        console.log('o1'); //first operator
    }

    if (operator && calculator.value2) { //exist any operator or value2 is true then print new ooperator
        calculator.operator = op;
        var a = calculator.value;
        calculator.value = a.substring(0, value.length - 1) //hide the last operator
        calculator.value += op;
        console.log(op);
        console.log('o3'); //overload operator
        return;
    }

    else if (operator) {
        const result = calculate(value1, value3, operator); //call calculate function
        console.log(result, "result");
        calculator.value = `${parseFloat(result.toFixed(4))}`;
        calculator.value1 = result;
        calculator.value += op;
        console.log(op);
        console.log('o2'); //second calculation operator
    }
    calculator.value2 = true;
    calculator.operator = op;
}

function calculate(value1, value4, operator) { //last value stored in value4
    if (operator == '+') {
        console.log(value4, "plus");
        return value1 + value4;
    } else if (operator == '-') {
        return value1 - value4;
    } else if (operator == '*') {
        return value1 * value4;
    } else if (operator == '/') {
        return value1 / value4;
    }
}

function clear() {
    calculator.value = '0';
    calculator.value1 = null;
    calculator.value2 = false;
    calculator.operator = null;
}

function newvalue() { //for update value on screen
    const display = document.querySelector('.screen');
    display.value = calculator.value.replace("=", "");
    console.log(display.value, "abc");
}
newvalue(); //print new value in screen

const keys = document.querySelector('.keys');
keys.addEventListener('click', event => {
    const target = event.target;
    const value = target.value;
    if (!target.matches('button')) { //not match button then exit from loop
        return;
    }

    switch (value) {
        case '+':
            // operator2(value);
            // break;
        case '-':
            // operator2(value);
            // break;
        case '*':
            // operator2(value);
            // break;
        case '/':
            // operator2(value);
            // break;
        case '=':
            operator2(value);
            break;
        case '.':
            decimal(value);
            break;
        case 'clear':
            clear();
            break;
        default:
            if (Number.isInteger(parseFloat(value))) { //return true if value is integer of the datatype number
                number1(value); //call number1 function
            }
    }
    newvalue();
});
