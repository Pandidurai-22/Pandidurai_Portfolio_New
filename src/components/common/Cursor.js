import React, { useContext, useEffect, useRef } from 'react';
import { useCursor } from '../../context/CursorContext';
import { motion } from 'framer-motion';

const Cursor = () => {
  const { cursorVariant, cursorText, cursorColor } = useCursor();
  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const cursorVariants = {
    default: {
      width: 12,
      height: 12,
      x: -6,
      y: -6,
      backgroundColor: cursorColor || "#3b82f6",
    },
    hover: {
      width: 40,
      height: 40,
      x: -20,
      y: -20,
      backgroundColor: cursorColor || "#3b82f6",
      mixBlendMode: "difference"
    },
    click: {
      width: 30,
      height: 30,
      x: -15,
      y: -15,
      backgroundColor: cursorColor || "#3b82f6",
      border: "2px solid #3b82f6"
    },
    text: {
      width: 80,
      height: 80,
      x: -40,
      y: -40,
      backgroundColor: cursorColor || "#3b82f6",
      mixBlendMode: "difference"
    },
    hidden: {
      opacity: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    }
  };

  useEffect(() => {
    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;

      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
      }
    };

    document.addEventListener("mousemove", mouseMove);
    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current;
      
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        
        if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
        
        if (secondaryCursor.current) {
          secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        }
      }
    };
    
    followMouse();
    
    return () => {
      cancelAnimationFrame(positionRef.current.key);
    };
  }, []);

  return (
    <div className="cursor-wrapper">
      <div 
        className="cursor cursor--small" 
        ref={mainCursor}
      ></div>
      <motion.div
        className="cursor cursor--large"
        ref={secondaryCursor}
        variants={cursorVariants}
        animate={cursorVariant}
      >
        {cursorText && (
          <span className="cursor-text">{cursorText}</span>
        )}
      </motion.div>
      <style jsx global>{`
        .cursor-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }
        
        .cursor {
          position: fixed;
          border-radius: 50%;
          transform: translate3d(0, 0, 0);
          pointer-events: none;
          z-index: 9999;
          transition: opacity 0.3s ease;
        }
        
        .cursor--small {
          width: 6px;
          height: 6px;
          left: 0;
          top: 0;
          background-color: #3b82f6;
          z-index: 10000;
        }
        
        .cursor--large {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          left: 0;
          top: 0;
          border: 2px solid #3b82f6;
          background-color: transparent;
        }
        
        .cursor-text {
          font-size: 12px;
          font-weight: 500;
          color: white;
          text-align: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .cursor--large.text .cursor-text {
          opacity: 1;
        }
        
        @media (hover: none) {
          .cursor-wrapper {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Cursor;
