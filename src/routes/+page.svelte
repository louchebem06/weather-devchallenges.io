<script lang="ts">
	import App from "$lib/App.svelte";
  	import type { Weather } from "$lib/weatherApi";

	export let data: Weather;
</script>

<svelte:head>
	<title>Weather App</title>
</svelte:head>

<App weather={data}/>
