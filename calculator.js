let calculation = '';
let resultShown = false;

function updateCalculation(value) {
    const display = document.getElementById('display');

    if (value === ' = ') {
        try {
            calculation = eval(calculation);
            if (calculation === undefined) display.innerText = 0;
            else display.innerText = calculation;
            resultShown = true;


        } catch {
            display.innerText = 'Error';
            calculation = '';
        }
        return;
    }

    if (resultShown) {
        if (!isNaN(value)) calculation = value;
        else calculation += value;
        resultShown = false;

    } else {
        calculation += value;
    }
    display.innerText = calculation;
    display.scrollLeft = display.scrollWidth;
}

function clearCalculation() {
    calculation = '';
    document.getElementById('display').innerText = '0';
    console.clear();
}