import { EdTallerPage } from './app.po';

describe('ed-taller App', () => {
  let page: EdTallerPage;

  beforeEach(() => {
    page = new EdTallerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ed!!');
  });
});
