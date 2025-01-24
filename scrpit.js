const form = document.querySelector('form'); // Correct 'from' to 'form'

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    // Validate height input
    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please provide a valid height.";
        return;
    }

    // Validate weight input
    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please provide a valid weight.";
        return;
    }

    // Calculate BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    result.innerHTML = `Your BMI is ${bmi}`;
});
