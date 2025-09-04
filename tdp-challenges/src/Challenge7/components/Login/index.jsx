import LoginForm from "../LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/user/actions";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  if (user) {
    return (
      <div>
        Hello {user.name.firstname}{" "}
        <button onClick={() => dispatch(logoutUser())}>Logout</button>
      </div>
    );
  }

  return <LoginForm />;
};

export default Login;
