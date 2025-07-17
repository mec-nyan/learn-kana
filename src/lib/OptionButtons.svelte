<script lang="ts">
	const options = [
		{ icon: " ", name: "options", path: "/options" },
		{ icon: "󰋖 ", name: "...", path: "/help" },
		{ icon: " ", name: "...", path: "" },
		{ icon: " ", name: "dev", path: "/developer" },
	];
</script>

<div id="option-buttons">
	{#each options as { icon, name, path }}
		<div class="opt">
			<a href={path} class="nerd-icon {name}">{icon}</a>
		</div>
	{/each}
</div>

<style>
	@font-face {
		font-family: "HackNerdFontPropo";
		src: local("Hack Nerd Font Propo Regular");
	}

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
		width: 100%;
		display: flex;
	}

	a {
		display: flex;
		justify-content: center;
		background: hsl(243, 20%, 20%);
		color: hsl(243, 10%, 40%);
		align-items: center;
		height: 100%;
		width: 100%;
		text-decoration: none;
		font-family: "HackNerdFontPropo";
		border-radius: 6px;
		font-size: 3rem;
		height: 2lh;
		cursor: pointer;
	}
</style>
