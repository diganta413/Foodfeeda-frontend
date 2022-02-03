import "./styles/styles.css";
import Home from "./pages/home";
import Header from "./components/Header/header";
import User from "./pages/User";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
            
            <Route path="/user" exact element={<User/>}/>
            <Route path="/" exact element={<Home/>}/>
        </Routes>
    </Router>
  );
};

export default App;
