<script lang="ts">
	const options = [
		{ icon: " ", name: "config" },
		{ icon: "󰋖 ", name: "..." },
		{ icon: " ", name: "..." },
		{ icon: " ", name: "dev" },
	];
</script>

<div id="option-buttons">
	{#each options as { icon, name }}
		<div class="opt">
			<span class="nerd-icon {name}">${icon}</span>
		</div>
	{/each}
</div>

<style>
	#option-buttons {
		/* border: 1px solid lightblue; */
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, auto);
		gap: 1rem;
		width: 60%;
		margin-bottom: 1rem;
	}

	.opt {
		background: hsl(243, 20%, 20%);
		color: hsl(243, 10%, 40%);
		width: 100%;
		font-size: 2rem;
		border-radius: 6px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3lh;
		cursor: pointer;
	}
</style>
