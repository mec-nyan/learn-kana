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
	};

	let hidden = "[?]";
</script>

<div id="main">
	{@render children()}

	<!-- Some development info -->
	<div class="dev" on:click={tap}>
		{#if mode === "dev"}
			<span class="devinfo no-select">h: {height} - w: {width}</span>
		{:else}
			<span class="devinfo hidden no-select">{hidden}</span>
		{/if}
	</div>
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

	.devinfo {
		color: #eba0ac;
		font-size: 0.8rem;
		font-family: "HackNerdFontPropo", monospace;
		cursor: pointer;
	}

	.hidden {
		color: #bac2de;
		opacity: 0.5;
	}

	.no-select {
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		touch-action: manipulation;
	}
</style>
