<script lang="ts">
  	import type { Weather } from "$lib/weatherApi";

	export let weather: Weather;
	const date: Date = new Date(weather.dt * 1000);
	let dateString: string
		= date.toLocaleDateString("en-US", {
				weekday: "short",
				month: "short",
				day: "numeric"
			});
	
	const splitDate = dateString.split(' ');
	dateString = `${splitDate[0]} ${splitDate[2]} ${splitDate[1]}`; 
</script>

<div class="date">
	<p>Today</p>
	<p>•</p>
	<p>{dateString}</p>
</div>

<style>
	.date {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.date {
		padding-bottom: 32px;
		gap: 16px;
		color: #88869D;
	}
</style>
