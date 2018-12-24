/* eslint-disable camelcase */
import { isObject } from 'lodash';

export default {
  url: () => '//taco-randomizer.herokuapp.com/random/',
  label: 'Taco Fancy API',
  /** Sample API return
   {
      "shell": {
        "name": "Fresh Corn Tortillas",
        "url": "https://raw.github.com/sinker/tacofancy/master/shells/Fresh_corn_tortillas.md",
        "slug": "fresh_corn_tortillas",
        "recipe": "Fresh Corn Tortillas...."
      },
      "base_layer": {
        "name": "Moroccan Lamb",
        "url": "https://raw.github.com/sinker/tacofancy/master/base_layers/moroccan_lamb.md",
        "slug": "moroccan_lamb",
        "recipe": "Moroccan Lamb..."
      },
      "condiment": {
        "name": "Homemade Kimchi",
        "url": "https://raw.github.com/sinker/tacofancy/master/condiments/kimchi.md",
        "slug": "homemade_kimchi",
        "recipe": "Homemade Kimchi..."
      },
      "seasoning": {
        "name": "Sriracha Marinade",
        "url": "https://raw.github.com/sinker/tacofancy/master/seasonings/sriracha_marinade.md",
        "slug": "sriracha_marinade",
        "recipe": "Sriracha Marinade..."
      },
      "mixin": {
        "name": "Tomatoes (Traditional; US)",
        "url": "https://raw.github.com/sinker/tacofancy/master/mixins/tomatoes_traditional_us.md",
        "slug": "tomatoes_traditional_us",
        "recipe": "Tomatoes (Traditional; US)..."
      }
    }
   */
  transpose: (res) => {
    const { shell, base_layer, condiments, seasoning, mixin } = res;

    const data = {
      title: `Taco Fancy`,
      tagline: 'Ingredients of the Day',
      content: '',
    };

    if (isObject(shell) && shell.name) {
      data.content += `<span>Shell: <a href="${shell.url}" target="_blank">${shell.name}</a></span>`;
    }
    if (isObject(base_layer) && base_layer.name) {
      data.content += `<span>Base Layer: <a href="${base_layer.url}" target="_blank">${base_layer.name}</a></span>`;
    }
    if (isObject(condiments) && condiments.name) {
      data.content += `<span>Condiments: <a href="${condiments.url}" target="_blank">${condiments.name}</a></span>`;
    }
    if (isObject(seasoning) && seasoning.name) {
      data.content += `<span>Seasoning: <a href="${seasoning.url}" target="_blank">${seasoning.name}</a></span>`;
    }
    if (isObject(mixin) && mixin.name) {
      data.content += `<span>Mixin: <a href="${mixin.url}" target="_blank">${mixin.name}</a></span>`;
    }

    return data;
  },
};
