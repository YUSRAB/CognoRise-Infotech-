document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateButton = document.getElementById('calculate');
    const resetButton = document.getElementById('reset');
    const resultDisplay = document.getElementById('result');

    calculateButton.addEventListener('click', () => {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDisplay.innerHTML = 'Please enter valid height and weight values.';
            return;
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const bmiRounded = bmi.toFixed(1);
        let category;
        let categoryColor;

        if (bmi < 18.5) {
            category = 'Underweight';
            categoryColor = '#ff5252';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Healthy';
            categoryColor = '#00c853';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            categoryColor = '#ffab00';
        } else {
            category = 'Obese';
            categoryColor = '#d50000';
        }

        resultDisplay.innerHTML = `
            <div class="bmi-value" style="color: ${categoryColor};">${bmiRounded}</div>
            <div>You are <span style="color: ${categoryColor};">${category}</span>!</div>
        `;
    });

    resetButton.addEventListener('click', () => {
        heightInput.value = '';
        weightInput.value = '';
        resultDisplay.innerHTML = '';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateButton = document.getElementById('calculate');
    const resetButton = document.getElementById('reset');
    const resultDisplay = document.getElementById('result');

    calculateButton.addEventListener('click', () => {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDisplay.innerHTML = 'Please enter valid height and weight values.';
            return;
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const bmiRounded = bmi.toFixed(1);
        let category;
        let categoryColor;

        if (bmi < 18.5) {
            category = 'Underweight';
            categoryColor = '#ff5252';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Healthy';
            categoryColor = '#00c853';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            categoryColor = '#ffab00';
        } else {
            category = 'Obese';
            categoryColor = '#d50000';
        }

        resultDisplay.innerHTML = `
            <div class="bmi-value" style="color: ${categoryColor};">${bmiRounded}</div>
            <div>You are <span style="color: ${categoryColor};">${category}</span>!</div>
        `;
    });

    resetButton.addEventListener('click', () => {
        heightInput.value = '';
        weightInput.value = '';
        resultDisplay.innerHTML = '';
    });
});
