

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = () => {
  return async (dispatch) => {
    try {
      let res = await fetch('https://fakestoreapi.com/users/2');
      res = await res.json();
      dispatch({
        type: LOGIN_USER,
        payload: res,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
