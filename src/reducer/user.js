const initialUserState = {
  arr: []
};

const users = (state = initialUserState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        arr: action.payload
      };

    default:
      return state;
  }
};

export default users;
