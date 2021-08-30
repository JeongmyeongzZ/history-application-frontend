<template>
  <main>
    <global-header title="kurly history" />

    <card-container />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GlobalHeader from '@/components/Header.vue';
import CardContainer from '@/components/CardContainer.vue';

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    CardContainer,
  },
});
</script>

<style lang="scss">
  .container {
    display: flex;
  }
</style>
