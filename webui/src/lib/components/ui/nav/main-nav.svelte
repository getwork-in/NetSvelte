<script lang="ts">
	import { Icons } from "../icons/index.js";
	import { page } from "$app/stores";
	import { siteConfig } from "$lib/config/site.js";
	import { cn } from "$lib/utils.js";
</script>

<div class="mr-4 hidden md:flex">
	<div class="mr-6 flex items-center space-x-2">
		<Icons.logo class="h-6 w-6" />
		<span class="hidden font-bold sm:inline-block">
			{siteConfig.name}
		</span>
	</div>
	<nav class="flex items-center gap-6 text-sm">
		<a
			href="/trade"
			class={cn(
				"transition-colors hover:text-foreground/80",
				$page.url.pathname === "/trade" ? "text-foreground" : "text-foreground/60"
			)}
		>
			Trade
		</a>
		<a
			href="/team"
			class={cn(
				"transition-colors hover:text-foreground/80",
				$page.url.pathname === "/team" ? "text-foreground" : "text-foreground/60"
			)}
		>
			Team
		</a>
		<a
			href="/lines"
			class={cn(
				"transition-colors hover:text-foreground/80",
				$page.url.pathname === "/lines" ? "text-foreground" : "text-foreground/60"
			)}
		>
			Lines
		</a>
		<a
			href={siteConfig.links.github}
			target="_blank"
			rel="noopener noreferrer"
			class={cn(
				"hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
			)}
		>
			GitHub
		</a>
	</nav>
</div>
