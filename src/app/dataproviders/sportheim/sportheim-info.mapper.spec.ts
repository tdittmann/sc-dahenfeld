import { SportheimInfoMapper } from './sportheim-info.mapper';
import { SportheimInfoJson } from './sportheim-info-json.model';
import { SportheimInfo, SportheimMenue } from '../../core/domain/sportheim-info.model';

describe('SportheimInfoMapper', () => {
  let mapper = new SportheimInfoMapper();

  it('should handle null values for mapFrom', () => {
    expect(mapper.mapFrom(null)).toBe(null);
  });

  it('should map from json to core model', () => {
    const json: SportheimInfoJson = {
      image: 'https://sportheim-dahenfeld.de/test-image.png',
      content: 'Some content',
      owner: 'Nice owners',
      menues: [{ name: 'Aktionskarte', link: 'https://sportheim-dahenfeld.de/aktionskarte.pdf' }],
    };

    const actual = mapper.mapFrom(json);

    const expected = new SportheimInfo();
    expected.image = 'https://sportheim-dahenfeld.de/test-image.png';
    expected.content = 'Some content';
    expected.owner = 'Nice owners';
    expected.menues = [new SportheimMenue('Aktionskarte', 'https://sportheim-dahenfeld.de/aktionskarte.pdf')];

    expect(actual).toEqual(expected);
  });
});
