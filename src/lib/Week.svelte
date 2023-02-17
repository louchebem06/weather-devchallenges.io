<script lang="ts">
	import Day from "$lib/Day.svelte";

	export let celsius: boolean;
</script>

<div class="week">
	<Day bind:celsius={celsius} />
	<Day bind:celsius={celsius} />
	<Day bind:celsius={celsius} />
	<Day bind:celsius={celsius} />
	<Day bind:celsius={celsius} />
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
