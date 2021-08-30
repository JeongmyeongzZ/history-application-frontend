<template>
  <main>
    <global-header title="kurly history" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GlobalHeader from '@/components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
  },
});
</script>

<style lang="scss">

</style>
