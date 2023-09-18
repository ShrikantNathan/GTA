// Footer.js
import React from 'react';
import './Footer.css'

const CopyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <hr></hr>
    <footer className="copyfooter">
      <p>&copy; {currentYear}gtanalytics.net. All rights reserved. </p>
    </footer>
    </>
  );
};

export default CopyFooter;
