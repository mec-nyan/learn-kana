<script lang="ts">
	let { width, height, children } = $props();

	let mode = $state("");
	let count = $state(0);
	let tap = () => {
		console.log(`tap! ${count}`);
		count++;
		if (count === 5) {
			if (mode === "") {
				mode = "dev";
			} else {
				mode = "";
			}
			count = 0;
		}
	}
</script>

<div id="main" on:click={tap}>
	{@render children()}

	<!-- Some development info -->
	{#if mode === "dev"}
		<div class="dev">
			<span class="info">h: {height} - w: {width}</span>
		</div>
	{/if}
</div>

<style>
	#main {
		/* border: 1px solid orange; */

		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.dev {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: transparent;
	}

	.info {
		color: #eba0ac !important;
		font-size: 0.8rem;
		font-family: "HackNerdFontPropo", monospace;
	}
</style>
