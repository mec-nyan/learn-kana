<script lang="ts">
	import Termscreen from "$lib/Termscreen.svelte";
	import ActionsPane from "$lib/ActionsPane.svelte";
	import Footer from "$lib/Footer.svelte";
	import TopContainer from "$lib/TopContainer.svelte";
</script>

<div class="root">
	<TopContainer>
		<Termscreen />
	</TopContainer>
	<ActionsPane />
	<Footer />
</div>

<style>
	.root {
		/* border: 4px solid lightblue; */

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100dvh;
		/* padding: 2rem; */
	}
</style>
