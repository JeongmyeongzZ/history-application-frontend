<template>
  <main>
    <global-header title="kurly history" />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import GlobalHeader from '@/components/Header.vue';
import History from '@/types/History';

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
  },
  setup() {
    const histories = ref<History[]>([
      {
        id: 1,
        date: '2021-07-21',
        imageUrl: 'http://tomkellyslack.com/img/content/1/m/book_One.jpg',
        content: 'some contents',
      },
      {
        id: 2,
        date: '2021-07-21',
        imageUrl: 'http://tomkellyslack.com/img/content/1/m/lulu_CU.jpg',
        content: 'some contents',
      },
    ]);

    return { histories };
  },
});
</script>

<style lang="scss">

</style>
