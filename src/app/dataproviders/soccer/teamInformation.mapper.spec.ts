import {TeamInformationMapper} from './teamInformation.mapper';
import {TeamInformationJson} from './teamInformationJson.model';
import {TeamInformation} from '../../core/domain/teamInformation.model';

describe('TeamInformationMapper', () => {

    let mapper: TeamInformationMapper;

    beforeEach(() => {
        mapper = new TeamInformationMapper();
    });

    it('should handle null values for mapFrom', () => {
        expect(mapper.mapFrom(null)).toBe(null);
    });

    it('should map from json to core model', () => {
        const actual: TeamInformationJson = {
            name: '1. Mannschaft',
            showRanking: true,
            showFixture: false,
            showPlayers: true,
            showStatistics: false,
        };

        const expected: TeamInformation = new TeamInformation();
        expected.name = '1. Mannschaft';
        expected.showRanking = true;
        expected.showFixture = false;
        expected.showPlayers = true;
        expected.showStatistics = false;

        expect(mapper.mapFrom(actual)).toEqual(expected);
    });

});
