
//movimiento al cerrar y abrir el menu oculto
const MenuaBiertoBoton = document.querySelector("#menu-abierto-boton");
const MenuCerradoBoton = document.querySelector("#menu-cerrado-boton");

MenuaBiertoBoton.addEventListener("click", () => {

    document.body.classList.toggle("movimiento-oculto-menu");
});

MenuCerradoBoton.addEventListener("click", () => MenuaBiertoBoton.click
());