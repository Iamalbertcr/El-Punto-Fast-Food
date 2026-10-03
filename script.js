const botones = document.querySelectorAll('.cat-btn');
const productos = document.querySelectorAll('.item');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    botones.forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');

    const seleccion = boton.dataset.cat;

    productos.forEach(producto => {
      producto.style.display = seleccion === 'todos' || producto.dataset.cat === seleccion
        ? 'flex'
        : 'none';
    });
  });
});
