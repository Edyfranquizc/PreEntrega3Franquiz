let barraDeCotizacion =document.querySelectorAll("#barraDeCotizacion");

const fetchCotizacion_barra = async () => {
    try {
        const response = await fetch(" https://api.getgeoapi.com/v2/currency/convert?api_key=21516441083c73c424fe516bf8a9ee8fd252d6af");
    const data = await response.json();
    console.log(data);

    const infoCotizacion = document.createElement("div");
    infoCotizacion.innerHTML = `
    <h4>${data.base_currency}}</h4>
    <h4>${data.rates}</h4>
    <h4>${data.status}</h4>
    <h4>${data.update_date}</h4>
    
    `;
    barraDeCotizacion.append(infoCotizacion);
    } catch (error){
        console.log(error);
    }
    
};

fetchCotizacion_barra();









