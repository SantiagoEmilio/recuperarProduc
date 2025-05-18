import { headerComponente } from '../modulos/ headerComponente.js';
import { formularioComponente } from '../modulos/formularioComponente.js';
import { mostrarRegistros } from '../modulos/mostrarRegistros.js';
import { footerComponente } from '../modulos/footerComponente.js';

const app = document.getElementById('app');

app.appendChild(headerComponente());

app.appendChild(formularioComponente());

const divRegistros = document.createElement('div');
divRegistros.id = 'registros';
app.appendChild(divRegistros);

mostrarRegistros();

app.appendChild(footerComponente());
