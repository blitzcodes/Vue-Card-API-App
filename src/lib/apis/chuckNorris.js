/* eslint-disable camelcase */
export default {
  url: () => '//api.chucknorris.io/jokes/random',
  label: 'Chuck Norris API',
  /** Sample API return
   {
          "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
          "id" : "MODsqZwfRtiAEmeucHjh_w",
          "url" : "https://api.chucknorris.io/jokes/MODsqZwfRtiAEmeucHjh_w"
          "value" : "When Chuck Norris watches Bubble Guppies, he gets pissed off and jumps into the TV and roundhouse kicks the motherf$&!ing sh*t out of them."
        }
   */
  transpose: (res) => {
    const { icon_url, id, url, value } = res;

    const data = {
      icon: icon_url,
      id: id,
      url: url,
      title: `Chuck Norris`,
      tagline: 'Tip of the Day',
      content: value,
    };
    return data;
  },
};
