<script lang="ts">
	import { onMount } from "svelte";

	let term: HTMLDivElement;

	// Initial content.
	let term_content = [
		"Welcome to kana-app! ",
		"",
		"I'll help you learn hiragana and katakana!",
		"",
		"Are you ready?",
	];

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	// Animated typing effect.
	async function write(content: Array<string>) {
		let output = "";
		for (const line of content) {
			for (let i = 0; i < line.length; ++i) {
				output += line[i];
				if (i + 1 < line.length) {
					term.innerHTML = `<p>${output}_</p>`;
				} else {
					term.innerHTML = `<p>${output}<span class="blink">_<span></p>`;
				}
				await sleep(50);
			}
			if (line !== "") {
				await sleep(600);
			}
			output += "</br>";
		}
	}

	onMount(() => {
		write(term_content);
	});
</script>

<div id="term" bind:this={term}></div>

<style>
	@font-face {
		font-family: "HackNerdFontPropo";
		src: local("Hack Nerd Font Propo Regular")
	}

	#term {
		background: hsl(243, 10%, 10%);
		width: 100%;
		min-height: calc(1rem + 5lh);
		color: hsl(243, 10%, 50%);
		padding: 0.5rem;
		font-family: "HackNerdFontPropo", monospace;
		font-size: 0.7rem;
	}
</style>
