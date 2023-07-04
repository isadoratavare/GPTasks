import React, { useState } from "react";
import "./style.css";
import Item from "./components/Item";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <aside
          id="logo-sidebar"
          className="fixed 
            top-0 
            left-0 
            z-40 
            w-64 
            h-screen 
            transition-transform 
            -translate-x-full 
            sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 bg-gray">
            <Link to="/">
              <img
                className="h-auto max-w-xs rounded-sm"
                src={require("../../assets/images/logo.svg").default}
                alt="Logo"
              />
            </Link>
            <ul className="space-y-2 font-medium">
              <Link to="/">
                <Item
                  title="Home"
                  Icon={() => (
                    <img
                      src={require("../../assets/images/home.svg").default}
                      alt="Home"
                      className="w-6 h-6"
                    />
                  )}
                />
              </Link>
              <Link to="/boards">
                <Item
                  title="Boards"
                  Icon={() => (
                    <img
                      src={require("../../assets/images/boards.svg").default}
                      alt="Board"
                      className="w-6 h-6"
                    />
                  )}
                />
              </Link>

              <Link to="/settings">
                <Item
                  title="Settings"
                  Icon={() => (
                    <img
                      src={require("../../assets/images/settings.svg").default}
                      alt="Settings"
                      className="w-6 h-6"
                    />
                  )}
                />
              </Link>
              <Link to="/about">
                <Item
                  title="Account"
                  Icon={() => (
                    <img
                      src={require("../../assets/images/account.svg").default}
                      alt="Account"
                      className="w-6 h-6"
                    />
                  )}
                />
              </Link>
              <Item
                title="Log Out"
                Icon={() => (
                  <img
                    src={require("../../assets/images/logout.svg").default}
                    alt="Log Out"
                    className="w-6 h-6"
                  />
                )}
              />
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default SideBar;
