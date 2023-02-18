<script lang="ts">
	import { type Weather, idToImg } from "./weatherApi";

	export let weather: Weather;
</script>

<div class="hero">
	<img src="/Cloud-background.png" alt="" />
	<img src="{idToImg(weather.weather[0].id)}" alt="" />
</div>

<style>
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
</style>
