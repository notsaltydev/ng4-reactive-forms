import { Ng4ReactiveFormsPage } from './app.po';

describe('ng4-reactive-forms App', () => {
  let page: Ng4ReactiveFormsPage;

  beforeEach(() => {
    page = new Ng4ReactiveFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
