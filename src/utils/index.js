const { data } = require('../../assets/data');

/**
 * Filter the data by the given value.
 *
 * @param {string} value - The value to filter the data.
 * @returns {Array} The data filtered by the given value.
 */
const filterData = (value) => {
  if (!value) {
    throw new Error('Not value provided');
  }
  const parsedValue = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regexp = new RegExp(parsedValue, 'i');

  return data.map(
    (country) => ({
      name: country.name,
      people: country.people.map(
        (people) => ({
          name: people.name,
          animals: people.animals.filter(
            (animal) => animal.name.match(regexp),
          ),
        }),
      ).filter((people) => people.animals.length),
    }),
  ).filter((country) => country.people.length);
};

/**
 * Map the data and count the number of people and animals in each country.
 *
 * @returns {Array} The data with number of people and animals in each country.
 */
const countData = () => data.map(
  (country) => ({
    name: `${country.name} [${country.people.length}]`,
    people: country.people.map(
      (people) => ({
        name: `${people.name} [${people.animals.length}]`,
        animals: people.animals
      }),
    ),
  }),
);

module.exports = {
  filterData,
  countData,
};
