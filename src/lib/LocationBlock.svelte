<script lang="ts">
  	import type { Weather } from "$lib/weatherApi";

	export let weather: Weather;
</script>

<div class="location">
	<span class="material-symbols-outlined">
		location_on
	</span>				
	<p>{weather.name}</p>
</div>

<style>
	.location {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.location {
		gap: 9px;
		color: #88869D;
	}
</style>
