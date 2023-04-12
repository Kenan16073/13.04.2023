let inp = document.querySelector("input");
let form = document.querySelector("form");


form.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            `${inp.value}` +
            "&units=metric&appid=" +
            "6c68064eecd8e36be4def281d14245ae"+
            "&lang=az");
        let value = await response.json();
        let res = await result(value);

    } catch (error) {
        console.log("error");
    }
});



 function result(value){    
    let body = document.querySelector('body');


    body.lastChild.remove()


    let tbl = `
        <tr>
            <th>Temp</th>
            <th>Weather</th>
            <th>Wind Speed</th>
            <th>Location</th>
        </tr>
        <tr>
            <td>${value.main.temp}°C</td>
            <td>${value.weather[0].main}</td>
            <td>${value.wind.speed}</td>
            <td>${value.name}</td>
        </tr>`;

        let createTbl = document.createElement("table");
        createTbl.innerHTML = tbl;
        body.append(createTbl);
        
}