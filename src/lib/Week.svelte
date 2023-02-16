<script lang="ts">
	import Day from "$lib/Day.svelte";
</script>


<div class="week">
	<Day />
	<Day />
	<Day />
	<Day />
	<Day />
</div>

<style>
	.week {
		display: flex;
		gap: 26px;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
