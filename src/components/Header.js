import React, { Component } from 'react';
import "weather-icons/css/weather-icons.min.css";
import "../css/style.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1><span>L</span><i className="wi wi-hail"></i><span>cal</span> <span>Weather App</span></h1>
      </header>
    );
  }
}