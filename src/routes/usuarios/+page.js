export async function load({params}){

    const usuarios = await fetch(`http://localhost:8000/api/usuarios`).then(r => r.json());
    return { usuarios };
}