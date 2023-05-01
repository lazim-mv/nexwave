import React, { useState, useEffect } from 'react';

function Header() {
  const [backgroundColor, setBackgroundColor] = useState('#000');
  const [textColor, setTextColor] = useState('#e0e0e0');

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const headerHeight = 75;
  //     const sectionHeight = windowHeight - headerHeight;
  //     const section1Height = sectionHeight;
  //     const section2Height = section1Height + sectionHeight;
  //     const section3Height = section2Height + section1Height + 290; // assuming section 3 has 113vh height
  //     const section4Height = section3Height + sectionHeight;
    
  //     // Determine which section is currently visible
    
  //     // Set background and text color based on visible section
  //     if (scrollY < section1Height) {
  //       setBackgroundColor('#000');
  //       setTextColor('#e0e0e0');
  //     }
  //     else if (scrollY < section2Height) {
  //       setBackgroundColor('#e0e0e0');
  //       setTextColor('#000');
  //     }
  //     // Set background and text color for section 3
  //     else if (scrollY < section3Height) {
  //       setBackgroundColor('#000');
  //       setTextColor('#e0e0e0');
  //     }
  //     // Set background and text color for section 4
  //     else if (scrollY < section4Height) {
  //       setBackgroundColor('#e0e0e0');
  //       setTextColor('#000');
  //     }
  //   };
    

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    
    <div className="headerShadowContainer" >
      <div className="headerContainer">
        <div className="headerList" >
          <a href="">Home</a>
          <a href="">Services</a>
        </div>
        <div className="headerContact">
          <button>Contact</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
