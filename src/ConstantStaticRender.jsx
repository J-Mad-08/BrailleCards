import React from "react";
const br = require("braille");
import "../src/styles.scss";

export default function ConstantStaticRender() {
  return (
    <div>
      <header className="App-Header">
        <h2>{br.toBraille("Flashy Braille")}</h2>
      </header>
      <main>
        <div className="image-container"></div>
        <h1>Flashy Braille </h1>
      </main>
    </div>
  );
}
