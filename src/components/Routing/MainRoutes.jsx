import { Routes, Route } from "react-router-dom";
import Main from '../main/Main'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default MainRoutes;