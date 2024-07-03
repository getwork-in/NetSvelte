<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";

	// type $$Props = HTMLAttributes<SVGElement>;

	export let strokeColor: string = "#00BFFF"; // Ice blue color
	export let strokeWidth: number = 3;
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...$$restProps}>
	<rect width="256" height="256" fill="none" />
	<line
		x1="128"
		y1="24"
		x2="128"
		y2="232"
		fill="none"
		stroke={strokeColor}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
	/>
	<line
		x1="24"
		y1="128"
		x2="232"
		y2="128"
		fill="none"
		stroke={strokeColor}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
	/>
	<line
		x1="45"
		y1="45"
		x2="211"
		y2="211"
		fill="none"
		stroke={strokeColor}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
	/>
	<line
		x1="45"
		y1="211"
		x2="211"
		y2="45"
		fill="none"
		stroke={strokeColor}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
	/>
	<line
		x1="64"
		y1="128"
		x2="192"
		y2="128"
		fill="none"
		stroke={strokeColor}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		stroke-dasharray="4"
	/>
	<line
		x1="128"
		y1="64"
		x2="128"
		y2="192"
		fill="none"
		stroke={strokeColor}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		stroke-dasharray="4"
	/>
	<line
		x1="64"
		y1="64"
		x2="192"
		y2="192"
		fill="none"
		stroke={strokeColor}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		stroke-dasharray="4"
	/>
	<line
		x1="64"
		y1="192"
		x2="192"
		y2="64"
		fill="none"
		stroke={strokeColor}
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		stroke-dasharray="4"
	/>
</svg>
