/* eslint-disable camelcase */
export default {
  url: () => '//cat-fact.herokuapp.com',
  label: 'Cat Facts API',
  /** Sample API return
       {
      "_id": "591f9894d369931519ce358f",
      "__v": 0,
      "text": "A female cat will be pregnant for approximately 9 weeks - between 62 and 65 days from conception to delivery.",
      "updatedAt": "2018-01-04T01:10:54.673Z",
      "deleted": false,
      "source": "api",
      "used": false
    }
   */
  transpose: (res) => {
    const { _id, text } = res;

    const data = {
      id: _id,
      title: `Cat Facts`,
      tagline: 'Keep your critters happy.',
      content: `${text}`,
    };
    return data;
  },
};
