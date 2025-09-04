import {LOGIN_USER,LOGOUT_USER} from './actions'

const initialValues = null;

export const reducer = (state=initialValues, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return  action.payload
    case LOGOUT_USER:
      return null
    default:
      return state;
  }
};
