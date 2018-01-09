import React, { Component } from 'react';
import "../css/style.css";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onConvertTemperature();
  }

  getTooltip() {
    const unit = this.props.unit,
          message = `Convert to ${(unit === "C") ? "Fahrenheit" : "Celsius"}`;
    return message;
  }

  render() {
    const location = this.props.location,
          temperature = this.props.temperature,
          unit = this.props.unit,
          description = this.props.description,
          icon = this.props.icon,
          message = this.getTooltip();

    return (
      <main>
        <p>{location}</p>
        <p><span>{temperature}</span> <span className="unit-converter" onClick={this.handleClick} title={message}><sup>o</sup>{unit}</span></p>
        <p>{description}</p>
        <p><img src={icon} alt={description}></img></p>
      </main>
    );
  }
}