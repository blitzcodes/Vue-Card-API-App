<template>
  <v-card class="m-card" v-bind="cardStatus">
    <v-progress-linear
      class="m-card__timer"
      v-model="state.timeTillNextTick"
      :color="state.timeProgress"
      background-color="#666"
    ></v-progress-linear>

    <v-card-title primary-title>
      <div>
        <div class="headline">
          {{ comp.title }} <v-icon color="white">mdi-gesture-tap</v-icon>
        </div>
        <span class="grey--text">{{ comp.tagline }}</span>
      </div>
    </v-card-title>

    <v-card-text>
      <v-container text-xs-center v-show="state.loading">
        <v-progress-circular
          class="m-card__content-loader"
          :size="30"
          :width="3"
          color="purple"
          indeterminate
          centered
        ></v-progress-circular>
      </v-container>
      <p
        class="m-card__content"
        v-html="comp.content"
        v-show="!state.loading"></p>
    </v-card-text>

    <v-card-actions>
      <v-switch
        class="m-card__action-icon"
        slot="activator"
        color="primary"
        v-model="state.feedEnabled"
      ></v-switch>
      <v-icon
        class="m-card__action-icon"
        slot="activator"
        color="info"
        dark
        v-on:click="refreshFeed"
        v-show="state.feedEnabled"
      >mdi-refresh
      </v-icon>

      <v-spacer></v-spacer>
      <v-btn icon @click="state.showResponse = !state.showResponse" v-show="state.feedEnabled && !state.loading">
        <v-icon>{{ state.showResponse ? 'mdi-code-tags-check' : 'mdi-code-tags' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="state.showResponse">
        <div class="m-card__response">
          <pre v-html="comp.apiResponse"></pre>
        </div>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
  /* eslint-disable indent */
  import moment from 'moment';
  import digest from '@/lib/CardApi';

  export default {
    name: 'm-card',
    data: () => ({
      // Meaningful content related properties for the card.
      comp: {
        id: '',
        apiType: '',
        apiResponse: '',
        title: '',
        icon: '',
        content: '',
        tagline: '',
      },
      // Meaningful local state for managing card behaviour.
      state: {
        feedEnabled: true,
        loading: true,
        showResponse: false,
        interval: null,
        intervalNextTick: null,
        timeTillNextTick: 100,
        timeProgress: 'success',
      },
    }),
    props: {
      // A catch all object to handle state params for the card.
      initialData: Object,
    },
    /**
     * On mount, render the data passed into this card from state, and set up the interval processing.
     */
    mounted: function () {
      const { state, initialData } = this;
      // On load, propagate the card from it's passed on state.
      this.loadData(initialData);

      // Set up an interval to trigger refreshing the card feed every 10s.
      state.intervalNextTick = moment().add(11, 'seconds');
      state.interval = setInterval(this.intervalTick, 100);
    },
    methods: {
      /**
       * Allows a new card object to be digested and re-render this card.
       * @param card
       */
      loadData: function (card) {
        const { state, comp } = this;

        // Ensure this is only running if the card's feed is enabled.
        if (!state.feedEnabled) {
          return;
        }

        // Fill in the new card content.
        for (let key in card) {
          if (comp.hasOwnProperty(key)) {
            comp[key] = card[key];
          }
        }

        // Disable loading status.
        state.loading = false;

        // Reset the next interval tick and progress state.
        state.timeProgress = 'success';
        state.timeTillNextTick = 100;
        state.intervalNextTick = moment().add(10, 'seconds');
      },
      /**
       * Executes a call to the api digest to pull a new feed item for this card.
       */
      refreshFeed: function () {
        const { state, comp } = this;

        // Ensure this is only running if the card's feed is enabled.
        if (!state.feedEnabled) {
          return;
        }

        // Revert to loading status.
        state.loading = true;
        state.timeProgress = 'success';
        digest.loadCard(comp.apiType, false, this.loadData);
      },
      /**
       * Handles the interval check to see whether or not the feed should automatically re-render.
       */
      intervalTick: function () {
        const { state, comp } = this;

        if (state.feedEnabled && !state.loading) {
          if (moment().isAfter(state.intervalNextTick)) {
            this.refreshFeed();
          }
          state.timeTillNextTick = Math.floor(Math.abs(moment().diff(state.intervalNextTick) / 100));

          if (state.timeTillNextTick < 30) {
            state.timeProgress = 'red';
          } else if (state.timeTillNextTick < 60) {
            state.timeProgress = 'yellow';
          }
        }

        // console.log('interval', {
        //   apiType: comp.apiType,
        //   state: state,
        // });
      },
    },
    computed: {
      /**
       * React to whether or not the card's feed is enabled or not.
       */
      cardStatus: function () {
        const { state } = this;
        let props = {};

        if (!state.feedEnabled) {
          props = {
            color: '#242424',
          };
        }

        return props;
      },
    },
  };
</script>

<style lang="scss">
  .m-card {
    width: 98%;
    max-width: 75%;
    display: inline-block;
    margin: 0 2rem 2rem;

    @media screen and (min-width: 768px) {
      max-width: 98%;
    }

    .headline {
      cursor: pointer;
    }

    .v-card__text,
    .v-card__title {
      @media screen and (max-width: 768px) {
        padding-top: 0 !important;
      }
    }

    .v-card__text {
      @media screen and (max-width: 768px) {
        padding-bottom: 0 !important;
      }
    }
  }

  .m-card__content-loader {
    margin: 0 auto;
  }

  .m-card__content {
    font-size: 1.25rem;
    line-height: 1.33;

    @media screen and (max-width: 768px) {
      margin: 0 !important;
    }

    span {
      display: block;
    }
  }

  .m-card__timer {
    margin-top: 0 !important;
  }

  .m-card__action-icon {
    &,
    &.v-input {
      margin-left: 1rem;
      flex: 0 0 45px;
    }
  }

  .m-card__data-name {
    text-decoration: underline;
    font-weight: 700;
  }

  .m-card__response {
    max-width: 100%;
    overflow: scroll;
    background: #090909;
  }
</style>
