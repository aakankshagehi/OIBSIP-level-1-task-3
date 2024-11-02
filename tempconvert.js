function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const inputUnit = document.getElementById('inputUnitSelect').value;
    const outputUnit = document.getElementById('outputUnitSelect').value;
    let result = '';
  
    if (isNaN(temperature)) {
      result = 'Please enter a valid number!';
    } else {
      if (inputUnit === outputUnit) {
        result = `The temperature is the same: ${temperature}°${outputUnit.charAt(0).toUpperCase()}`;
      } else {
        let tempInCelsius;
  
        // Convert the input temperature to Celsius first
        switch (inputUnit) {
          case 'celsius':
            tempInCelsius = temperature;
            break;
          case 'fahrenheit':
            tempInCelsius = (temperature - 32) * 5 / 9;
            break;
          case 'kelvin':
            tempInCelsius = temperature - 273.15;
            break;
        }
  
        // Convert from Celsius to the desired output unit
        switch (outputUnit) {
          case 'celsius':
            result = `${tempInCelsius.toFixed(2)}°C`;
            break;
          case 'fahrenheit':
            result = `${(tempInCelsius * 9 / 5 + 32).toFixed(2)}°F`;
            break;
          case 'kelvin':
            result = `${(tempInCelsius + 273.15).toFixed(2)}K`;
            break;
        }
      }
    }
  
    document.getElementById('result').innerText = result;
  }
  
