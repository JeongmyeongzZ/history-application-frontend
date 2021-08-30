<template>
  <section>
    <template v-for="history in histories" :key="history.id">
      <card :history="history" />
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Card from '@/components/Card.vue';
import History from '@/types/History';

export default defineComponent({
  name: 'CardContainer',
  components: {
    Card,
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

<style scoped lang="scss">
  section {
    display: flex;
  }
</style>
