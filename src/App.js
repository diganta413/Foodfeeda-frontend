import "./styles/styles.css";
import Home from "./pages/home";
import Header from "./components/Header/header";
import User from "./pages/User";
import EmailVerify from "./pages/emailVerify";
import { getAuth } from "./helpers/cookie";
import Token from "./components/Modals/Token";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/user/:userid" exact element={<User />} />
                <Route
                    path="/api/auth/user/email-veryfy"
                    element={<EmailVerify />}
                />
                <Route path="/" exact element={<Home />} />
            </Routes>
            <Token />
        </Router>
    );
};

export default App;
