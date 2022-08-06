// https://calculator.swiftutors.com/gravitational-acceleration-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const radiusofPlanetfromitsCenterRadio = document.getElementById('radiusofPlanetfromitsCenterRadio');
const massofthePlanetRadio = document.getElementById('massofthePlanetRadio');
const radiusoftheCircleRadio = document.getElementById('radiusoftheCircleRadio');

let radiusofPlanetfromitsCenter;
const G = 6.6726e-11;
let massofthePlanet = v1;
let radiusoftheCircle = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

radiusofPlanetfromitsCenterRadio.addEventListener('click', function() {
  variable1.textContent = 'Mass of the Planet (kg)';
  variable2.textContent = '(R) Radius of the Circle (m)';
  massofthePlanet = v1;
  radiusoftheCircle = v2;
  result.textContent = '';
});

massofthePlanetRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of Planet from its Center (m/s²)';
  variable2.textContent = '(R) Radius of the Circle (m)';
  radiusofPlanetfromitsCenter = v1;
  radiusoftheCircle = v2;
  result.textContent = '';
});

radiusoftheCircleRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of Planet from its Center (m/s²)';
  variable2.textContent = 'Mass of the Planet (kg)';
  radiusofPlanetfromitsCenter = v1;
  massofthePlanet = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(radiusofPlanetfromitsCenterRadio.checked)
    result.textContent = `Radius of Planet from its Center = ${computeRadiusofPlanetfromitsCenter()} m/s²`;

  else if(massofthePlanetRadio.checked)
    result.textContent = `Mass of the Planet = ${computeMassofthePlanet().toFixed(2)} kg`;

  else if(radiusoftheCircleRadio.checked)
    result.textContent = `Radius of the Circle = ${computeRadiusoftheCircle().toFixed(2)} m`;
})

// calculation

function computeRadiusofPlanetfromitsCenter() {
  return (G * Number(massofthePlanet.value)) / Math.pow(Number(radiusoftheCircle.value), 2);
}

function computeMassofthePlanet() {
  return (Number(radiusofPlanetfromitsCenter.value) * Math.pow(Number(radiusoftheCircle.value), 2)) / G;
}

function computeRadiusoftheCircle() {
  return Math.sqrt((G * Number(massofthePlanet.value)) / Number(radiusofPlanetfromitsCenter.value));
}