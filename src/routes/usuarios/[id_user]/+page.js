export async function load({params}){
    const usuario = await 
    fetch(`http://localhost:8000/api/usuarios/${params.id_user}`).then(r => r.json());

    return { usuario };
}