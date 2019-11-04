import {RootNavigation} from '../../core/domain/root-navigation.model';
import {NavigationItemJson, RootNavigationJson} from './navigationJson.model';
import {NavigationItem} from '../../core/domain/navigation-item.model';

export class NavigationMapper {

    mapFrom(param: RootNavigationJson): RootNavigation {
        if (!param) {
            return null;
        }

        const rootNavigation: RootNavigation = new RootNavigation();
        rootNavigation.title = param.title;
        rootNavigation.devMode = param.devMode;
        for (let i = 0; i < param.content.length; i++) {
            rootNavigation.content.push(this.mapNavigationItemFrom(param.content[i]));
        }
        return rootNavigation;
    }

    private mapNavigationItemFrom(param: NavigationItemJson): NavigationItem {
        if (!param) {
            return null;
        }

        const navigationItem: NavigationItem = new NavigationItem();
        navigationItem.title = param.title;
        navigationItem.url = param.url;
        navigationItem.icon = param.icon;
        navigationItem.params = param.params;
        return navigationItem;
    }

}
