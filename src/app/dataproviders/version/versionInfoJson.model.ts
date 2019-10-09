export interface VersionInfoJson {

    version: string;
    links: VersionInfoLinkJson[];

}

export interface VersionInfoLinkJson {

    platform: string;
    url: string;

}
