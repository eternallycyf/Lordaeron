describe('test web-react pkg', () => {
  it('test pc dist cjs module correctly', () => {
    const lordaeron = require('../../web-react/cjs');
    expect(Object.keys(lordaeron)).toMatchSnapshot();
  });

  it('test pc dist esm module correctly', () => {
    const lordaeron = require('../../web-react/es');
    expect(Object.keys(lordaeron)).toMatchSnapshot();
  });

  it('test pc dist umd module correctly', () => {
    const lordaeron = require('../../web-react/umd');
    expect(Object.keys(lordaeron)).toMatchSnapshot();
  });
});

export { };
