export default {
  url: () => '//numbersapi.com/random/date',
  label: 'Numbers API',
  transpose: (res) => {
    const data = {
      title: 'Know Your Numbers',
      tagline: 'Did you know?',
      content: `${res}`,
    };
    return data;
  },
};
