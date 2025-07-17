<script lang="ts">
	let { kana = "@" } = $props();
</script>

<div>{kana}</div>

<style>
	div {
		/* border: 2px solid blue; */

		flex: 1;
		max-height: 1.2lh;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: "IPAMincho", "TakaoMincho", "serif", serif;
		font-size: 16rem;
	}
</style>
