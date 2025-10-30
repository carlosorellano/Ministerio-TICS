 
    const form = document.getElementById('formDatos');
    const lista = document.getElementById('listaPersonas');
    const btnGuardar = document.getElementById('btnGuardar');

    let personas = [];
    let editando = false;
    let indiceEditando = null;

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const nombre = document.getElementById('nombre').value.trim();
      const edad = document.getElementById('edad').value.trim();
      const correo = document.getElementById('correo').value.trim();

      if (editando) {
        // Editar persona existente
        personas[indiceEditando] = { nombre, edad, correo };
        editando = false;
        indiceEditando = null;
        btnGuardar.textContent = 'Guardar';
      } else {
        // Agregar nueva persona
        personas.push({ nombre, edad, correo });
      }

      form.reset();
      mostrarLista();
    });

    // Mostrar la lista de personas
    function mostrarLista() {
      lista.innerHTML = '';

      personas.forEach((persona, index) => {
        const item = document.createElement('li');
        item.className = 'list-group-item d-flex justify-content-between align-items-center';

        item.innerHTML = `
          <div>
            <strong>${persona.nombre}</strong> (${persona.edad} años)<br>
            <small>${persona.correo}</small>
          </div>
          <div>
            <button class="btn btn-sm btn-warning me-2 editar">Editar</button>
            <button class="btn btn-sm btn-danger eliminar">Eliminar</button>
          </div>
        `;

        // Botón eliminar
        item.querySelector('.eliminar').addEventListener('click', () => {
          personas.splice(index, 1);
          mostrarLista();
        });

        // Botón editar
        item.querySelector('.editar').addEventListener('click', () => {
          document.getElementById('nombre').value = persona.nombre;
          document.getElementById('edad').value = persona.edad;
          document.getElementById('correo').value = persona.correo;

          editando = true;
          indiceEditando = index;
          btnGuardar.textContent = 'Actualizar';
        });

        lista.appendChild(item);
      });
    }
