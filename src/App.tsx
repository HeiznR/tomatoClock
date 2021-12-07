import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import Settings from "./pages/Settings";
import "./App.scss";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default App;
