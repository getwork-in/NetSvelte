<script lang="ts">
	import * as Avatar from "$lib/registry/new-york/ui/avatar/index.js";
    import * as Tabs from "$lib/registry/new-york/ui/tabs/index.js";
    import {
		Overview,
		PickAssets,
		PlayerAssets,
	} from "./index.js";

    // Logic for the tabs in TS
    const tabs = [ "players", "picks" ];
    let activeTab = "players";
    function changeTab(tab: string) {
        activeTab = tab;
    }
</script>

<Tabs.Root value="players" class="space-y-4">
    <Tabs.List>
        <Tabs.Trigger value="players">Players</Tabs.Trigger>
        <Tabs.Trigger value="picks">Picks</Tabs.Trigger>
        <!-- <Tabs.Trigger value="rights" disabled>Rights</Tabs.Trigger> -->
    </Tabs.List>
    <Tabs.Content value="players" class="space-y-4">
        <PlayerAssets/>
    </Tabs.Content>
    <Tabs.Content value="picks" class="space-y-4">
        <PickAssets/>
    </Tabs.Content>
</Tabs.Root>
