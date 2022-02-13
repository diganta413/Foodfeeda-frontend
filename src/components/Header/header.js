import { useEffect, useState } from "react";
import { LoginOutlined } from "@ant-design/icons";
import AuthModal from "../Modals/AuthModal";

const Header = () => {
  const [modal, setmodal] = useState(false);
  console.log(modal);

  const handleClose = () => {
    setmodal(false);
  };

  return (
    <div className="header">
      <div className="name">
        <img
          src="https://ik.imagekit.io/xye1mzry4hu/tr:w-200/foodfeeda_UIWymoc1J.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643893705054"
          alt="logo"
        />
      </div>
      <div className="loginBtns">
        <LoginOutlined
          className="text-[30px] cursor-pointer"
          onClick={() => setmodal(!modal)}
        />
      </div>
      <AuthModal visible={modal} handleClose={handleClose} />
    </div>
  );
};

export default Header;
