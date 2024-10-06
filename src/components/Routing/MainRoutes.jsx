import { Routes, Route } from "react-router-dom";

import Main from '../../pages/main/Main'
import Blogs from '../../pages/blogs/Blogs'
import RegenerativeAgriculturalPractices from "../../static_data/blogs/RegenerativeAgriculturalPractices";
import Chat from "../Chat/Chat";
import { CardsList } from "../CardsList/CardsList";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blogs" element={<Blogs />}>
                <Route path="agriculture-practices" element={<RegenerativeAgriculturalPractices />} />
            </Route>
            <Route path="/ai-chat" element={<Chat />} />
            <Route path='/dashboard' element={<CardsList/>}/>
            <Route path="*" element={<p>ERROR</p>}/>
        </Routes>
    );

};

export default MainRoutes;
