export function popupToggle() {
  return {
    type: "POPUP_TOGGLE"
  };
}

export function popupSetIndex(index) {
  return {
    type: "POPUP_SET_INDEX",
    index
  };
}
