import React from 'react'
import PortfolioSection3 from './PortfolioSection3';
type Props = {
    sectionOpen : boolean;
    handleClose: () => void;
}
const PortfolioPopupSection = ({sectionOpen,handleClose} : Props) => {
  return (
    <div className={`tc-popup-modal ${sectionOpen && 'active'}`} id="popup-portfolio" data-bgcolor="#1a1f22">
    <button className="tc-popup-close-btn" onClick={handleClose}><i className="fa-solid fa-times"></i></button>
        <PortfolioSection3 
        style=''
        headingStyle=''
        />
    </div>
  )
}

export default PortfolioPopupSection