import React, { Fragment } from "react";
import Sidebar from "../Sidebar/Sidebar.js";

export default function Layout(props) {
  return (
    <div>
      <Fragment>
        <Sidebar />
        <div>{props.children}</div>
      </Fragment>
    </div>
  );
}
