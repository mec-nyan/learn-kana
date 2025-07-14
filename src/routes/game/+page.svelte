<script lang="ts">
	import Root from "$lib/Root.svelte";
	import TopContainer from "$lib/TopContainer.svelte";
	import TopInfo from "$lib/TopInfo.svelte";
	import Footer from "$lib/Footer.svelte";
	import MainPane from "$lib/MainPane.svelte";
	import Kana from "$lib/Kana.svelte";
	import Separator from "$lib/Separator.svelte";
	import RomajiBar from "$lib/RomajiBar.svelte";
</script>

<Root>
	<TopContainer>
		<TopInfo />
	</TopContainer>

	<MainPane>
		<Kana />
		<Separator />
		<RomajiBar />
	</MainPane>
	<Footer />
</Root>

<style>
</style>
