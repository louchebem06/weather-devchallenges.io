<script lang="ts">
	import { getWeather, getWeek, searchCity, type Location, type Weather, type Week } from "$lib/weatherApi";
  import { onMount } from "svelte";

	export let search: boolean;
	export let loader: boolean;
	export let weather: Weather;
	export let week: Week;

	let inputSearch: string;
	let searchInput: any;
	let locations: Location[] = []

	onMount(() => searchInput.focus())

	async function searchFunction() {
		if (inputSearch === undefined || inputSearch === "")
			return ;
		loader = true;
		locations = await searchCity(inputSearch) as Location[];
		inputSearch = "";
		loader = false;
	}

	function detectEnter(e: any) {
		if (e.key === 'Enter')
			searchFunction();
	}

	async function getSearch(lat: number, lon: number): Promise<void> {
		loader = true;
		weather = await getWeather(lat, lon) as Weather;
		week = await getWeek(lat, lon) as Week;
		search = false;
		loader = false;
	}
</script>

<button on:click={() => {search = false}}>
	<span class="material-symbols-outlined">
		close
	</span>
</button>
<div class="search">
	<div class="containerSeachInput">
		<span class="material-symbols-outlined">
			search
		</span>
		<input bind:this={searchInput} on:keydown={detectEnter} bind:value={inputSearch} type="text" placeholder="search location">
	</div>
	<button on:click={searchFunction}>
		<div class="btn">
			Search
		</div>
	</button>
</div>

<div class="locations">
	{#each locations as location}
		<div class="location">
			<button
				on:click={getSearch(location.lat, location.lon)}
				class="btnLocation"
			>
				<p>{location.name},</p>
				<p>{location.state},</p>
				<p>{location.country}</p>
			</button>
		</div>
	{/each}
</div>

<style>
	button span {
		font-size: 25px;
	}

	button {
		border: none;
		border: none;
		background-color: transparent;
		color: #E7E7EB;
		cursor: pointer;
		width: 100%;
		text-align: right;
		margin-top: 20px;
		margin-bottom: 46px;
		padding-right: 54px;
	}

	.containerSeachInput {
		width: 268px;
		height: 48px;
		border: 1px solid #E7E7EB;
		display: flex;
		align-items: center;
	}

	.containerSeachInput span {
		color: #616475;
		font-size: 20px;
		margin: 15px;
	}

	.containerSeachInput input {
		width: 100%;
		color: #616475;
		background-color: transparent;
		border: none;
		outline: none;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
	}

	.search {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 46px;
		gap: 10px;
	}

	.search button {
		width: 86px;
		margin: 0;
	}

	.search button .btn{
		width: 86px;
		height: 48px;
		background: #3C47E9;
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 19px;
		color: #E7E7EB;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.locations {
		margin: 58px 46px;
	}

	.btnLocation {
		text-align: left;
		display: flex;
		gap: 10px;
		margin: 0;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
		color: #E7E7EB;
		position: relative;
		height: 64px;
		display: flex;
		align-items: center;
		margin-bottom: 5px;
		padding: 0 12px;
	}

	.btnLocation:hover {
		border: 1px solid #616475;
	}

	.btnLocation:hover::after {
		content: ">";
		position: absolute;
		top: 50%;
		right: 12px;
		transform: translateY(-50%);
		color: #616475;
	}
</style>
