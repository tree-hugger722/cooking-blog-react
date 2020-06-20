import React, { Component } from "react";
import FormElement from "./FormElement";

export const COOKING_BLOG_TITLE = "COOKING BLOG";

class SuggestRecipesForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    /*alert("A name was submitted: " + this.state.value);*/
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <FormElement name="Name:" />
        <FormElement name="Email:" />
        <FormElement name="Recipe:" />
        <input className="submit" type="submit" value="Submit" />
      </form>
    );
  }
}

export default SuggestRecipesForm;
