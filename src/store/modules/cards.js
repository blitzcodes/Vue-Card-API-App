let cards = [];

// Attempt to back fill from localStroage, else generate sample cards.
if (localStorage.getItem('card-api-app__cards')) {
  cards = JSON.parse(localStorage.getItem('card-api-app__cards'));
} else {
  localStorage.setItem('card-api-app__cards', JSON.stringify(cards));
}

export default {
  state: {
    cards,
  },
  getters: {
    cards: state => {
      return state.cards;
    },
    getCardById: (state) => (id) => {
      return state.cards.find(card => card.id === id);
    },
    getCardByType: (state) => (type) => {
      return state.cards.find(card => card.apiType === type);
    },
  },
  mutations: {
    addCard(state, card) {
      state.cards.push(card);
      // Update cards in localStore, and state.
      localStorage.setItem('card-api-app__cards', JSON.stringify(state.cards));
    },
    updateCards(state, cards) {
      state.cards = cards;
      // Update cards in localStore, and state.
      localStorage.setItem('card-api-app__cards', JSON.stringify(state.cards));
    },
    updateCardType(state, type, card) {
      const target = state.cards.find(card => card.apiType === type);

      // If found, update the card.
      if (target) {
        // Fill in the new card content.
        for (let key in card) {
          if (target.hasOwnProperty(key)) {
            target[key] = card[key];
          }
        }
      }

      // Update cards in localStore, and state.
      localStorage.setItem('card-api-app__cards', JSON.stringify(state.cards));

    },
  },
  actions: {},
};
