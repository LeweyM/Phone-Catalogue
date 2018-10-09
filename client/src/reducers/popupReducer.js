const initialState = {
  togglePopup: false,
  popupIndex: -1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "POPUP_TOGGLE":
      return Object.assign({}, state, {
        togglePopup: !state.togglePopup
      });
    case "POPUP_SET_INDEX":
      return Object.assign({}, state, {
        popupIndex: action.index
      });
    default:
      return state;
  }
};
