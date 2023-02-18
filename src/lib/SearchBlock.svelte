<script lang="ts">
	import { type Weather, type Week, getWeather, getWeek } from "$lib/weatherApi";

	export let loader: boolean;
	export let weather: Weather;
	export let week: Week;
	export let search: boolean;

	function getLocation() {
		loader = true;
		navigator.geolocation.getCurrentPosition(
			async (e) => {
				const cord = e.coords;
				const lat = cord.latitude;
				const lon = cord.longitude;
				weather = await getWeather(lat, lon) as Weather;
				week = await getWeek(lat, lon) as Week;
				loader = false;
			},
			(e) => {
				loader = false;
				alert(e.message )
			}
		);
	}
</script>

<div class="searchButton">
	<button on:click={() => {search = true}}>Search for places</button>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span on:click={getLocation} class="material-symbols-outlined">
		my_location
	</span>
</div>

<style>
	.searchButton {
		display: flex;
		justify-content: space-between;
		padding: 42px 46px 0 46px;
	}

	.searchButton button {
		width: 161px;
		height: 40px;
		background: #6E707A;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		color: #E7E7EB;
		border: none;
		cursor: pointer;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
	}

	.searchButton span {
		color: #E7E7EB;
		width: 40px;
		height: 40px;
		border-radius: 40px;
		background-color: rgba(255, 255, 255, 0.2);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		font-size: 22px;
		user-select: none;
	}
</style>
