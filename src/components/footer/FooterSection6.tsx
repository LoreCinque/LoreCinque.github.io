import Link from "next/link";
import React from "react";

const FooterSection6 = () => {
  return (
    <div className="pc-copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <p className="pc-copyright-content">
              Copyright <Link href="#">Porichiti</Link>{" "}
              {new Date().getFullYear()} All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection6;
