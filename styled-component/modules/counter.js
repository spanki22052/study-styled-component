const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, { title: action.title, amount: 0 }];
    case "INCREASE_PRODUCT":
      let newState = [...state];
      newState[action.index]["amount"] =
        newState[action.index]["amount"] + action.amount;
      return newState;
    case "REMOVE_PRODUCT":
      newState = [...state];
      newState.splice(action.index, 1);
      return newState;
    default:
      return state;
  }
};
