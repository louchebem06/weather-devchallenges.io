<script lang="ts">
	export let content: string;
	export let toggle: boolean;
	export let fn: any;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={fn}
	class:target={toggle}
	class:notTarget={!toggle}
	class="button">
	<p>{content}</p>
</div>

<style>
	.button {
		height: 40px;
		width: 40px;
		border-radius: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 21px;
		text-align: center;
		cursor: pointer;
		user-select: none;
	}

	.target {
		background-color: #E7E7EB;
		color: #110E3C;
	}

	.notTarget {
		background-color: #585676;
		color: #E7E7EB;
	}
</style>
