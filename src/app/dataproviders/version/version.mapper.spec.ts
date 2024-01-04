import { VersionMapper } from './version.mapper';
import { VersionInfoJson } from './versionInfoJson.model';
import { VersionInfo } from '../../core/domain/versionInfo.model';

describe('VersionMapper', () => {
  let mapper: VersionMapper;

  beforeEach(() => {
    mapper = new VersionMapper();
  });

  it('should handle null values for mapFrom', () => {
    expect(mapper.mapFrom(null)).toBe(null);
  });

  it('should map from json to core model', () => {
    const actual: VersionInfoJson = {
      platform: 'android',
      version: '5.0.0',
      url: 'https://sc-dahenfeld.de',
    };

    const expected: VersionInfo = new VersionInfo();
    expected.platform = 'android';
    expected.version = '5.0.0';
    expected.url = 'https://sc-dahenfeld.de';

    expect(mapper.mapFrom(actual)).toEqual(expected);
  });
});
