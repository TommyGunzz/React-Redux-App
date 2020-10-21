import React from "react";
import { connect } from "react-redux";
import { activity } from "../action/actions";



function HeaderBored(props) {
  return (
    <div>
      {props.loading ? (
        <h1>Loading</h1>
      ) : (
        <h1> Help!</h1>
      )}
      <button className="random-activity"
        onClick={() => { props.activity(); }} > Get Random activity
      </button>
    </div>
  );
}

export default connect(
  state => {
    return {activity: state.activity };
  },
  { activity }
)(HeaderBored);