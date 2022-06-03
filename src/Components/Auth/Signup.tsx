const Signup = () => {
  return (
    <div className="w-1/4 bg-white py-12 px-12 mx-auto  shadow-lg shadow-slate-200">
      <form>
        <div className="displayName my-4">
          <label htmlFor="name" className="text-text font-semibold">
            Fullname
          </label>
          <br />
          <input
            type="name"
            id="name"
            className="border border-black border-opacity-10 px-5 py-2 focus:outline-none focus:border-opacity-30 w-full rounded-md"
          />
        </div>
        <div className="email my-4">
          <label htmlFor="email" className="text-text font-semibold">
            Email
          </label>
          <br />
          <input
            type="email"
            id="email"
            className="border border-black border-opacity-10 px-5 py-2 focus:outline-none focus:border-opacity-30 w-full rounded-md"
          />
        </div>
        <div className="password my-4">
          <label htmlFor="password" className="text-text font-semibold">
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
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

export default Signup;
