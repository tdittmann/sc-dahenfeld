export class VersionInfo {

    version: string;
    links: VersionInfoLink[] = [];

}

export class VersionInfoLink {

    platform: string;
    url: string;

}
