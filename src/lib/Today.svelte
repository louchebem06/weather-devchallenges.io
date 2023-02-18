<script lang="ts">
	import { type Weather, degToName } from "$lib/weatherApi";

	export let weather: Weather;
</script>

<div class="today">
	<h1>Today’s Hightlights</h1>
	<div class="firstLine">
		<div class="block wind">
			<h2>Wind status</h2>
			<div class="value">
				<h3>{Math.round(weather.wind.speed)}</h3>
				<h2>mph</h2>
			</div>
			<div class="windDef">
				<span
					class="material-symbols-outlined"
					style="transform: rotate({weather.wind.deg}deg)"
				>
					navigation
				</span>
				<p>{degToName(weather.wind.deg)}</p>
			</div>
		</div>
		<div class="block humidity">
			<h2>Humidity</h2>
			<div class="value">
				<h3>{weather.main.humidity}</h3>
				<h2>%</h2>
			</div>
			<div class="containerSlider">
				<div class="numberSlider">
					<p>0</p>
					<p>50</p>
					<p>100</p>
				</div>
				<div class="slider">
					<div class="progress" style="width: {weather.main.humidity}%">
					</div>
				</div>
				<p>%</p>
			</div>
		</div>
	</div>
	<div class="secondLine">
		<div class="block visibility">
			<h2>Visibility</h2>
			<div class="value">
				<h3>{weather.visibility * 0.000621}</h3>
				<h2>miles</h2>
			</div>
		</div>
		<div class="block air">
			<h2>Air Pressure</h2>
			<div class="value">
				<h3>{weather.main.pressure}</h3>
				<h2>mb</h2>
			</div>
		</div>
	</div>
</div>

<style>
	.today {
		display: flex;
		flex-direction: column;
		max-width: 704px;
		width: auto;
		margin: auto;
		padding: 33px;
		padding-bottom: 100px;
	}

	.firstLine, .secondLine {
		display: flex;
		gap: 48px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.firstLine {
		margin-bottom: 48px;
	}

	.block {
		max-width: calc(328px - 44px);
		width: 328px;
		background-color: #1E213A;
		padding: 22px;
	}

	h1, h2, h3 {
		color: #E7E7EB;
		font-style: normal;
	}

	h1, .block h3 {
		font-weight: 700;
	}

	h1 {
		font-size: 24px;
		line-height: 28px;
		margin-bottom: 32px;
	}

	h2 {
		font-weight: 500;
	}

	.block h2 {
		font-size: 16px;
		line-height: 19px;
		text-align: center;
	}

	.block h3 {
		font-size: 64px;
		line-height: 75.14px;
	}

	.value h2 {
		font-size: 36px;
		line-height: 42.26px;
		margin-top: 20px;
	}

	.value {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	.windDef {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #E7E7EB;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 16px;
		gap: 10px;
		margin-top: 17px;
	}

	.windDef span {
		background-color: rgba(255, 255, 255, 0.3);
		width: 30px;
		height: 30px;
		border-radius: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
	}

	.containerSlider {
		margin-top: 17px;
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		line-height: 14px;
		text-align: center;
		color: #A09FB1;
	}

	.containerSlider p {
		text-align: right;
	}

	.numberSlider {
		display: flex;
		justify-content: space-between;
	}

	.slider, .progress {
		position: relative;
		background-color: #E7E7EB;
		width: 100%;
		height: 8px;
		border-radius: 80px;
	}

	.progress {
		background-color: #FFEC65;
	}
</style>
