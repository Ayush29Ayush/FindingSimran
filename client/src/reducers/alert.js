//! This is the alert reducer
import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
    //! Destructuring so that we don't have to write action.type & action.payload everytime
    const {type,payload} = action

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
