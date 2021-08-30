<template>
  <article>
    <img :src="history.imageUrl" :alt="history.date">
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
    margin: 6em;
    cursor: pointer;

    img {
      width: 150px;
    }
  }
</style>
