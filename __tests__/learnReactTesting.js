import React from "react";
//react-test-renderer: a library for rendering React components to pure JS objects.
//create is a method for "mounting" the component. 
  //"Mounting" is done by interacting with a pure JS object, a representation of the React component. 
  //"Mounting" does not use the real DOM. 
import { create } from "react-test-renderer";

//Create an implementation of the component in the same file as the test. 
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return { text: "PROCEED TO CHECKOUT" };
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.text || this.props.text}
      </button>
    );
  }
}

xdescribe("Button component", () => {
  test("it shows the expected text when clicked", () => {
    //"Mount" the <Button/> component. 
    const component = create(<Button text="SUBSCRIBE TO BASIC" />);
    //testRenderer.root "returns the root test instance object that is useful for making assertions about specific nodes in the tree"
    const instance = component.root;
    //find the button
    const button = instance.findByType("button");
    //invoke the onClick function
    button.props.onClick();
    //expect the 
    expect(button.props.children).toBe("PROCEED TO CHECKOUT");
  });
});
