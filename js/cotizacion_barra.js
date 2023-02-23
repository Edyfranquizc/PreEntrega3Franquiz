let barraDeCotizacion = document.getElementById("barraDeCotizacion");

fetch("https://api.bluelytics.com.ar/v2/evolution.json")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data)
        for(let infoCotizacion of data){
            console.log(infoCotizacion)
            let nuavaInfo = document.createElement("div")
            nuavaInfo.innerHtml = `
            <span class="barraDeCotizacion">💵</span>
            <h4>${infoCotizacion.date}</h4>
            <h4>${infoCotizacion.source}</h4>
            <h4>${infoCotizacion.value_sell}</h4>
            <h4>${infoCotizacion.value_buy}</h4>
                
        `    
        barraDeCotizacion.appendChild(nuavaInfo)
        }
    });










































