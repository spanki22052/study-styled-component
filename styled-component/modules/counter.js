const initialState = 1

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return state + action.addNumber;
    default:
      return state;
  }
};
