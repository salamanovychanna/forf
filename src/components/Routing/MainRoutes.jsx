import { Routes, Route } from "react-router-dom";
import Main from "../../pages/main/Main";
import Chat from "../Chat/Chat";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/ai-chat" element={<Chat />} />
    </Routes>
  );
};

export default MainRoutes;
