import React from "react";
import Header from "./Header";

import { Headings } from "../common/commonconst.js";
//import Innerapp from "../components/Innerapp.js";

import "../css/customstyle.css";
//import "../css/bootstrapmin.css";

const App = () => (
  <div>
    <Header title={Headings.apptitle} />
  </div>
);

export default App;
