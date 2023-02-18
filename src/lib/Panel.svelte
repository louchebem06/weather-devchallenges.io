<script lang="ts">
  	import type { Weather, Week } from "$lib/weatherApi";
	import Hero from "$lib/Hero.svelte";
	import Temp from "$lib/Temp.svelte";
  	import SearchBlock from "$lib/SearchBlock.svelte";
	import DateBlock from "$lib/DateBlock.svelte";

	export let celsius: boolean;
	export let weather: Weather;
	export let loader: boolean;
	export let week: Week;

	let search: boolean = false;
</script>

<!-- TODO create div in composante -->
<!-- TODO create 2 composante panel content and panel search -->
<div class="panel">
	{#if !search}
		<SearchBlock bind:loader={loader} bind:weather={weather} bind:week={week} bind:search={search}/>
		<Hero bind:weather={weather} />
		<Temp bind:weather={weather} bind:celsius={celsius}/>
		<h3>{weather.weather[0].description}</h3>
		<DateBlock bind:weather={weather}/>

		<div class="location">
			<span class="material-symbols-outlined">
				location_on
			</span>				
			<p>{weather.name}</p>
		</div>
	{:else}
		<button on:click={() => {search = false}}>
			<span class="material-symbols-outlined">
				close
			</span>
		</button>
		<span class="material-symbols-outlined">
			search
		</span>
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

	.location {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.panel h3 {
		text-align: center;
		color: #A09FB1;
		padding: 50px 0;
		text-transform: capitalize;
	}

	.location {
		gap: 9px;
		color: #88869D;
	}
</style>
