let barraDeCotizacion = document.getElementById("barraDeCotizacion");

fetch("https://api.bluelytics.com.ar/v2/evolution.json")
	.then((res) => res.json())
	.then((data) => {
		console.log(data[0]);
		console.log(data[1]);
		let nuavaInfo = document.createElement("div");
		nuavaInfo.innerHTML = `
        <h6><span>💵</span> Dolar ${data[0].source} 🪙📈📉 Valor de venta ${data[0].value_sell} 💸 Valor de compra ${data[0].value_buy} 💰 ${data[0].date} </h6>
                
        `;
		barraDeCotizacion.appendChild(nuavaInfo);
		let nuavaInfo2 = document.createElement("div");
		nuavaInfo2.innerHTML = `
        
        <h6><span>💵</span> Dolar ${data[1].source} 🪙📈📉 Valor de venta ${data[1].value_sell} 💸 Valor de compra ${data[1].value_buy} 💰 ${data[1].date} </h6>

                
        `;
		barraDeCotizacion.appendChild(nuavaInfo2);
	});

// let barraDeCotizacion = document.getElementById("barraDeCotizacion");

// fetch("https://api.bluelytics.com.ar/v2/evolution.json")
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         for(let infoCotizacion of data){
//             // console.log(infoCotizacion)
//             let nuavaInfo = document.createElement("div")
//             nuavaInfo.innerHTML = `
//             <span class="barraDeCotizacion">💵</span>
//             <h4>${infoCotizacion.date}</h4>
//             <h4>${infoCotizacion.source}</h4>
//             <h4>${infoCotizacion.value_sell}</h4>
//             <h4>${infoCotizacion.value_buy}</h4>
                
//         `    
//         barraDeCotizacion.appendChild(nuavaInfo)
//         }
//     });




// let barraDeCotizacion =document.querySelector("#barraDeCotizacion");

//     const fetchCotizacion_barra = async () => {
//     try {
//     const response = await fetch("https://api.bluelytics.com.ar/v2/evolution.json");
//     const data = await response.json();
//     console.log(data);


//         const infoCotizacion = document.createElement("div");
//         infoCotizacion.innerHTML = `
//         <span class="barraDecotizacion"> 💵 </span>
//             <h4>${data.date}</h4>
//             <h4>${data.source}</h4>
//             <h4>${data.value_sell}</h4>
//             <h4>${data.value_buy}</h4>
    
//         `;
//         barraDeCotizacion.append(infoCotizacion);  
//     } catch (error){
//         console.log(error);
//     }  
// };

// fetchCotizacion_barra();











































