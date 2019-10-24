import {VersionInfo, VersionInfoLink} from './versionInfo.model';

describe('VersionInfo', function () {

    it('should return an empty string if no link is present', function () {
        const versionInfo: VersionInfo = new VersionInfo();

        expect(versionInfo.getAndroidUrl()).toBe('');
        expect(versionInfo.getIosUrl()).toBe('');
    });

    it('should return the specific link if present', function () {
        const versionInfoLinkAndroid: VersionInfoLink = new VersionInfoLink();
        versionInfoLinkAndroid.platform = 'android';
        versionInfoLinkAndroid.url = 'sample-android-link';

        const versionInfoLinkIos: VersionInfoLink = new VersionInfoLink();
        versionInfoLinkIos.platform = 'ios';
        versionInfoLinkIos.url = 'sample-ios-link';

        const versionInfo: VersionInfo = new VersionInfo();
        versionInfo.links = [versionInfoLinkAndroid, versionInfoLinkIos];

        expect(versionInfo.getAndroidUrl()).toBe('sample-android-link');
        expect(versionInfo.getIosUrl()).toBe('sample-ios-link');
    });

});
