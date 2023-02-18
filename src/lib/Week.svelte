<script lang="ts">
	import Day from "$lib/Day.svelte";
	import type { Week as WeekInterface } from "./weatherApi";

	export let celsius: boolean;
	export let week: WeekInterface;
</script>

<div class="week">
{#each week.list as day, i}
	{#if i == 0}
	<Day bind:celsius={celsius} bind:day={day} tomorrow={true}/>
	{:else}
	<Day bind:celsius={celsius} bind:day={day} tomorrow={false}/>
	{/if}
{/each}
</div>

<style>
	.week {
		display: flex;
		gap: 26px;
		flex-wrap: wrap;
		max-width: 704px;
		margin: auto;
		padding: 33px;
		justify-content: center;
	}

	@media screen and (max-width: 600px) {
		.week {
			max-width: 266px;
			justify-content: flex-start;
		}
	}

	@media screen and (max-width: 331px) {
		.week {
			justify-content: center;
		}
	}
</style>
