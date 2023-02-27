    const pintarCarrito = () => {
    modalContainer.style.display= "flex";
    modalContainer.innerHTML =""
    const modalHeader = document.createElement("div");

    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <img src="assets/favicon (3)logo.svg" alt="logo.favicon">
    
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {modalContainer.style.display = "none" });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <span class="restar"> - </span>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio}</p>
        <span class="delete-product"> ❌ </span>
        <button class="finishButton">Finalizar Compra</button>
        `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () => {
            if(product.cantidad !== 1) {
            product.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        })

        let sumar = carritoContent.querySelector(".sumar")

        sumar.addEventListener("click", () => {
            product.cantidad++;
            saveLocal();
            pintarCarrito();
        })

        let eliminar = carritoContent.querySelector(".delete-product");
        eliminar.addEventListener("click", () =>{
            eliminarProducto(product.id);
        })

        let cerrar = carritoContent.querySelector(".finishButton");
        cerrar.addEventListener("click", () =>{
        finalizarCompra(product.id);
        })
    });


    const total = carrito.reduce((acc , el,) => acc += el.precio * el.cantidad,  0);
    console.log(total);
    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a Pagar: ${total} $ `;
    modalContainer.append(totalBuying);
};



verCarrito.addEventListener("click", pintarCarrito);

const finalizarCompra = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    // sweet botón aviso de finalizar compra
    Swal.fire({
        title: 'Está seguro de finalizar su compra',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, si quiero',
        cancelButtonText: 'No, no quiero',
        color:'#ffffff',
        background:'#003B5A',
        confirmButtonColor: '#00A0F3',
        cancelButtonColor: 'rgb(191, 68, 68)',
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire({
                title: 'Compra realizada',
                icon: 'success',
                confirmButtonColor: ' #5f72cf',
                text: 'Muchas gracias por su compra. Vuelva pronto!',
                color:'#ffffff',
                background:'#003B5A',
                })
        }else{
            Swal.fire({
                title: 'Compra no realizada',
                icon: 'warning',
                text: `La compra no ha sido realizada! Atención sus productos siguen en el carrito`,
                confirmButtonColor: ' #5f72cf',
                color:'#ffffff',
                background:'#003B5A',
                timer:4000
            })
        }
    }

    )

};

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    carritoContador();
    saveLocal();
    pintarCarrito();
};

const carritoContador = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength =carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoContador();





