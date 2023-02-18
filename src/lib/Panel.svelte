<script lang="ts">
  	import type { Weather, Week } from "$lib/weatherApi";
	import NormalPanel from "$lib/NormalPanel.svelte";
	import SeachPanel from "$lib/SeachPanel.svelte";

	export let celsius: boolean;
	export let weather: Weather;
	export let loader: boolean;
	export let week: Week;

	let search: boolean = false;
</script>

<div class="panel">
	{#if !search}
		<NormalPanel 
			bind:celsius={celsius}
			bind:weather={weather}
			bind:loader={loader}
			bind:week={week}
			bind:search={search}
		/>
	{:else}
		<SeachPanel
			bind:search={search}
			bind:loader={loader}
			bind:weather={weather}
			bind:week={week}
		/>
	{/if}
</div>

<style>
	.panel {
		flex-shrink: 0;
		width: 459px;
		min-height: 100vh;
		background-color: #1E213A;
	}

	@media screen and (max-width: 920px) {
		.panel {
			width: 100%;
		}
	}
</style>
