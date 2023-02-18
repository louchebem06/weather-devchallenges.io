<script lang="ts">
  	import { type Weather, idToImg, kTof, kToc, getWeather } from "./weatherApi";

	export let celsius: boolean;
	export let weather: Weather;
	export let loader: boolean;

	let search: boolean = false;
	const date: Date = new Date(weather.dt * 1000);
	let dateString: string
		= date.toLocaleDateString("en-US", {
				weekday: "short",
				month: "short",
				day: "numeric"
			});
	
	const splitDate = dateString.split(' ');
	dateString = `${splitDate[0]} ${splitDate[2]} ${splitDate[1]}`; 
	
	function beginLoader() {
		loader = true;
	}

	function endLoader() {
		loader = false;
	}

	function getLocation() {
		beginLoader();
		navigator.geolocation.getCurrentPosition(
			async (e) => {
				const cord = e.coords;
				const lat = cord.latitude;
				const lon = cord.longitude;
				weather = await getWeather(lat, lon) as Weather;
				endLoader();
			},
			(e) => {
				endLoader();
				alert(e.message )
			}
		);
	}
</script>

<!-- TODO create div in composante -->
<!-- TODO create 2 composante panel content and panel search -->
<div class="panel">
	{#if !search}
		<div class="searchButton">
			<button on:click={() => {search = true}}>Search for places</button>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<span on:click={getLocation} class="material-symbols-outlined">
				my_location
			</span>
		</div>

		<div class="hero">
			<img src="/Cloud-background.png" alt="" />
			<img src="{idToImg(weather.weather[0].id)}" alt="" />
		</div>

		<!-- TODO Fix position h2 -->
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
		
		<h3>{weather.weather[0].description}</h3>
		
		<div class="date">
			<p>Today</p>
			<p>•</p>
			<p>{dateString}</p>
		</div>

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

	.hero {
		position: relative;
		min-height: 400px;
		overflow: hidden;
		margin-top: -10px;
	}

	.hero img {
		position: absolute;
		left: 50%;
	}

	.hero img:nth-of-type(1) {
		top: 0;
		transform: translateX(-50%);
		opacity: 0.2;
	}

	.hero img:nth-of-type(2) {
		top: 50%;
		transform: translate(-50%, -50%);
		width: 202px;
	}

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

	.temp, .date, .location {
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

	.date {
		padding-bottom: 32px;
		gap: 16px;
	}

	.location {
		gap: 9px;
	}

	.temp {
		padding-top: 30px;
		font-style: normal;
		font-weight: 500;
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
	}

	.date, .location {
		color: #88869D;
	}

</style>
