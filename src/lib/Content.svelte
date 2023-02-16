<script lang="ts">
	import Week from "$lib/Week.svelte";
	import Today from "$lib/Today.svelte";
</script>

<div class="content">
	<Week />
	<Today />
	<!-- svelte-ignore a11y-invalid-attribute -->
	<p>created by <a href="#">louchebem06</a> - devChallenges.io</p>
</div>

<style>

	.content {
		background-color: #100E1D;
		min-height: 100vh;
		width: 100%;
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

</style>
