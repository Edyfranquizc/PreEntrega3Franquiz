let barraDeCotizacion =document.getElementById("barraDeCotizacion");

fetch("https://api.bluelytics.com.ar/v2/evolution.json")
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
        for (let infoCotizacion of data){
            console.log(infoCotizacion);
            let nuavaInfo = document.createElement("div")
            nuavaInfo.innerHtml = `
            <h4 class=>${data.last_update}</h4>
            <h4>${infoCotizacion.source}</h4>
            <h4>${infoCotizacion.value_sell}</h4>
            <h4>${infoCotizacion.value_buy}</h4>
                
            `
        }
    });

















// let barraDeCotizacion =document.querySelector("#barraDeCotizacion");

// const fetchCotizacion_barra = async () => {
//     try {
//     const response = await fetch("https://api.bluelytics.com.ar/v2/evolution.json");
//     const data = await response.json();
//     console.log(data);

//     cotizacion.forEach((info) => {
//         const infoCotizacion = document.createElement("div");
//         infoCotizacion.innerHTML = `
//             <h4>${info.date}</h4>
//             <h4>${info.source}</h4>
//             <h4>${info.value_sell}</h4>
//             <h4>${info.value_buy}</h4>
    
//         `;  
//     });
    

//     barraDeCotizacion.append(infoCotizacion);
//     } catch (error){
//         console.log(error);
//     }
    
// };

// fetchCotizacion_barra();











/* <h4>${data.rates.AED.rate_for_amount}</h4>
Esa es la manera de acceder, de rate podés traer los otros 3 valores adicionales como AED (o el que elijas) AED.rate o AED.currency_name */




