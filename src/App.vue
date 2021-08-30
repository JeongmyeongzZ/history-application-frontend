<template>
  <main>
    <global-header title="kurly history" />
  </main>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import GlobalHeader from '@/components/Header.vue';

@Options({
  components: {
    GlobalHeader,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>
