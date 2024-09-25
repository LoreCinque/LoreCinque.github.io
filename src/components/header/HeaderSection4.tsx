import Link from "next/link";
import React from "react";

const HeaderSection4 = () => {
  return (
    <header className="header-3 pc-header-transparent">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="pc-header-logo">
              <Link href="/">
                <img src="img/logo-4.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="pc-header-icon-bar white-text text-end">
              <Link
                href="#"
                className="def-btn home-7-header-btn"
                data-bgcolor="#8A3CD9"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection4;
