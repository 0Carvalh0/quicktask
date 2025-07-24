import { Route, BrowserRouter as Router, Routes } from "react-router";

import Footer from "./components/Footer";
import FormAdd from "./components/FormAdd";
import FormEdit from "./components/FormEdit";

import "./style/index.css";

function App() {
    return (
        <Router>
            <main className="todoapp">
                <Routes>
                    <Route path="/" element={<FormAdd />} />
                    <Route path="/edit" element={<FormEdit />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
