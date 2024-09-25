import React from 'react';
import Ticker from '../utils/GsapTicker';

const AboutTextSlider: React.FC = () => {
  const customCloneFunction = (el: HTMLDivElement | undefined, direction: 'left' | 'right') => {
    if (!el) return document.createElement('div');
  
    const clonedElement = el.cloneNode(true) as HTMLDivElement;
    clonedElement.textContent = 'Power, Fitness and Strength';
  
    const separator = document.createElement('span');
    separator.textContent = ' . ';
  
    const container = document.createElement('div');
  
    if (direction === 'left') {
      container.appendChild(clonedElement);
      container.appendChild(separator);
    } else {
      container.appendChild(separator);
      container.appendChild(clonedElement);
    }
  
    return container;
  };
  

  return (
    <>
      <div className="about-10-text-sliders mb-2">
        <div className="single-text-slider">
          <Ticker direction="left">
            <div>Power, Fitness and Strength</div>
            <div>Power, Fitness and Strength</div>
          </Ticker>
        </div>
      </div>

      {/* Add some space between the two sets of text sliders */}
      <div style={{ margin: '20px' }} />

      <div className="about-10-text-sliders about-10-text-sliders-2">
        <div className="single-text-slider">
          <Ticker 
          direction="right">
            <div>Power, Fitness and Strength</div>
            <div>Power, Fitness and Strength</div>
          </Ticker>
        </div>
      </div>
    </>
  );
};

export default AboutTextSlider;
