import axios from 'axios';
import { isFunction, assign } from 'lodash';
import { uuid } from 'lodash-uuid';

// APIs
import chuckNorris from './apis/chuckNorris';
import starWars from './apis/starWars';
import tacos from './apis/tacos';
import iss from './apis/iss';
import numbers from './apis/numbers';
import advice from './apis/advice';

// Store
import store from '@/store/store';

const CardApiEnum = {
  chuckNorris: 'chuckNorris',
  starWars: 'starWars',
  tacos: 'tacos',
  iss: 'iss',
  numbers: 'numbers',
  advice: 'advice',
};

class ApiDigest {
  apis = {
    chuckNorris,
    starWars,
    tacos,
    iss,
    numbers,
    advice,
  };

  constructor() {
    for (let type in this.apis) {
      this.loadCard(type, true);
    }
  }

  loadCard(apiType, addToStore, renderFn) {
    const api = this.apis[apiType];
    const { url, transpose } = api;

    axios.get(url(), {})
      .then((response) => {
        const { data } = response;
        const card = transpose(data);

        // Assign reference to the type, and raw json response for previewing.
        card.apiType = apiType;
        card.apiResponse = data;

        // For list rendering, all cards must have a unique id of some kind.
        if (!card.id) {
          card.id = uuid();
        }

        // If desired, add this card to the store.
        if (addToStore) {
          // Only allow 1 card of a given api type to propagate.
          if (!store.getters.getCardByType(apiType)) {
            store.commit('addCard', card);
          }
        } else {
          // Make sure to update the store/localStorage.
          store.commit('updateCardType', apiType, card);
        }

        if (isFunction(renderFn)) {
          renderFn.call(this, card);
        }
      })
      .catch((error) => {
        console.log(error);
        if (isFunction(renderFn)) {
          const lastCard = store.getters.getCardByType(apiType);
          renderFn.call(this, assign(lastCard, {
            content: 'API unresponsive or response is empty, trying again shortly.',
          }));
        }
      })
      .then(() => {
        // console.log('cards', this.cards);
      });
  }
}

const digest = new ApiDigest();

export default digest;
export { CardApiEnum };
