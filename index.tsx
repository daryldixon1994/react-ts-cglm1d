import React, { Component } from "react";
import { render } from "react-dom";
import BingMap from "./BingMap";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

function App() {
  return (
    <BingMap
      mapOptions={{
        center: [47.60357, -122.32945],
        credentials:
          "Aob3fu9HtCNWOdi4-7BMuRc_DvWiBY3vi8cVssfDerq4XRlEaefkU5pSzOovRsvI"
      }}
    />
  );
}

render(<App />, document.getElementById("root"));
