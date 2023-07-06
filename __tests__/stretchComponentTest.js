import React from 'react';
import renderer from 'react-test-renderer';

xdescribe('test for stretchContainer.jsx', () => {
  test('stretchContainer.js renders on the page', () => {
    const tree = renderer
      .create(<stretchContainer/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});