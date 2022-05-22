import React from "react";
const br = require("braille");

export default function ConstantStaticRender() {
  return (
    <div>
      <header className="App-Header">
        <h2>{br.toBraille("Braille Card")}</h2>
      </header>
      <main></main>
    </div>
  );
}
