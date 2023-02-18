<script lang="ts">
	import type { Weather, Week } from "$lib/weatherApi";
	import Hero from "$lib/Hero.svelte";
	import Temp from "$lib/Temp.svelte";
  	import SearchBlock from "$lib/SearchBlock.svelte";
	import DateBlock from "$lib/DateBlock.svelte";
	import LocationBlock from "$lib/LocationBlock.svelte";

	export let celsius: boolean;
	export let weather: Weather;
	export let loader: boolean;
	export let week: Week;
	export let search: boolean;
</script>

<SearchBlock
	bind:loader={loader}
	bind:weather={weather}
	bind:week={week}
	bind:search={search}
/>
<Hero bind:weather={weather} />
<Temp bind:weather={weather} bind:celsius={celsius}/>
<h3>{weather.weather[0].description}</h3>
<DateBlock bind:weather={weather}/>
<LocationBlock bind:weather={weather} />

<style>
	h3 {
		text-align: center;
		color: #A09FB1;
		padding: 50px 0;
		text-transform: capitalize;
	}
</style>
