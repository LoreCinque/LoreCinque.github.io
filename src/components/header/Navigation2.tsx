import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
type Props = {
  style?: string;
  mobile: boolean;
};
const Navigation2 = ({ style, mobile }: Props) => {
  const pathname = usePathname();
  return (
    <nav
      className={`${style} navbar p-0 ${
        pathname === "/home-4" ? "homepage-4-mobile-nav" : ""
      } ${mobile ? "" : "navbar-expand"}`}
    >
      <div
        className={
          !mobile ? "collapse navbar-collapse" : "mobile-nav-container"
        }
      >
        <ul className="navbar-nav m-auto align-items-center">
          <li className="nav-item">
            <Link className="nav-link" href="#Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#About">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#Service">
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#Portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#Testimonial">
              Testimonial
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#Blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation2;
