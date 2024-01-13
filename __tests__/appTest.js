import React from 'react';
import renderer from 'react-test-renderer';
import App from '../Client/App.jsx';

xdescribe('test for menuContainer.jsx', () => {
  test('menuContainer.js renders on the page', () => {
    const tree = renderer
      .create(<App/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});