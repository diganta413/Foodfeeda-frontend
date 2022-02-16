import { useEffect, useState } from "react";
import { Button } from "antd";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegsiterModal";

const Header = () => {
  const [loginmodal, setloginmodal] = useState(false);
  const [registermodal, setregistermodal] = useState(false);

  const handleClose_login = () => {
    setloginmodal(false);
  };
  const handleClose_register = () => {
    setregistermodal(false)
  }

  return (
    <div className="header">
      <div className="name">
        <img
          src="https://ik.imagekit.io/xye1mzry4hu/tr:w-200/foodfeeda_UIWymoc1J.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643893705054"
          alt="logo"
        />
      </div>
      <div className="loginBtns flex">
        <Button onClick={() => setloginmodal(!loginmodal)}>Log in</Button>
        <Button onClick={() => setregistermodal(!registermodal)} className="ml-[10px] border-2">Register</Button>
      </div>
      <LoginModal visible={loginmodal} handleClose={handleClose_login} />
      <RegisterModal visible={registermodal} handleClose={handleClose_register}/>
    </div>
  );
};

export default Header;
