import { SportsStatsPage } from './app.po';

describe('sports-stats App', function() {
  let page: SportsStatsPage;

  beforeEach(() => {
    page = new SportsStatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
