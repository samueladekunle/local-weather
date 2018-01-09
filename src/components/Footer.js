import React, { Component } from 'react';
import "font-awesome/css/font-awesome.min.css";
import "../css/style.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <address>
        	<i className="fa fa-code"></i>
        	<span> with </span>
        	<i className="fa fa-heart"></i>
        	<span> by </span>
        	<span className="author">Samuel Adekunle</span>
        </address>
      </footer>
    );
  }
}