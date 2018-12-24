/* eslint-disable camelcase */
import moment from 'moment';
import { startCase } from 'lodash';

export default {
  url: () => '//jservice.io/api/random',
  label: 'jService',
  /** Sample API return
   [
   {
        "id": 114496,
        "answer": "a referee",
        "question": "In 1997 Violet Palmer took the court as the NBA's first female one of these",
        "value": 600,
        "airdate": "2011-10-20T12:00:00.000Z",
        "created_at": "2014-02-14T02:44:13.401Z",
        "updated_at": "2014-02-14T02:44:13.401Z",
        "category_id": 15607,
        "game_id": null,
        "invalid_count": null,
        "category": {
          "id": 15607,
          "title": "sports \u0026 civil rights",
          "created_at": "2014-02-14T02:44:12.875Z",
          "updated_at": "2014-02-14T02:44:12.875Z",
          "clues_count": 10
        }
      }
   ]
   */
  transpose: (res) => {
    const { id, airdate, question, category, answer, value } = res[0];

    const data = {
      id: id,
      title: `Jeopardy`,
      tagline: `Do you know?`,
      content: `<span class="m-card__data-name">${startCase(category.title.toLowerCase())} for ${value}</span>
<span>Q: ${question}</span>
        <span>A: ${answer}</span>
        <span>Aired on: ${moment(airdate).format('dddd, MMMM Do YYYY, h:mm:ss a')}</span>`,
    };
    return data;
  },
};
