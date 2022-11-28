<template>
	<!-- Email -->
	<h3 class="text-center my-2">Crie uma conta</h3>
	<form class="col-sm-5 mx-auto">
		<div class="form-group">
			<label for="exampleInputEmail1">Email</label>
			<input
				type="email"
				class="form-control"
				id="exampleInputEmail1"
				aria-describedby="emailHelp"
				placeholder="Digite o email"
			/>
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">Senha</label>
			<input
				type="password"
				class="form-control"
				id="exampleInputPassword1"
				placeholder="Digite a senha"
			/>
		</div>
		<div class="form-group">
			<label for="exampleInputPassword1">Confirme a senha</label>
			<input
				type="password"
				class="form-control"
				id="exampleInputPassword1"
				placeholder="Confirme a senha"
			/>
		</div>
		<p>
			Ja possui uma conta?
			<router-link to="/login" tag="a">Faça Login</router-link>
		</p>

		<button type="submit" class="btn btn-primary my-3 mx-auto d-block">
			Registrar
		</button>
	</form>
</template>
