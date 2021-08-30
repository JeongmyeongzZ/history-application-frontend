<template>
  <header>
    <h1>
      {{ title }}
    </h1>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
  header {
    padding: 1em 1.5em;

    h1 {
      font-family: 'Alegreya Sans SC', sans-serif;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.125rem;
    }
  }
</style>
