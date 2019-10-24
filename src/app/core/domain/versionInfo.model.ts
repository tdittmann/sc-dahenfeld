export class VersionInfo {

    version: string;
    links: VersionInfoLink[] = [];

    getAndroidUrl(): string {
        return this.getLinkUrl('android');
    }

    getIosUrl(): string {
        return this.getLinkUrl('ios');
    }

    private getLinkUrl(platform: string): string {
        if (this.links) {
            const versionInfoLink = this.links.find(value => value.platform.toLowerCase() === platform.toLowerCase());
            if (versionInfoLink) {
                return versionInfoLink.url;
            }
        }

        return '';
    }

}

export class VersionInfoLink {

    platform: string;
    url: string;

}
