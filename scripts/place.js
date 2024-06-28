const windSpeed = 13.2;
const temperatureFahrenheit = 98.3;
const windChill = calculateWindChill(temperatureFahrenheit, windSpeed);

function calculateWindChill(temperature, windSpeed) {
  if (temperature > 50 || windSpeed < 3) {
    return 'N/A'; // Wind chill does not apply
  }

  const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  return Math.round(windChill);
}

document.getElementById('temp').innerText = `${temperatureFahrenheit} ˚F`;
document.getElementById('wind-speed').innerText = `${windSpeed} mph`;
document.getElementById('wind-chill').innerText = `${windChill}${windChill === 'N/A' ? '' : ' ˚F'}`;
