//init weather class
const storage = new Storage();
const weather = new Weather(storage.getLocalData().city, storage.getLocalData().country);

const ui = new UI();


//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  storage.setLocalData(city, country);
  weather.changeLocation(city, country);
  getWeather();

  //close modal
  $('#locModal').modal('hide');
})

function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results)
  })
  .catch(err => {console.log(err)});
}
