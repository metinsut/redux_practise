export const setData = data => {
  console.log("data geldi.")
  return {
    type: "SET_DATA",
    payload: data
  };
};

export const getData = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        dispatch(setData(data))
    });
};
