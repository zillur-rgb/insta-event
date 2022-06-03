import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

const Auth = () => {
  return (
    <div className="w-full mx-auto">
      <div className="w-1/4 mx-auto">
        <button className="w-1/2 bg-slate-400">Register</button>
        <button className="w-1/2">Login</button>
      </div>
      <Login />
      <Signup />
    </div>
  );
};

export default Auth;
