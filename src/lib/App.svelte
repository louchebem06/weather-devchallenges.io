<script lang="ts">
	import Panel from "$lib/Panel.svelte";
	import Content from "$lib/Content.svelte";

	let celsius: boolean = true;
</script>

<div class="app">
	<Panel bind:celsius={celsius}/>
	<Content bind:celsius={celsius}/>
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
