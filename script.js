document.getElementById("buscar").addEventListener("keyup", function() {
  let filtro = this.value.toLowerCase();
  let productos = document.querySelectorAll("#productos .producto");

  productos.forEach(function(producto) {
    let texto = producto.textContent.toLowerCase();
    if (texto.includes(filtro)) {
      producto.style.display = "";
    } else {
      producto.style.display = "none";
    }
  });
});
