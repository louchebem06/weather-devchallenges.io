<script lang="ts">
	import App from "$lib/App.svelte";
  	import type { Weather, Week } from "$lib/weatherApi";

	export let data;

	let weather: Weather = data.weather;
	let week: Week = data.week;
</script>

<svelte:head>
	<title>Weather App</title>
</svelte:head>

<App weather={weather} week={week}/>
