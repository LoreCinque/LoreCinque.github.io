import React from 'react'

const SideMenu = () => {
  return (
    <div className="offcanvas-menu-wrap">
        <div className="offcanvas-overlay"></div>
        <div className="offcanvas-menu">
            <div className="offcanvas-menu-top">
                <div className="logo">
                    <a href="index.html">
                        <img src="img/logo-8-black.png" alt="Logo"/>
                    </a>
                </div>
                <button className="close-offcanvas"><i className="fa-thin fa-times"></i></button>
            </div>
            <div className="main-menu">
                <ul>
                    <li><a role="button">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default SideMenu