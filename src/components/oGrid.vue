<template>
  <draggable class="o-grid" v-model='cardList' :options="{handle:'.v-card__title'}">
    <div class="o-grid__item" v-for="card in cardList" :key="card.id">
      <m-card :initialData="card"></m-card>
    </div>
  </draggable>
</template>

<script>
  /* eslint-disable indent */

  import draggable from 'vuedraggable';
  import mCard from './mCard';

  export default {
    name: 'o-grid',
    components: { draggable, mCard },
    data: function () {
      return {
        digest: null,
      };
    },
    created: function () {
    },
    computed: {
      cardList: {
        get() {
          return this.$store.getters.cards;
        },
        set(value) {
          this.$store.commit('updateCards', value);
        },
      },
    },
  };
</script>

<style lang="scss">
  .o-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;

    @media screen and (min-width: 768px) {
      max-width: 768px;
    }
    @media screen and (min-width: 1200px) {
      max-width: 1200px;
    }

    /**
    Items inside grids, will attempt to use 50% of the frame. On
    desktop this will produce 2 columns on desktop, or single column
    on mobile.
     */
    .o-grid__item {
      flex: 0 0 100%;

      /*&.sortable-chosen {*/
      /*height: 3rem !important;*/
      /*width: 3rem !important;*/
      /*}*/

      @media screen and (min-width: 768px) {
        flex: 0 0 50%;
        max-width: 50%;
      }

      @media screen and (min-width: 1280px) {
        flex: 0 0 33%;
        max-width: 33%;
      }
    }
  }
</style>
