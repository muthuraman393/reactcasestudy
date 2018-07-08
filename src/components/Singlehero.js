import React from "react";
import { withRouter } from "react-router-dom";

//import AddTodo from "../containers/AddTodo";
//import VisibleTodoList from "../containers/VisibleTodoList";
const goBack = props => {
  this.props.history.goBack();
};
const Singlehero = ({ match, history }) => (
  <div>
    Edit Single Hero
    <div>
      <h2>NARCO Details</h2>
      <div>
        <span>id: </span>
        {match.params.id}
        <label>
          {" "}
          name: <input type="text" className="inputbtn" />
        </label>
      </div>
      <button onClick={history.goBack}>go back</button>
      <button>save</button>
    </div>
  </div>
);

export default withRouter(Singlehero);
