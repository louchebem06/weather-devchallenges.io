<script lang="ts">
	import { kToc, kTof, type DayOfWeek, idToImg } from "$lib/weatherApi";


	export let celsius: boolean;
	export let day: DayOfWeek;
	export let tomorrow: boolean;

	const date: Date = new Date(day.dt * 1000);
	let dateString: string
		= date.toLocaleDateString("en-US", {
				weekday: "short",
				month: "short",
				day: "numeric"
			});
</script>

<div class="day">
	<h3 class="title">
		{#if tomorrow}
		Tomorrow
		{:else}
		{dateString}
		{/if}
	</h3>
	<img src="{idToImg(day.weather[0].id)}" alt="" />
	<div class="temp">
		<p class="maxTemp">
			{#if celsius}
			{kToc(day.main.temp_max)}℃
			{:else}
			{kTof(day.main.temp_max)}℉
			{/if}
		</p>
		<p class="minTemp">
			{#if celsius}
			{kToc(day.main.temp_min)}℃
			{:else}
			{kTof(day.main.temp_min)}℉
			{/if}
		</p>
	</div>
</div>

<style>
	.day {
		background-color: #1E213A;
		width: 120px;
		height: 177px;
		display: flex;
		flex-direction: column;
	}

	.day img {
		width: 56.44px;
		margin: auto;
		display: block;
		margin-top: 10px;
	}

	.temp {
		display: flex;
		justify-content: space-around;
		padding-bottom: 18px;
	}

	.title {
		text-align: center;
		padding-top: 18px;
	}

	.title, .maxTemp {
		color: #E7E7EB;
	}

	.minTemp {
		color: #A09FB1;
	}

	h3, p {
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
	}
</style>
