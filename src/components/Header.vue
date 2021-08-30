<template>
  <header>
    <h1>
      {{ title }}
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
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
