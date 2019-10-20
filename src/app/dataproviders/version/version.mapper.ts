import {VersionInfoJson} from './versionInfoJson.model';
import {VersionInfo, VersionInfoLink} from '../../core/domain/versionInfo.model';

export class VersionMapper {

    constructor() {

    }

    public mapFrom(param: VersionInfoJson): VersionInfo {
        if (!param) {
            return null;
        }

        const versionInfo = new VersionInfo();
        versionInfo.version = param.version;

        if (param.links) {
            for (let i = 0; i < param.links.length; i++) {
                const versionInfoLink = new VersionInfoLink();
                versionInfoLink.platform = param.links[i].platform;
                versionInfoLink.url = param.links[i].url;
                versionInfo.links.push(versionInfoLink);
            }
        }

        return versionInfo;
    }

}
