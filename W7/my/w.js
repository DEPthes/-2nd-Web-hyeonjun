const API_KEY = "7624a275613a91d2028a215c471a2080";
const weatherLine = document.createElement('h4');
const temperatureLine = document.createElement('h4');
const cityLine = document.createElement('h4');
const de = document.querySelector('.de');

document.body.append(weatherLine)
document.body.append(temperatureLine)
document.body.append(cityLine)



let city = document.querySelector('#city')

let button = document.querySelector('#changeCity')

let count = 0
let cityName = 'Seoul'
button.addEventListener('click',func)
function func(event){
    event.preventDefault()
    count++
    
    
    if(count === 0){ cityName = 'Seoul'}
    else{cityName =  city.value}
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

fetch(url)
    .then(response => response.json())
    .then(data => {
        
        weatherLine.textContent = data.weather[0].main
        temperatureLine.textContent = `${(data.main.temp-273).toFixed(1)}도`
        cityLine.textContent = data.name
       
        
    })
}

de.append(weatherLine)
de.append(temperatureLine)
de.append(cityLine)


