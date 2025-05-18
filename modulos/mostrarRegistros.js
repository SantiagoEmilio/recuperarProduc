import { obtenerRegistros, eliminarRegistro } from '../servicios/registroService.js';

export async function mostrarRegistros() {
  const contenedor = document.getElementById('registros');
  contenedor.innerHTML = '';

  let registros = await obtenerRegistros();

  for (let i = 0; i < registros.length; i++) {
    let registro = registros[i];

    let div = document.createElement('div');
    div.className = 'registro';

    let texto = document.createTextNode(`${registro.nombre} - ${registro.mensaje}`);
    div.appendChild(texto);

    let boton = document.createElement('button');
    boton.textContent = 'Eliminar';
    boton.onclick = async function () {
      await eliminarRegistro(registro.id);
      mostrarRegistros();
    };

    div.appendChild(boton);
    contenedor.appendChild(div);
  }
}
