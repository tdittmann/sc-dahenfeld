import {NavigationMapper} from './navigation.mapper';
import {RootNavigation} from '../../core/domain/root-navigation.model';
import {NavigationItem} from '../../core/domain/navigation-item.model';

describe('NavigationMapper', () => {

    let mapper: NavigationMapper;

    beforeEach(() => {
        mapper = new NavigationMapper();
    });

    it('should handle null values for mapFrom', () => {
        expect(mapper.mapFrom(null)).toBe(null);
    });

    it('should map from json to core model without content', () => {
        const navigationJson: RootNavigation = {
            title: 'Verein',
            devMode: false,
            content: []
        };

        const expected: RootNavigation = new RootNavigation();
        expected.title = 'Verein';
        expected.devMode = false;
        expected.content = [];

        expect(mapper.mapFrom(navigationJson)).toEqual(expected);
    });

    it('should map from json to core model', () => {
        const navigationJson: RootNavigation = {
            title: 'Verein',
            devMode: false,
            content: [{
                title: 'Nav Item 1',
                url: '/example',
                icon: 'sad',
                color: 'red',
                params: {
                    anyKey: 'anyValue'
                }
            }]
        };

        const expectedNavigationItem: NavigationItem = new NavigationItem();
        expectedNavigationItem.title = 'Nav Item 1';
        expectedNavigationItem.url = '/example';
        expectedNavigationItem.icon = 'sad';
        expectedNavigationItem.color = 'red';
        expectedNavigationItem.params = {anyKey: 'anyValue'};

        const expected: RootNavigation = new RootNavigation();
        expected.title = 'Verein';
        expected.devMode = false;
        expected.content = [expectedNavigationItem];

        expect(mapper.mapFrom(navigationJson)).toEqual(expected);
    });

});
