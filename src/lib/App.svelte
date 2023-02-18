<script lang="ts">
	import Panel from "$lib/Panel.svelte";
	import Content from "$lib/Content.svelte";
	import type { Weather } from "$lib/weatherApi";
	import Loader from "./Loader.svelte";
	import type { Week } from "./weatherApi";

	export let weather: Weather;
	export let week: Week;

	let celsius: boolean = true;
	let loader: boolean = false;
</script>

<Loader bind:loader={loader}/>

<div class="app">
	<Panel bind:loader={loader} bind:celsius={celsius} bind:weather={weather} bind:week={week}/>
	<Content bind:celsius={celsius} bind:weather={weather} bind:weekInterface={week}/>
</div>

<style>
	.app {
		display: flex;
		align-items: stretch;
	}

	@media screen and (max-width: 920px) {
		.app {
			flex-direction: column;
		}
	}
</style>
