// my base component
import React, { useState } from "react";

import { connect } from "react-redux";

import { setEditTrue, setEditFalse } from "../actions/actions"



function Activity(props) {
  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTitleText("")
  }

  return (
    <div>
      {!props.editing ? (
        <h1 onClick={() => {props.setEditTrue(); }} >{props.activity} </h1>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button onClick={() => {props.setEditFalse();}} > Update Activity </button>
          </form>
        </div>
      )}
      {props.loading ? <h1>loading</h1> : null}
    </div>
  );
}

const mapStateToProps = state => {
  return { activity: state.activity, editing: state.editing, loading: state.loading };
};

export default connect(
  mapStateToProps,
  { setEditTrue, setEditFalse }
)(Activity);