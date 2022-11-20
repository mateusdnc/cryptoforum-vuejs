<template>
	<navbar />
	<router-view />
</template>
<script>
import navbar from "../src/components/navbar.vue";

export default {
	components: {
		navbar: navbar,
	},
};
</script>
