Swal.fire({
    icon: 'susses',
    title: 'Bienvenidos',
    text: 'Happy Jouney!',
    footer: 'Hoy es un buen día para planificar tú viaje',
    color:'#ffffff',
    background:'#6eabd0e0',
    confirmButtonColor:'#5f72cf', 
    })

// Tienda- carrito 
const shopContend = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
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

    const repeat =carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
    if (repeat) {
        carrito.map((prod) => {
            if (prod.id === product.id){
            prod.cantidad ++;
            }
        })
    } else{
        carrito.push({
            id : product.id,
            img : product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
            });

        console.log(carrito);
        console.log(carrito.length);
        carritoContador();
        saveLocal();
        // seweet
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:' Su compara ha sido agregada al carrito',
            // text: 'La Cámara ha sido agregada',
            color:'#ffffff',
            background:'#6eabd0e0',
            position:'top-end',
            showConfirmButton: false,
            timer: 2000,
        })
        }  
    });
});


//set item
const saveLocal =() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item

JSON.parse(localStorage.getItem("carrito"));















