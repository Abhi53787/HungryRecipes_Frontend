const initialState = { name: "" };
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, name: action.payload };
    case "LOGOUT":
      return { ...state, name: "" };
    default:
      return state;
  }
};

export default userReducer;
