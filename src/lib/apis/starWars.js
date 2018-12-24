/* eslint-disable camelcase */
import { random } from 'lodash';

export default {
  url: () => {
    const baseUrl = `//swapi.co/api/`;
    const apiCategories = [
      {
        path: 'people',
        min: 1,
        max: 88,
      },
    ];
    // const category = apiCategories[getRandomMinMax(0, apiCategories.length--)];
    const category = apiCategories[0];
    const id = random(category.min, category.max);

    return `${baseUrl}${category.path}/${id}`;
  },
  label: 'Star Wars API',
  /** Sample API return
   {
          'name': 'Luke Skywalker',
          'height': '172',
          'mass': '77',
          'hair_color': 'blond',
          'skin_color': 'fair',
          'eye_color': 'blue',
          'birth_year': '19BBY',
          'gender': 'male',
          'homeworld': 'https://swapi.co/api/planets/1/',
          'films': [
            'https://swapi.co/api/films/2/',
            'https://swapi.co/api/films/6/',
            'https://swapi.co/api/films/3/',
            'https://swapi.co/api/films/1/',
            'https://swapi.co/api/films/7/',
          ],
          'species': [
            'https://swapi.co/api/species/1/',
          ],
          'vehicles': [
            'https://swapi.co/api/vehicles/14/',
            'https://swapi.co/api/vehicles/30/',
          ],
          'starships': [
            'https://swapi.co/api/starships/12/',
            'https://swapi.co/api/starships/22/',
          ],
          'created': '2014-12-09T13:50:51.644000Z',
          'edited': '2014-12-20T21:17:56.891000Z',
          'url': 'https://swapi.co/api/people/1/',
        }
   */
  transpose: (res) => {
    const { url, edited, name, birth_year, height, mass, hair_color, eye_color, skin_color } = res;

    const data = {
      url: url,
      title: 'Star Wars',
      tagline: 'Character',
      date: edited,
      content: `<span class="m-card__data-name">${name}</span>`,
    };

    if (birth_year && birth_year !== 'unknown') {
      data.content += `<span>Born: ${birth_year}</span>`;
    }
    if (height && height !== 'unknown') {
      data.content += `<span>Height: ${height} cm</span>`;
    }
    if (mass && mass !== 'unknown') {
      data.content += `<span>Weight: ${mass} kg</span>`;
    }
    if (hair_color && hair_color !== 'unknown') {
      data.content += `<span>Hair: ${hair_color}</span>`;
    }
    if (eye_color && eye_color !== 'unknown') {
      data.content += `<span>Eyes: ${eye_color}</span>`;
    }
    if (skin_color && skin_color !== 'unknown') {
      data.content += `<span>Skin: ${skin_color}</span>`;
    }

    return data;
  },
};
