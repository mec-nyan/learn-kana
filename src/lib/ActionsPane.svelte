<script lang="ts">
	import OptionButtons from "./OptionButtons.svelte";
	import Start from "./Start.svelte";
</script>

<div id="actions">
	<OptionButtons />
	<Start />
</div>

<style>
	#actions {
		/* border: 1px solid orange; */

		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
