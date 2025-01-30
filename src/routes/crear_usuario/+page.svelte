<script>
    let nombre = '';
    let correo = '';  // Cambiado de 'email' a 'correo'
    let rol = '';
    let is_active = true;

    const crearUsuario = async () => {
        // Crear el objeto con los datos del usuario
        const usuario = {
            nombre,
            correo,  // Usar 'correo' en lugar de 'email'
            rol,
            fecha_creacion: new Date().toISOString(),  // Agregar la fecha de creación
            is_active
        };

        // Hacer la petición POST
        const res = await fetch('http://localhost:8000/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)  // Enviar el objeto usuario
        });

        if (res.ok) {
            console.log('Usuario creado');
            // Limpiar el formulario después de crear el usuario
            nombre = '';
            correo = '';
            rol = '';
            is_active = true;
        } else {
            console.error('Error al crear el usuario');
        }
    };
</script>

<main>
    <h1>Crear Usuario</h1>
    <form on:submit|preventDefault={crearUsuario}>
        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" bind:value={nombre} required />
        </div>
        <div>
            <label for="correo">Correo:</label>
            <input type="email" id="correo" bind:value={correo} required />
        </div>
        <div>
            <label for="rol">Rol:</label>
            <input type="text" id="rol" bind:value={rol} required />
        </div>
        <div>
            <label for="is_active">Activo:</label>
            <input type="checkbox" id="is_active" bind:checked={is_active} />
        </div>
        <button class="btn btn-success" type="submit">Agregar Usuario</button>
    </form>
</main>

<style>
    main {
        padding: 1rem;
    }
    form {
        margin-bottom: 2rem;
    }
    div {
        margin-bottom: 1rem;
    }
    label {
        display: block;
        margin-bottom: 0.5rem;
    }
    input[type="text"],
    input[type="email"] {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
    }
    button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
</style>