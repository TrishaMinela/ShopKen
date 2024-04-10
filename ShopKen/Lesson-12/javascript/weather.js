fetch("https://api.openweathermap.org/data/2.5/onecall?lat=14.1384&lon=121.3198&appid=79cf3ff62a1685b8d326951e4140b61b")
  .then(function (response) {
    return response.json();
  })

  .then(function(data){
  
    const weather = data['current'];
    const page = weather.filter(specific => specific.timezone == "Asia/Manila")

    weather.forEach(weather => {
      document.getElementById(`temp`).textContent = `${weather.current.temp}`
      document.getElementById(`description`).textContent = `${weather.current.weather.description}`
      document.getElementById(`humidity`).textContent = `${weather.current.humidity}`

    })
    

});

    