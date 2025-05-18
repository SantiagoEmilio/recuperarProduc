const API = 'http://localhost:3000';

export function agregarRegistro(registro) {
  const datos = {
    nombre: registro.nombre,
    correo: registro.nombre.toLowerCase() + '@ejemplo.com',
    mensaje: 'Edad: ' + registro.edad
  };

  fetch(API + '/registrar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  }).catch(() => {
    console.log('Error al registrar');
  });
}

export function obtenerRegistros() {
  return fetch(API + '/usuarios')
    .then(res => res.json())
    .catch(() => {
      console.log('Error al obtener');
      return [];
    });
}

export function eliminarRegistro(id) {
  fetch(API + '/eliminar/' + id, {
    method: 'DELETE'
  }).catch(() => {
    console.log('Error al eliminar');
  });
}
