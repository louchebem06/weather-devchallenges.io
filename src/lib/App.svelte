<script lang="ts">
	import Panel from "$lib/Panel.svelte";
	import Content from "$lib/Content.svelte";
</script>

<div class="app">
	<Panel />
	<Content />
</div>

<style>
	.app {
		display: flex;
		align-items: stretch;
	}

	@media screen and (max-width: 920px) {
		.app {
			flex-direction: column;
		}
	}
</style>
