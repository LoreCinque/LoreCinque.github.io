import React from 'react'
import ServiceSection4 from './ServiceSection4';
type Props = {
    sectionOpen : boolean;
    handleClose: () => void;
}
const ServicePopupSection = ({sectionOpen,handleClose} : Props) => {
  return (
    <div className={`tc-popup-modal ${sectionOpen && 'active'}`} id="popup-service" data-bgcolor="#102a3c">
            <button 
            className="tc-popup-close-btn"
            onClick={handleClose}
            ><i className="fa-solid fa-times"></i></button>
            <ServiceSection4 />
        </div>
  )
}

export default ServicePopupSection