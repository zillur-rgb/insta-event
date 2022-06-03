import { useState } from "react";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

const Auth = () => {
  const [active, setActive] = useState<boolean>(true);
  return (
    <div className="w-full mx-auto">
      <div className="w-1/4 mx-auto">
        <button
          onClick={(): void => setActive(true)}
          className={`w-1/2 py-3 ${
            active
              ? "bg-main text-white hover:bg-opacity-60 border border-black border-opacity-10"
              : "bg-white border border-black border-opacity-10"
          }`}
        >
          Login
        </button>
        <button
          onClick={(): void => setActive(false)}
          className={`w-1/2 py-3 ${
            !active
              ? "bg-main text-white hover:bg-opacity-60"
              : "bg-white border border-black border-opacity-10"
          }`}
        >
          Register
        </button>
      </div>
      {active && <Login />}
      {!active && <Signup />}
    </div>
  );
};

export default Auth;
