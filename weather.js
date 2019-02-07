//4277976e98c70fa2ce0e40a413a55780

class Weather{
  constructor(city, country){
    this.apiKey = `4277976e98c70fa2ce0e40a413a55780`;
    this.city = city;
    this.country = country;
  }

  //fetch weather from API
  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=imperial`);

    const data = await response.json();

    return data;
  }

  //method to change weather location
  changeLocation(city, country){
    this.city = city;
    this.country = country;
  }
}