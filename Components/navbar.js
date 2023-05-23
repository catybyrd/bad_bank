import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const pageLinks = useMemo(
    () => [
      {
        name: "Home",
        url: "/",
        description: "Click here to return Home",
        tooltip: "description"
      },
      {
        name: "Create Account",
        url: "/createaccount",
        description: "Click here to create a new account",
        tooltip: "description"
      },
      {
        name: "Deposit",
        url: "/deposit",
        description: "Click here to make a deposit",
        tooltip: "description"
      },
      {
        name: "Withdraw",
        url: "/withdraw",
        description: "Click here to make a withdrawal",
        tooltip: "description"
      },
      {
        name: "All Data",
        url: "/alldata",
        description: "Click here to view all data",
        tooltip: "description"
      }
    ],
    []
  );
  

  useEffect(() => {
    pageLinks.forEach((page) => {
      if (page.url === location.pathname) {
        document.title = page.name;
      }
    });
  }, [location.pathname, pageLinks]);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  }; 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
       
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isNavCollapsed ? "" : "show"
          }`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            {pageLinks.map((page, key) => {
              return (
                <li
                  key={key}
                  className={`nav-item ${
                    location.pathname === page.url ? "active" : ""
                  }`}
                >
                  <NavLink to={page.url} className="nav-link" data-description={page[page.tooltip]}>
                  {page.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;