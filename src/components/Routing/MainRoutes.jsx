import { Routes, Route } from "react-router-dom";
import Main from '../../pages/main/Main'
import Blogs from '../../pages/blogs/Blogs'
import RegenerativeAgriculturalPractices from "../../static_data/blogs/RegenerativeAgriculturalPractices";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/blogs" element={<Blogs />}>
                <Route path="agriculture-practices" element={<RegenerativeAgriculturalPractices />} />
            </Route>
            <Route path="*" element={<p>ERROR</p>}/>
        </Routes>
    );
};

export default MainRoutes;