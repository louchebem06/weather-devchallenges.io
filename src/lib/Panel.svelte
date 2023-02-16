<script lang="ts">
	let search: boolean = false;
</script>

<div class="panel">
	{#if !search}
		<!-- Call to action button search bar -->
		<!-- Catt to action button location in roundButton -->

		<div class="hero">
			<img src="/Cloud-background.png" alt="" />
			<img src="/Clear.png" alt="" />
		</div>

		<div class="temp">
			<h1>15</h1>
			<h2>℃</h2>
		</div>
		
		<h3>Shower</h3>
		
		<div class="date">
			<p>Today</p>
			<p>•</p>
			<p>Fri, 5 Jun</p>
		</div>

		<div class="location">
			<!-- TODO logo location -->
			<p>Helsinki</p>
		</div>
	{:else}
		<p>search</p>
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
