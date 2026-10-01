const botones = document.querySelectorAll('.cat-btn');
const categorias = document.querySelectorAll('.categoria');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    botones.forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');

    const seleccion = boton.dataset.cat;

    categorias.forEach(cat => {
      if (seleccion === 'todos' || cat.dataset.cat === seleccion) {
        cat.style.display = 'block';
      } else {
        cat.style.display = 'none';
      }
    });
  });
});
