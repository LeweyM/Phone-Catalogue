const initialState = {
  error: false,
  message: "",
  phones: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PHONES_SET":
      return Object.assign({}, state, {
        phones: action.phones,
        error: false
      });
    case "PHONES_ERROR":
      return Object.assign({}, state, {
        error: true,
        message: action.message
      });
    default:
      return state;
  }
};
