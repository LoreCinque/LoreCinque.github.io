import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

type TickerProps = {
  children: React.ReactNode;
  direction?: 'right' | 'left';
};

const Ticker: React.FC<TickerProps> = ({ children, direction = 'left' }) => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tickerRef.current) {
      const tickers = [tickerRef.current];
      const clones: HTMLElement[] = [];

      const buildTickers = () => {
        tickers.forEach((el, index) => {
          let inlineWidths: string | undefined;

          if (el instanceof HTMLDivElement) {
            inlineWidths = el.style.width;
            el.style.width = '10000px';
          }

          const width = el.children[0] instanceof HTMLElement ? el.children[0].offsetWidth : 0;
          const cloneCount = Math.ceil(window.innerWidth / width);
          const right = direction === 'right';

          // Adjust the positioning for both 'left' and 'right' directions
          el.style.width = `${width * (cloneCount + 1)}px`;

          if (right) {
            // For 'right' direction, set the initial position to the right
            el.style.left = 'auto';
            el.style.right = '0';
          } else {
            // For 'left' direction, set the initial position to the left
            el.style.left = '0';
            el.style.right = 'auto';
          }

          gsap.fromTo(
            el,
            {
              x: right ? -width : 0,
            },
            {
              x: right ? 0 : -width,
              duration: width / 100,
              repeat: -1,
              overwrite: 'auto',
              ease: 'none',
            }
          );
        });
      };

      buildTickers();

      window.addEventListener('resize', buildTickers);

      return () => {
        window.removeEventListener('resize', buildTickers);

        // Remove clones from the DOM when the component is unmounted
        clones.forEach((el) => {
          el && el.parentNode && el.parentNode.removeChild(el);
        });
      };
    }
  }, [direction]);

  return <div ref={tickerRef}>{children}</div>;
};

export default Ticker;
