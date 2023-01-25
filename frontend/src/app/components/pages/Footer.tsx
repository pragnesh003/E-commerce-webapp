import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid bg-secondary text-white text-center">
          <div className="row">
            <div className="col-md-3 py-2">
              © {new Date().getFullYear()} React-E-Commerce.com
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
