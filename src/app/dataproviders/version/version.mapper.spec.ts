import {VersionMapper} from './version.mapper';
import {VersionInfoJson} from './versionInfoJson.model';
import {VersionInfo} from '../../core/domain/versionInfo.model';

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
            version: '5.0.0',
            links: []
        };

        const expected: VersionInfo = new VersionInfo();
        expected.version = '5.0.0';
        expected.links = [];

        expect(mapper.mapFrom(actual)).toEqual(expected);
    });

});
