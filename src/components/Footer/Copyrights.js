// Footer.js
import React from 'react';
import './Footer.css'

const CopyFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
    <hr></hr>
    <footer className="copyfooter">
      <p>&copy; {currentYear}gtanalytics.net. All rights reserved. </p>
    </footer>
    </div>
  );
};

export default CopyFooter;
