import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Login from "../components/Login/login";

const AllPages = () => {
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default AllPages;