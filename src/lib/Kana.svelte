<script lang="ts">
	let { kana = "@" } = $props();
</script>

<div class="kana">
	{kana}
</div>

<style>
	.kana {
		/* border: 2px solid blue; */

		flex: 1;
		max-height: 1.2lh;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16rem;
		/* TODO: Japanese font style (mincho, gothic, calligraphy) */
		font-family: mincho;
	}
</style>
