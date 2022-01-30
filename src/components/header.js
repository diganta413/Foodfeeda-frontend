import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [modal, setModal] = useState(0);

  return (
    <div className="header">
      <div className="name">
        <h2>Foodfeeda</h2>
      </div>
      <div className="navigation">
        <h2>Test1</h2>
        <h2>Test1</h2>
        <h2>Test1</h2>
      </div>
      <div className="loginBtns">
        <button>Sign In</button>
      </div>
      <button
        className="modalBtn"
        onClick={() => setModal(modal === 1 ? 0 : 1)}
      >
        {modal === 0 ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faTimes} />
        )}
      </button>
      {modal === 1 ? (
        <div className="modalContainer">
          <div className="modal">
            <div className="modalContent">
              <h2>Test1</h2>
              <h2>Test1</h2>
              <h2>Test1</h2>
              <button>Sign In</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
