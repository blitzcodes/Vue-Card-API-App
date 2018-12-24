/* eslint-disable camelcase */
import moment from 'moment';

export default {
  url: () => '//api.open-notify.org/iss-now.json',
  label: 'Chuck Norris API',
  /** Sample API return
   {"timestamp": 1545678110, "iss_position": {"longitude": "-18.0495", "latitude": "-33.6597"}, "message": "success"}
   */
  transpose: (res) => {
    const { timestamp, iss_position } = res;

    const data = {
      title: `International Space Station`,
      tagline: 'Position over the Earth',
      content: `<span class="m-card__data-name">Coordinates</span>`,
    };
    data.content += `<span>Lat: ${iss_position.latitude}</span>`;
    data.content += `<span>Lon: ${iss_position.longitude}</span>`;
    data.content += `<span>As of: ${moment.unix(timestamp).format('dddd, MMMM Do YYYY, h:mm:ss a')}</span>`;
    return data;
  },
};
