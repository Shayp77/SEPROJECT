import React, { Component } from "react";
import "./custom.css";
import Pemesanan from "./page/Pemesanan";
export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div className="tw-bg-gray-300 tw-min-h-screen">
        <Pemesanan/>
      </div>
    );
  }
}
