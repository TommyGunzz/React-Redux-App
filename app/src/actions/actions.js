// my actions

import axios from "axios";

export  const setEditTrue = () =>{
return {type:"EDITING"}
}


export const setEditFalse = () => {
    return dispatch => {
    
      setTimeout(() => {
        dispatch({ type: "DONE_EDITING" });
      }, 500);
    };
  };


  export const Activity = () => {
    return dispatch => {
      dispatch({ type: "LOADING" });
      axios
        .get("https://www.boredapi.com/api/activity/")
         
        .then(res => {
          console.log(res.data);  
          dispatch({ type: "NEW_ACTIVITY", payload: res.data.message });
          
        })
        .catch(err => console.log("ERROR:", err));
    };
  };