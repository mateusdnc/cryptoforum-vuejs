<template>
	<div class="container text-center my-4">
		<div class="row justify-content-center">
			<div class="col- my-4">
				<h3 class="font-weight-bold">
					Elon Musk irá travar disputa judicial de US$ 56 bi com baterista de
					heavy metal
				</h3>
			</div>
			<div class="col-5">
				<img
					style="height: 300px; border-radius: 30px"
					src="https://i.redd.it/gdkd9fwjore51.jpg"
				/>
			</div>
			<div class="col-4">
				<p style="font-size: 18px">
					O presidente-executivo da Tesla (TSLA), Elon Musk, deverá enfrentar no
					tribunal na próxima semana um inimigo improvável: um baterista de
					thrash metal que espera retirar de Musk um pagamento de 56 bilhões de
					dólares. O julgamento colocará a pessoa mais rica do mundo contra um
					dos menores investidores da montadora de carros elétricos, Richard
					Tornetta, que detinha apenas nove ações quando processou em 2018.
				</p>
			</div>
		</div>

		<short_news />
	</div>
</template>
<script>
import short_news from "../components/short_news.vue";

export default {
	components: {
		short_news: short_news,
	},
};
</script>
