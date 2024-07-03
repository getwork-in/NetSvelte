<script lang="ts">
	import { SiteFooter, SiteHeader, TailwindIndicator } from "$lib/components/ui/index.js";
	import { dev } from "$app/environment";
</script>

<SiteHeader />
<div class="flex-1">
	<slot />
</div>
<SiteFooter />
{#if dev}
	<p class="fixed bottom-0 right-0 z-50 p-2 text-xs text-white bg-black bg-opacity-50">Development Mode</p>
	<TailwindIndicator />
{/if}
