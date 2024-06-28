// Static examples before implementing an API
const windSpeed = 13.2;
const temperature = 98.3;
let windChill = null;

function calculateWindChill(temperature, windSpeed, withFahrenheitSymbol=true) {
  const wc = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  return withFahrenheitSymbol ? `${Math.round(wc)} ˚F` : Math.round(wc);
}

if (temperature <= 50 && windSpeed > 3) {
  windChill = calculateWindChill(temperature, windSpeed);
}

document.getElementById('temp').innerText = `${temperature} ˚F`;
document.getElementById('wind-speed').innerText = `${windSpeed} mph`;
document.getElementById('wind-chill').innerText = `${windChill === null ? 'N/A' : windChill}`;
