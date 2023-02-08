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
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total: ${product.cantidad * product.precio}</p>
        `;

        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });

    const total = carrito.reduce((acc , el,) => acc += el.precio * el.cantidad,  0);
    console.log(total);
    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total} $ `;
    modalContainer.append(totalBuying);
};


verCarrito.addEventListener("click", pintarCarrito);


const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    pintarCarrito();
};

const carritoContador = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
};




