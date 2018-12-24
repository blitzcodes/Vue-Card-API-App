/* eslint-disable camelcase */
export default {
  url: () => '//api.adviceslip.com/advice',
  label: 'Advice Slip',
  /** Sample API return
   {"slip": {"advice":"If you've nothing nice to say, say nothing.","slip_id":"171"}}
   */
  transpose: (res) => {
    const { slip } = res;

    const data = {
      id: slip.slip_id,
      title: `Advice Slips`,
      tagline: 'Helping you one tip at a time.',
      content: slip.advice,
    };

    return data;
  },
};
