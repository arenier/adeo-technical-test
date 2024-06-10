
const { filterData, countData } = require('.');

describe('utils/index.js', () => {
  describe('filterData', () => {
    it('should return an empty array if the value is not found', () => {
      const result = filterData('yolo');

      expect(result).toEqual([]);
    });

    it.each(['badger', 'BADGER'])('should return the data filtered by the given value with full match result', (value) => {
      const result = filterData(value);

      expect(result).toEqual(
        [
          {
            name: 'Dillauti',
            people: [
              {
                name: 'Winifred Graham',
                animals: [
                  { name: 'Badger' },
                ],
              },
              {
                name: 'Bobby Ristori',
                animals: [
                  { name: 'Badger' },
                ],
              },
            ],
          },
        ],
      );
    });

    it('should return the data filtered by the given value with partial match result', () => {
      const result = filterData('ry');

      expect(result).toEqual(
        [
          {
            name: 'Uzuzozne',
            people: [
              {
                name: 'Lillie Abbott',
                animals: [
                  {
                    name: 'John Dory'
                  }
                ]
              }
            ]
          },
          {
            name: 'Satanwi',
            people: [
              {
                name: 'Anthony Bruno',
                animals: [
                  {
                    name: 'Oryx',
                  },
                ],
              },
            ],
          },
        ],
      );
    });

    it('should return the data filtered by the given value with special characters', () => {
      const result = filterData('two-toed');

      expect(result).toEqual(
        [
          {
            name: 'Dillauti',
            people: [
              {
                name: 'Bobby Ristori',
                animals: [
                  { name: "Linne's Two-toed Sloth" },
                ],
              },
            ],
          },
        ],
      );

    });
    it('should throw an error if no value is provided', () => {
      expect(() => filterData()).toThrowError('Not value provided');
    });
  });

  describe('countData', () => {
    it('should return the data with the number of people and animals in each country', () => {

      const result = countData();

      expect(result[0]).toEqual(
        {
          name: 'Dillauti [5]',
          people: [
            {
              name: 'Winifred Graham [6]',
              animals: [
                { name: 'Anoa' },
                { name: 'Duck' },
                { name: 'Narwhal' },
                { name: 'Badger' },
                { name: 'Cobra' },
                { name: 'Crow' },
              ],
            },
            {
              name: 'Blanche Viciani [8]',
              animals: [
                { name: 'Barbet' },
                { name: 'Rhea' },
                { name: 'Snakes' },
                { name: 'Antelope' },
                { name: 'Echidna' },
                { name: 'Crow' },
                { name: 'Guinea Fowl' },
                { name: 'Deer Mouse' },
              ],
            },
            {
              name: 'Philip Murray [7]',
              animals: [
                { name: 'Sand Dollar' },
                { name: 'Buzzard' },
                { name: 'Elephant' },
                { name: 'Xenops' },
                { name: 'Dormouse' },
                { name: 'Anchovy' },
                { name: 'Dinosaur' },
              ],
            },
            {
              name: 'Bobby Ristori [9]',
              animals: [
                { name: 'Kowari' },
                { name: 'Caecilian' },
                { name: 'Common Genet' },
                { name: 'Chipmunk' },
                { name: 'Aardwolf' },
                { name: "Przewalski's Horse" },
                { name: 'Badger' },
                { name: 'Sand Cat' },
                { name: "Linne's Two-toed Sloth" },
              ],
            },
            {
              name: 'Louise Pinzauti [5]',
              animals: [
                { name: 'Manta Ray' },
                { name: 'Nubian Ibex' },
                { name: 'Warbler' },
                { name: 'Duck' },
                { name: 'Mice' },
              ],
            },
          ],
        },
      );
    });
  });
});
