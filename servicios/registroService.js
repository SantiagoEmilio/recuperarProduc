const API_URL = 'http://localhost:3000';

export async function agregarRegistro(registro) {
  const datos = {
    nombre: registro.nombre,
    correo: registro.nombre.toLowerCase() + '@ejemplo.com',
    mensaje: 'Edad: ' + registro.edad
  };

  try {
    await fetch(API_URL + '/registrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
  } catch (e) {
    console.log('Error al registrar');
  }
}

export async function obtenerRegistros() {
  try {
    let res = await fetch(API_URL + '/usuarios');
    return await res.json();
  } catch (e) {
    console.log('Error al obtener');
    return [];
  }
}

export async function eliminarRegistro(id) {
  try {
    await fetch(API_URL + '/eliminar/' + id, {
      method: 'DELETE'
    });
  } catch (e) {
    console.log('Error al eliminar');
  }
}
