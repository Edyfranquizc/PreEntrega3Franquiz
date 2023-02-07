// alert ('BIENVENIDO!!');
// const seguro = confirm ('Deseas que te salude por tu nombre');
// if (seguro) {
//     const nombre = prompt ('Cuál es tu nombre?');
//     alert (`Hola ${nombre}!`);
// }

// seweet
Swal.fire({
    icon: 'susses',
    title: 'Bienvenidos',
    text: 'Happy Jouney!',
    footer: 'Hoy es un buen día para planificar tú viaje',
    confirmButtonColor:'#327CB2', 
})


// En progreso 
// document.addEventListener("keyup", e=>{

//     if (e.target.matches("#buscador")){

//         if (e.key ==="Escape")e.target.value = ""

//         document.querySelectorAll(".description").forEach(lista =>{

//             lista.textContent.toLowerCase().includes(e.target.value.toLowerCase())
//             ?lista.classList.remove("filtro")
//             :lista.classList.add("filtro")
//         })
//     }

// })

// //Funcion para mostrar el buscador
// function mostrar_buscador(){

//     bars_search.style.top = "80px";
//     cover_ctn_search.style.display = "block";
//     inputSearch.focus();

// }

// Funcion para convertir las divisas
function convertir() {
    let valor = parseFloat(document.getElementById("cantidad").value);
    document.getElementById("valor").innerHTML="<b>"+valor+"</b>";
    de=document.getElementById("de").value;
    a=document.getElementById("a").value;
    let dolar=178.36;
    let euro=188.30;
    resultado=0;
    // peso a Dolar
    if(de==1&&a==2){
        resultado=valor/dolar;
    }
    // Peso a Euro
    else if(de==1&&a==3){
        resultado=valor/euro;
    }
     // Dolar a peso
    else if(de==2&&a==1){
        resultado=valor*dolar;
    }
    // Dolar a Euro
    else if(de==2&&a==3){
        resultado=valor*(dolar/euro);
    }
    // Euro a peso
    else if(de==3&&a==1){
        resultado=valor*euro;
    }
    // Euro a dolar
    else if(de==3&&a==2){
        resultado=valor*(euro/dolar);
    }
    // peso apeso, dolar a dolar y euro a euro
    else{
        resultado=valor;
    }

    document.getElementById("resultado").innerHTML="Resultado : $ "+resultado.toFixed(2);
}

// Formulario de viaje

let vacationCalc = document.getElementById('vacationCalc')

vacationCalc.addEventListener('submit', calcExpenses)

    function getValues() {
    let destiny = document.getElementById('destiny').value,
        budget = document.getElementById('budget').value,
        transport = document.getElementById('transport').value,
        acomodation = document.getElementById('acomodation').value,
        food = document.getElementById('food').value

    return { destiny, budget, acomodation, transport, food }    
    }

    function calcExpenses(e) {
    e.preventDefault();
    
    const  { destiny, budget, acomodation, transport,  food } = getValues()

    let expenses = parseInt(acomodation) + parseInt(transport) + parseInt(food)
    let balance = budget - expenses

    UI(destiny, budget, balance)
    }

    function UI(destiny, budget, balance) {
    let result = document.getElementById('result')
    let dataPrint = document.createElement('div')
    
    dataPrint.innerHTML += `
        <div class="container-data row">
        <div class="col s4">
            <h6>${destiny}</h6>
        </div>
        <div class="col s4">
            <h6>${budget}</h6>
        </div>
        <div class="col s4">
            <h6 id="balance"><strong>${balance}</strong></h6> 
        </div>
        </div>
    `
    result.appendChild(dataPrint) 

    reset()
    }

    function reset() {
    document.getElementById('vacationCalc').reset()
    }

    function balanceColours() {

    const { balance} = getValues()


        if(balance < 0) {
        document.getElementById('balance').classList.add('red')
        }
        else if(balance > 0) {
        document.getElementById('balance').classList.add('green')
        }657
    }





// carrito 
const shopContend = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");


let carrito =[];
productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card_tienda"
    content.innerHTML = `
    <img class="cover" src=${product.img}>
    <h3 class"description">${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

    shopContend.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
        id : product.id,
        img : product.img,
        nombre: product.nombre,
        precio: product.precio,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
    const modalHeader = document.createElement("div");

    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title"> Carrito. </h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = createElement("div");
        carrito.className = "modal-content"
        carrito.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        `;

        modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalBuying = createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: ${total} $
    modalContainer.append(totalBuying)
    `;

});




