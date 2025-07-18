let seccionProducto = document.getElementById('seccion_productos');

//creo un contenedor individual para cada producto
let contenedorProductos = document.createElement('div');

//agrego una clase/estilo CSS al contenedor de los productos
contenedorProductos.classList.add('contenedor-producto');

async function cargarJSON() {
  try {
    //a response le asigno lo que me devuelve la consulta a la API que pide todos los productos
    const response = await fetch('js/productos.json');
    //a data le asigno todos los productos en formato .json
    const data = await response.json();
    //Iteramos producto por producto y los vamos agregando al contenedor de productos.
    //Guardamos los datos de cada producto en un div con la clase card
    data.forEach(producto => {

      let precio = producto.price;
      let nombre = producto.name.replace("'", "`");;

      let objToPass = {
        "price" : precio
      }
      let cadena = JSON.stringify(objToPass);
      contenedorProductos.innerHTML += `
      <div class="card">
          <div>
            <img id="imagen" class="imagen" src="${producto.image}"></img>
          </div>
          <div id="precio" name="precio">${producto.price} $</div>
          <br>
          <div id="nombre" name="nombre" class="nombre">${producto.name}</div>
          <br>
          <div id="desc" name="desc" class="desc">${producto.description}</div>
          <div>
            <button onclick="addWishList(${cadena})" class="button">Agregar 🛒</button>
          </div>
      </div>
    `;
      seccionProducto.append(contenedorProductos);
    });
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
}

document.addEventListener('DOMContentLoaded', cargarJSON);

function addWishList(productoId) {
  try {
    let prodJSON = JSON.parse(productoId);
    console.log(prodJSON);
    //Armamos el objeto a guardar en LocalStorage

    //Guardamos el objeto en LocalStorage

    //Recargamos la página
  } catch (error) {
    console.error("Error al procesar producto : ", error);
  }
  
}
