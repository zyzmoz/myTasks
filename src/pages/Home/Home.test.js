import HomePage from './Home';


describe('HomePage', () => {
  // it('Show if component has been rendered', () => {
  //   expect(component).to.contain('Hello');
  // });
  it('Adds 1 + 2 to equal 3', () => {
    const homePage = new HomePage;
    expect(homePage.sum(1, 2)).toBe(3);
  });
});

