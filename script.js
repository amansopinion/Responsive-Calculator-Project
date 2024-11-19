function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value +- value;

}

function clearResult() {
    document.getElementById('result').value = '';

}

function deleteLast() {
    document.getElementById('result');
    resultField.value = resultfield.value.slice(0, -1);
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch {
        resultField.value = 'Error';
    }
}