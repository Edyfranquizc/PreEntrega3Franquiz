let barraDeCotizacion =document.querySelector("#barraDeCotizacion");

const fetchCotizacion_barra = async () => {
    try {
        const response = await fetch(" https://api.getgeoapi.com/v2/currency/convert?api_key=7440e33dd31b89ad749dd9bbdc1e79e5877d00a0");
    const data = await response.json();
    console.log(data);

    const infoCotizacion = document.createElement("div");
    infoCotizacion.innerHTML = `
    <h4>${data.base_currency_code}</h4>
    <h4>${data.base_currency_name}</h4>
    <h4>${data.base_rates}</h4>
    <h4>${data.update_date}</h4>
    
    `;
    barraDeCotizacion.append(infoCotizacion);
    } catch (error){
        console.log(error);
    }
    
};

fetchCotizacion_barra();








