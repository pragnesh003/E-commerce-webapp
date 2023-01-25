import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

const Header = () => {
  return (
    <React.Fragment>
      <header className="p-3 border-bottom bg-light">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-md-3 text-center">
              <Link to="/">
                <img alt="logo" src="../../images/logo.webp" />
              </Link>
            </div>
            <div className="col-md-5">
            </div>
            <div className="col-md-4">
              <div className="position-relative d-inline me-3">
                <Link to="/cart" className="btn btn-primary">
                  <IconCart3 className="i-va" />
                </Link>
                <Link to="/order" className="btn btn-outline-primary mx-2">My Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment >
  );
};
export default Header;
