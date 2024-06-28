document.querySelector(".btn").addEventListener("click", () => {
    let search_city = document.querySelector(".input").value;
    let body = document.querySelector("body");
    const weatherIcon = document.querySelector(".weather-icon");
    //    console.log(search_city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${search_city}&appid=c3099d90069032853f2ea7fa2ec331e6`)
        .then((res) => res.json())
        .then((res) => { 
            console.log(res);
            if (res.message == 'Nothing to geocode') {
                swal("Empty Input", "Please enter any city", "error");
            } else if (res.message == 'city not found') {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                swal("Bad Input", "Entered city didn't matched", "warning");
            } else {
                document.querySelector(".city").innerText = res.name;
                document.querySelector(".temp").innerText = res.main.temp + " °c";
                document.querySelector(".humidity").innerText = res.main.humidity + " %";
                document.querySelector(".wind").innerText = res.wind.speed + " Km/h";

                if (res.weather[0].main == "Coulds") {
                    body.style.backgroundImage="url('images/bg-img/clouds.jpg')";
                    weatherIcon.src = "images/clouds.png";
                }
                else if (res.weather[0].main == "Clear") {
                    body.style.backgroundImage="url('images/bg-img/clear.jpg')";
                    weatherIcon.src = "images/clear.png";
                }
                else if (res.weather[0].main == "Rain") {
                    body.style.backgroundImage="url('images/bg-img/rainy.jpg')";
                    weatherIcon.src = "images/rain.png";
                }
                else if (res.weather[0].main == "Drizzel") {
                    body.style.backgroundImage="url('images/bg-img/drizzle.jpg')";
                    weatherIcon.src = "images/drizzel.png";
                }
                else if (res.weather[0].main == "Mist") {
                    body.style.backgroundImage="url('images/bg-img/mist.jpg')";
                    weatherIcon.src = "images/mist.png";
                }
                document.querySelector(".weather").style.display = "block";
            }
        })
})