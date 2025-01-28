<script>
    export let data;
    const { usuario } = data;

    console.log(data);
</script>


<a class="btn btn-primary" href="/usuarios">Regresar</a>

<h1>User: { usuario.id_usuario }</h1>
<p>{usuario.nombre}</p>

