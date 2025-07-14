<script lang="ts">
	import Root from "$lib/Root.svelte";
	import TopContainer from "$lib/TopContainer.svelte";
	import Termscreen from "$lib/Termscreen.svelte";
	import MainPane from "$lib/MainPane.svelte";
	import OptionButtons from "$lib/OptionButtons.svelte";
	import Start from "$lib/Start.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<Root>
	<TopContainer>
		<Termscreen />
	</TopContainer>

	<MainPane>
		<OptionButtons />
		<Start />
	</MainPane>

	<Footer />
</Root>

<style>
</style>
