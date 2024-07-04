
document.getElementById("su").addEventListener("click", () => {
  let country = document.getElementById("name").value
  fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.length==231) {
        swal("Empty Input", "Please enter any country", "error");
      } else if (data.message == "Country not found or doesn't have any cases") {
        swal("Bad Input", "Entered country didn't matched", "warning");
      } else {
        document.getElementById("country").innerHTML = data.country;
        document.getElementById("active").innerHTML = data.active.toLocaleString();
        document.getElementById("cases").innerHTML = data.cases.toLocaleString();
        document.getElementById("critical").innerHTML = data.critical.toLocaleString();
        document.getElementById("death").innerHTML = data.deaths.toLocaleString();
        document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
        document.getElementById("tests").innerHTML = data.tests.toLocaleString();
        document.getElementById("flag").src = data.countryInfo.flag;
      }
    });
})

function view()
{
  fetch(`https://disease.sh/v3/covid-19/countries/india`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("country").innerHTML = data.country;
    document.getElementById("active").innerHTML = data.active.toLocaleString();
    document.getElementById("cases").innerHTML = data.cases.toLocaleString();
    document.getElementById("critical").innerHTML = data.critical.toLocaleString();
    document.getElementById("death").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
    document.getElementById("tests").innerHTML = data.tests.toLocaleString();
    document.getElementById("flag").src = data.countryInfo.flag;
  })
}

view()