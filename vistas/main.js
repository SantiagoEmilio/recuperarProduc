import { headerComponente } from '../modulos/ headerComponente.js';
import { formularioComponente } from '../modulos/formularioComponente.js';
import { mostrarRegistros } from '../modulos/mostrarRegistros.js';
import { footerComponente } from '../modulos/footerComponente.js';

const app = document.getElementById('app');

// Agrega el encabezado
app.appendChild(headerComponente());

// Agrega el formulario
app.appendChild(formularioComponente());

// Crea donde van los registros
const divRegistros = document.createElement('div');
divRegistros.id = 'registros';
app.appendChild(divRegistros);

// Muestra los registros existentes
mostrarRegistros();

// Agrega el pie de página
app.appendChild(footerComponente());
