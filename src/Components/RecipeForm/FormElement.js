import React, { Component } from "react";

export const COOKING_BLOG_TITLE = "COOKING BLOG";

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

export default FormElement;
