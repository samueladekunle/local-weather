import React, { Component } from 'react';
import "font-awesome/css/font-awesome.min.css";
import "../css/style.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <address>
        	<span title="Code"><i className="fa fa-code" title="Code"></i></span>
        	<span> with </span>
        	<span title="Love"><i className="fa fa-heart"></i></span>
        	<span> by </span>
        	<span className="author" title="Samuel Adekunle">Samuel Adekunle</span>
        </address>
      </footer>
    );
  }
}