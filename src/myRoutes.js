import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Atv1 from "./Atv1";
import Atv2 from "./Atv2";
import Atv3 from "./Atv3";

const MyRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Atv1" element={<Atv1 />} />
                <Route path="/Atv2" element={<Atv2 />} />
                <Route path="/Atv3" element={<Atv3 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;