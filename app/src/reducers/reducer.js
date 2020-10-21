// my reducer goes here
const initialState = {
    "activity": "Listen to music you haven't heard in a while",
  
    editing: false,
    loading: false,
   
  };

  export const reducer = (state = initialState, action) => {
      switch (action.type) {
      case "EDITING":
      return { ...state, editing: true };

      case "DONE_EDITING":
        return { ...state, editing: false };

      case "LOADING":
        return { ...state, loading: true };

      case "NEW_ACTIVITY":
        return { ...state, loading: false, activity: action.payload };

      default:
        return state;
    }

  };