import React from "react";
import { create } from "react-test-renderer";

import login from '../Client/components/login.jsx';

function LoginTestComponent() {
  return (
    <div>
      <login/>
    </div>
  )
}

describe('login component', () => {
  test('the login button shows the text Login', () => {
    const component = create(<login/>);
  })
})