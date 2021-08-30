<template>
  <article>
    <img
      :src="history.imageUrl"
      :alt="history.date"
    >
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    history: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
  article {
    margin: calc(4vw + 2em);
    cursor: pointer;
    width: 220px;

    img {
      width: 100%;
    }
  }
</style>
