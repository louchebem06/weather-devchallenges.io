<script lang="ts">
	import { type Weather, kTof, kToc } from "$lib/weatherApi";

	export let celsius: boolean;
	export let weather: Weather;
</script>

<div class="temp">
	<h1>
		{#if celsius}
		{kToc(weather.main.temp)}
		{:else}
		{kTof(weather.main.temp)}
		{/if}
	</h1>
	<h2>
		{#if celsius}
		℃
		{:else}
		℉
		{/if}
	</h2>
</div>

<style>
	.temp {
		padding-top: 30px;
		font-style: normal;
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.temp h1 {
		color: #E7E7EB;
		font-size: 144px;
		line-height: 169px;
	}

	.temp h2 {
		color: #A09FB1;
		font-size: 48px;
		line-height: 56.35px;
		margin-top: 65px;
	}
</style>
