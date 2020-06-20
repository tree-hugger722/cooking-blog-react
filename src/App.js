import React, { Component } from "react";
import "./App.css";

class FormElement extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <label className="form-element">
        <p>{this.props.name}</p>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

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
