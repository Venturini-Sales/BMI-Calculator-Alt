function formatHeight(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length > 1) {
    input.value = value[0] + ',' + value.slice(1);
  } else {
    input.value = value;
  }
}

function calculateBMI() {
  const heightInput = document.getElementById('heightInput').value.replace(',', '.');
  const weightInput = parseFloat(document.getElementById('weightInput').value);

  if (!heightInput || parseFloat(heightInput) <= 0) {
    alert('Enter your height');
    return;
  }

  if (!weightInput || weightInput <= 0) {
    alert('Enter your weight');
    return;
  }

  const height = parseFloat(heightInput);
  const bmi = weightInput / (height * height);
  const formattedBMI = bmi.toFixed(2);

  const bmiResult = document.getElementById('bmiResult');
  bmiResult.textContent = formattedBMI;

  if (bmi < 18.5) {
    bmiResult.style.color = 'orange';
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiResult.style.color = 'green';
  } else if (bmi >= 25 && bmi < 30) {
    bmiResult.style.color = 'lightcoral';
  } else {
    bmiResult.style.color = 'crimson';
  }
}

function clearFields() {
  document.getElementById('heightInput').value = '';
  document.getElementById('weightInput').value = '';
  const bmiResult = document.getElementById('bmiResult');
  bmiResult.textContent = '0.00';
  bmiResult.style.color = 'white';
}
