import { SportheimInfoJson } from './sportheim-info-json.model';
import { SportheimInfo, SportheimMenue } from '../../core/domain/sportheim-info.model';

export class SportheimInfoMapper {
  mapFrom(param: SportheimInfoJson): SportheimInfo {
    if (!param) {
      return null;
    }

    const sportheimInfo = new SportheimInfo();
    sportheimInfo.image = param.image;
    sportheimInfo.content = param.content;
    sportheimInfo.owner = param.owner;
    sportheimInfo.menues = [];
    param.menues.forEach((value) => {
      sportheimInfo.menues.push(new SportheimMenue(value.name, value.link));
    });
    return sportheimInfo;
  }
}
