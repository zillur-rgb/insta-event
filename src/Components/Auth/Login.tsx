import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    console.log(user);
  }

  let errorMessage: string | undefined = "";
  if (error) {
    errorMessage = error?.message;
  }

  const handleSignIn = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="w-1/4 bg-white py-12 px-12  mx-auto  shadow-lg shadow-slate-200">
      <form onSubmit={handleSignIn}>
        <div className="email my-2">
          <label htmlFor="email" className="text-text font-semibold">
            Email
          </label>
          <br />
          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            id="email"
            className="border border-black border-opacity-10 px-5 py-2 focus:outline-none focus:border-opacity-30 w-full rounded-md"
          />
        </div>
        <div className="password my-2">
          <label htmlFor="password" className="text-text font-semibold">
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            className="border border-black border-opacity-10 px-5 py-2 focus:outline-none focus:border-opacity-30 w-full rounded-md"
          />
        </div>
        <button
          type="submit"
          className="px-12 rounded-full py-4 bg-main text-white font-semibold hover:bg-opacity-80 w-full my-5"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
