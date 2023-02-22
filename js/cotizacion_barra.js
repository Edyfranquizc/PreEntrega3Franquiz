let barraDeCotizacion =document.querySelector("#barraDeCotizacion");

const fetchCotizacion_barra = async () => {
    try {
        const response = await fetch("https://api.bluelytics.com.ar/v2/evolution.json");
    const data = await response.json();
    console.log(data);

    const infoCotizacion = document.createElement("div");
    infoCotizacion.innerHTML = `
    <h4>${data.date}</h4>
    <h4>${data.source}</h4>
    <h4>${data.value_sell}</h4>
    <h4>${data.value_buy}</h4>
    `;

    barraDeCotizacion.append(infoCotizacion);
    } catch (error){
        console.log(error);
    }
    
};

fetchCotizacion_barra();











/* <h4>${data.rates.AED.rate_for_amount}</h4>
Esa es la manera de acceder, de rate podés traer los otros 3 valores adicionales como AED (o el que elijas) AED.rate o AED.currency_name */




