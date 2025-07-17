<script lang="ts">
	import { kana_map } from "./kanas";
	// Components
	import Root from "$lib/Root.svelte";
	import TopContainer from "$lib/TopContainer.svelte";
	import TopInfo from "$lib/TopInfo.svelte";
	import Footer from "$lib/Footer.svelte";
	import MainPane from "$lib/MainPane.svelte";
	import Kana from "$lib/Kana.svelte";
	import Separator from "$lib/Separator.svelte";
	import RomajiBar from "$lib/RomajiBar.svelte";

	import { onMount } from "svelte";

	import {width, height, updateSize} from "$lib/window_size/window_size";

	onMount(() => {
		window.addEventListener("resize", () => updateSize(window, width, height));
		return () => window.removeEventListener("resize", () => updateSize(window, width, height));
	});

	let currentRow = kana_map[0].kanas;
</script>

<Root>
	<TopContainer>
		<TopInfo />
	</TopContainer>

	<MainPane mode="dev" {width} {height}>
		<Kana kana={currentRow[0].hiragana} />
		<Separator />
		<RomajiBar buttons={currentRow} />
	</MainPane>
	<Footer />
</Root>

<style>
</style>
