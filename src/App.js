import "./styles/styles.css";
import Home from "./pages/home";
import User from "./pages/User";
import Ngo from "pages/Ngo";
import EmailVerify from "./pages/emailVerify";
import Token from "./components/Modals/Token";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Donation from "pages/Donation";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/user/:userid" exact element={<User />} />
                <Route path="/ngo/:userid" exact element={<Ngo />} />
                <Route
                    path="/api/auth/user/email-veryfy"
                    element={<EmailVerify />}
                />
                <Route path="/donate" exact element={<Donation />} />
                <Route path="/" exact element={<Home />} />
            </Routes>
            <Token />
        </Router>
    );
};

export default App;
