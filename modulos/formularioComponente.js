import { agregarRegistro } from '../servicios/registroService.js';
import { mostrarRegistros } from './mostrarRegistros.js';

export function formularioComponente() {
  const form = document.createElement('form');
  form.className = 'formulario';

  const inputNombre = document.createElement('input');
  inputNombre.type = 'text';
  inputNombre.placeholder = 'Nombre';
  inputNombre.required = true;

  const inputEdad = document.createElement('input');
  inputEdad.type = 'number';
  inputEdad.placeholder = 'Edad';
  inputEdad.required = true;

  const boton = document.createElement('button');
  boton.textContent = 'Registrar';

  form.appendChild(inputNombre);
  form.appendChild(inputEdad);
  form.appendChild(boton);

  form.onsubmit = function (e) {
    e.preventDefault();

    const nombre = inputNombre.value;
    const edad = inputEdad.value;

    agregarRegistro({ nombre, edad });
    mostrarRegistros();
    form.reset();
  };

  return form;
}
