import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Root } from "./component/Root";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter: () => {
    let main = document.getElementsByTagName("main")[0];
    let el = document.getElementById("login");
    if (!el) {
      el = document.createElement("div");
      el.id = "login";
      main.appendChild(el);
    }
    return el;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
