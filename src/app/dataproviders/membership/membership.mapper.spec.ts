import { MembershipCostsJson, MembershipJson } from './membershipJson.model';
import { MembershipMapper } from './membership.mapper';
import { Membership } from '../../core/domain/membership.model';
import { ArticleJson } from '../article/articleJson.model';
import { ArticleMapper } from '../article/article.mapper';
import { MembershipCosts } from '../../core/domain/MembershipCosts.model';

describe('MembershipMapper', () => {
  let mapper: MembershipMapper;

  beforeEach(() => {
    mapper = new MembershipMapper();
  });

  it('should handle null values for mapFrom', () => {
    expect(mapper.mapFrom(null)).toBe(null);
  });

  it('should handle null cost values for mapFrom', () => {
    const articleJson: ArticleJson = {
      id: '1',
      titel: 'Article title',
      erstellungsdatum: '1550412574000',
      ersteller: 'tdittmann',
      kategorie: 'soccer',
      categoryColor: '#fff',
      text: 'Hello World',
      hits: '10',
    };

    const actual: MembershipJson = {
      article: articleJson,
      costs: null,
      divisioncosts: null,
    };

    const expected = new Membership();
    expected.article = new ArticleMapper().mapFrom(articleJson);
    expected.costs = [];
    expected.divisionCosts = [];

    expect(mapper.mapFrom(actual)).toEqual(expected);
  });

  it('should map from json to core model', () => {
    const articleJson: ArticleJson = {
      id: '1',
      titel: 'Article title',
      erstellungsdatum: '1550412574000',
      ersteller: 'tdittmann',
      kategorie: 'soccer',
      categoryColor: '#fff',
      text: 'Hello World',
      hits: '10',
    };

    const costs: MembershipCostsJson = {
      title: 'Familie',
      amount: '80 € pro Jahr',
      hint: 'mit Kindern bis 18 Jahre',
    };

    const divisionCosts: MembershipCostsJson = {
      title: 'Fußball',
      amount: '10 € pro Jahr',
      hint: '',
    };

    const actual: MembershipJson = {
      article: articleJson,
      costs: [costs],
      divisioncosts: [divisionCosts],
    };

    const expectedCosts = new MembershipCosts();
    expectedCosts.title = 'Familie';
    expectedCosts.costs = '80 € pro Jahr';
    expectedCosts.hint = 'mit Kindern bis 18 Jahre';

    const expectedDivisionCosts = new MembershipCosts();
    expectedDivisionCosts.title = 'Fußball';
    expectedDivisionCosts.costs = '10 € pro Jahr';
    expectedDivisionCosts.hint = '';

    const expected = new Membership();
    expected.article = new ArticleMapper().mapFrom(articleJson);
    expected.costs = [expectedCosts];
    expected.divisionCosts = [expectedDivisionCosts];

    expect(mapper.mapFrom(actual)).toEqual(expected);
  });
});
