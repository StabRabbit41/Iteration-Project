import React from 'react';
import renderer from 'react-test-renderer';
import HeaderContainer from '../Client/containers/HeaderContainer';

//import MainContainer from OldMainContainer as an intentional failing test. 
import MainContainer from '../Client/containers/OldMainContainer';

xdescribe('test for menuContainer.jsx', () => {
  test('menuContainer.js renders on the page', () => {
    const tree = renderer
      .create(<HeaderContainer/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});