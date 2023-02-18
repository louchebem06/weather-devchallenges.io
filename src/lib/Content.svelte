<script lang="ts">
	import Week from "$lib/Week.svelte";
	import Today from "$lib/Today.svelte";
	import RoundButton from "$lib/RoundButton.svelte";
	import type { Weather, Week as WeekInterface } from "./weatherApi";

	export let celsius: boolean;
	export let weather: Weather;
	export let weekInterface: WeekInterface;

	let fahrenheit: boolean = !celsius;

	const setCelsius = () => {
		celsius = true;
		fahrenheit = !celsius;
	}
	const setFahrenheit = () => {
		celsius = false;
		fahrenheit = !celsius;
	}
</script>

<div class="content">
	<div class="buttons">
		<RoundButton content="℃" bind:toggle={celsius} fn={setCelsius}/>
		<RoundButton content="℉" bind:toggle={fahrenheit} fn={setFahrenheit}/>
	</div>
	<Week bind:celsius={celsius} bind:week={weekInterface}/>
	<Today bind:weather={weather} />
	<p>created by <a href="https://github.com/louchebem06">louchebem06</a> - devChallenges.io</p>
</div>

<style>

	.content {
		background-color: #100E1D;
		min-height: 100vh;
		width: 100%;
		position: relative;
	}

	p, a {
		text-align: center;
		color: #A09FB1;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
	}

	p a {
		font-weight: bold;
	}

	p {
		position: absolute;
		bottom: 25px;
		left: 0;
		width: 100%;
	}

	.buttons {
		display: flex;
		justify-content: flex-end;
		gap: 12px;
		padding: 42px;
		max-width: 660px;
		margin: auto;
	}

</style>
