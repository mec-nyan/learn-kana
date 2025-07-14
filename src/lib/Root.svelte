<script lang="ts">
	let { children } = $props();
</script>

<div>
	{@render children()}
</div>

<style>
	div {
		/* border: 4px solid lightblue; */
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100dvh;
		width: 100dvw;
		/* padding: 2rem; */
	}
</style>
