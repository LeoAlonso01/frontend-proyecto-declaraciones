<script>
	export let data;

	const { usuarios } = data;

	console.log(data);
</script>

<div class="container">
	<h1>Usuarios</h1>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Navbar</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/usuarios">Usuarios</a>
				</li>

				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle"
						href="/nombnramientos"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Dropdown
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="/declaraciones">Declaraciones</a></li>
						<li><a class="dropdown-item" href="/usuarios">Usuarios</a></li>
						<li><hr class="dropdown-divider" /></li>
						<li><a class="dropdown-item" href="/nombramientos">Nombramientos</a></li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" aria-disabled="true">Disabled</a>
				</li>
			</ul>
			<form class="d-flex" role="search">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
				<button class="btn btn-outline-success" type="submit">Search</button>
			</form>
			<li class="nav-item">
				<a class="btn btn-primary" href="/crear_usuario">Nuevo</a>
			</li>
		</div>
	</div>
</nav>
</div>

<div class="container">
	<table class="table">
	<thead>
		<tr>
			<th>Id</th>
			<th>Nombre</th>
			<th>Correo</th>
			<th>Rol</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each usuarios as usuario}
			<tr>
				<td>{usuario.id_usuario}</td>
				<td>{usuario.nombre}</td>
				<td>{usuario.correo}</td>
				<td>{usuario.rol}</td>
				<td><a href="/usuarios/{usuario.id_usuario}">Ver</a></td>
			</tr>
		{/each}
	</tbody>
</table>
</div>

