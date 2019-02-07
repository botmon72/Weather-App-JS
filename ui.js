class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.icon = document.getElementById('w-icon')
    this.string = document.getElementById('w-string');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.clouds = document.getElementById('w-clouds');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.string.textContent = `${weather.weather[0]['main']}`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0]['icon']}.png`);
    this.description.textContent = `${weather.main.temp} F`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} PSI`;
    this.clouds.textContent = `Clouds: ${weather.clouds.all}%`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} MPH`;
  }
}