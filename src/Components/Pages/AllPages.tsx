import { Route, Routes } from "react-router-dom";
import Auth from "./Auth";

const AllPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
};

export default AllPages;
