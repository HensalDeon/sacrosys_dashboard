import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import DashBoard from "./Pages/DashBoard";
import "./App.css";
function App() {
    return (
        <div className="bg-[#121212] p-8">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
        </div>
    );
}

export default App;
