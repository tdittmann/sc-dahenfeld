import { TimelineMapper } from './timeline.mapper';
import { Article } from '../../core/domain/article.model';
import { DateUtils } from '../../util/DateUtils';
import { TimelineEntry } from '../../core/domain/timeline-entry.model';

describe('TimelineMapper', function () {
  let mapper: TimelineMapper;

  beforeEach(() => {
    mapper = new TimelineMapper();
  });

  it('should handle null values for mapFrom', () => {
    expect(mapper.mapFrom(null)).toBe(null);
  });

  it('should map from article to timelineEntry', () => {
    const actual: Article = new Article();
    actual.id = '1';
    actual.title = 'Article title';
    actual.createdAt = DateUtils.ofUnixTimestampNumber(1550412574000);
    actual.text = 'Hello World';

    const expected: TimelineEntry = new TimelineEntry();
    expected.articleId = '1';
    expected.title = 'Article title';
    expected.date = DateUtils.ofUnixTimestampNumber(1550412574000);
    expected.text = 'Hello World';

    expect(mapper.mapFrom(actual)).toEqual(expected);
  });
});
