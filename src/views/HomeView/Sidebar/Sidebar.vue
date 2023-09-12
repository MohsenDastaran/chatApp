<script setup lang="ts">
import FadeTransition from "@src/components/ui/transitions/FadeTransition.vue";
import Conversations from "@src/views/HomeView/Sidebar/Conversations/Conversations.vue";
</script>

<template>
	<aside
		class="xs:w-full md:w-[290px] h-full xs:px-5 md:p-0 flex flex-col overflow-visible transition-all duration-500"
	>
		<FadeTransition>
			<Conversations class="h-full flex flex-col" />
		</FadeTransition>
	</aside>
</template>
