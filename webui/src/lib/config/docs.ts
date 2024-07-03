import type { NavItem, SidebarNavItem } from "$lib/types/nav.js";

type DocsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Trade",
			href: "/trade",
		},
		{
			title: "Team",
			href: "/team",
		},
		{
			title: "Lines",
			href: "/lines",
		},
		{
			title: "GitHub",
			href: "https://github.com/huntabyte/shadcn-svelte",
			external: true,
		},
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Changelog",
					href: "/",
					items: [],
				},
				{
					title: "About",
					href: "/",
					items: [],
				},
			],
		},
		{
			title: "Features",
			items: [
				{
					title: "Trade",
					href: "/trade",
					items: [],
				},
				{
					title: "Contracts",
					href: "/",
					items: [],
				},
				{
					title: "Lines",
					href: "/",
					items: [],
				}
			],
		},
	],
};
