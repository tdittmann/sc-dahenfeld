import { VersionInfoJson } from "./versionInfoJson.model";
import { VersionInfo } from "../../core/domain/versionInfo.model";

export class VersionMapper {

  public mapFrom(param: VersionInfoJson): VersionInfo {
    if (!param) {
      return null;
    }

    const versionInfo = new VersionInfo();
    versionInfo.platform = param.platform;
    versionInfo.version = param.version;
    versionInfo.url = param.url;
    return versionInfo;
  }
}
