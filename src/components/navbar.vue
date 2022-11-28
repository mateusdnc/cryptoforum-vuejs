<template>
	<nav class="navbar navbar-expand-sm bg-dark navbar-dark px-5">
		<div class="mx-3 d-flex align-items-center">
			<img
				src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=023"
				style="width: 30px"
				class="mx-2"
			/>
			<router-link to="/" class="navbar-brand" tag="a" href="#"
				>CryptoForum</router-link
			>
		</div>

		<ul class="navbar-nav ms-auto">
			<li class="nav-item">
				<!-- <a class="nav-link" href="about">Sobre</a> -->
				<router-link to="about" tag="a" class="nav-link">Sobre</router-link>
			</li>
			<li class="nav-item">
				<router-link to="news" tag="a" class="nav-link">Noticias</router-link>
			</li>
			<li class="nav-item">
				<router-link to="forum" tag="a" class="nav-link">Forum</router-link>
			</li>
			<li class="nav-item">
				<router-link to="login" tag="a" class="nav-link">Login</router-link>
			</li>
		</ul>
	</nav>
</template>
