import React, { Component } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import axios from "axios";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../css/style.css";

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = { shouldRender: false, location: "", temperature: 0.0, unit: "", weather: "", description: "", icon: "" };

    this.convertTemperature = this.convertTemperature.bind(this);
  }

  componentWillMount() {
    const geolocation = window.navigator.geolocation;

    if (geolocation) {
      geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.callWeatherAPI(latitude, longitude);
      });
    }
  }

  callWeatherAPI(latitude, longitude) {
    const request = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;

    axios.get(request).then((response) => {
      console.log(response.data);
      this.populateState(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  populateState(object) {
    const shouldRender = true;
    const location = `${object.name}, ${object.sys.country}`;
    const temperature = Math.round(object.main.temp);
    const unit = "C";
    const weather = object.weather[0].main;
    const description = object.weather[0].description.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
    const icon = object.weather[0].icon;

    this.setState({ shouldRender, location, temperature, unit, weather, description, icon });
  }

  convertTemperature() {
    let temperature = this.state.temperature;
    let unit = this.state.unit.toUpperCase();

    if (unit === "C") {
      // Convert from Celsius to Fahrenheit
      temperature = (temperature * 9 / 5) + 32;
      temperature = Math.round(temperature);
      unit = "F";
      this.setState({ temperature: temperature, unit: unit });
    } else if (unit === "F") {
      // Convert from Fahrenheit to Celsius
      temperature = (temperature - 32) * 5 / 9;
      temperature = Math.round(temperature);
      unit = "C";
      this.setState({ temperature: temperature, unit: unit });
    }
  }

  renderMain() {
    return (
      <ReactCSSTransitionGroup transitionName="example"  transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
      <Main location={this.state.location}
            temperature={this.state.temperature}
            unit={this.state.unit}
            weather={this.state.weather}
            description={this.state.description}
            icon={this.state.icon}
            onConvertTemperature={this.convertTemperature}
            key={Date.now()} />
      </ReactCSSTransitionGroup>
    );
  }

  render() {
    const main = this.state.shouldRender ? this.renderMain() : "";
    return (
      <div className="container">
        <Header />
        {main}
        <Footer />
      </div>
    );
  }
}