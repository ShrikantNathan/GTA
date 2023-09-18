import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../../src/assest/Group134.png';
import navicon from '../../assest/Group 121.svg';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <Link to="/" className="gta d-flex align-items-center">
          <img className="group mr-5" alt="Group" src={logo} width={100} height={43.581} margin={10} />
        </Link>
        <h4 className="georgetown-analytics mb-0" style={{ display: "inline-grid", color: "#fff" }}>
          Georgetown Analytics<br />
          and Technology
        </h4>

        <div className={styles.hamburger} onClick={toggleSidebar}>
          &#9776; <div className={`${styles.bar} ${isOpen ? styles.active : ''}`} />
        </div>
      

      <ul className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}>
        <NavDropdown title="Technology" id="basic-nav-dropdown" className={styles.navLink}>
          <NavDropdown.Item as={Link} to="/DataScience" onClick={closeSidebar}>Data Science</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/CloudComputing" onClick={closeSidebar}>Cloud Computing</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/DataBase" onClick={closeSidebar}>Database</NavDropdown.Item>
          
        </NavDropdown>
        <Link to="/CloudComputing" className={styles.navLink} onClick={closeSidebar}>Cloud Computing</Link>
        <Link to="/DataScience" className={styles.navLink} onClick={closeSidebar}>Data Science</Link>
        <Link to="/Market" className={styles.navLink} onClick={closeSidebar}>Market</Link>
        <Link to="/Services" className={styles.navLink} onClick={closeSidebar}>Resources</Link>
        <Link to="/ImageGenerator"><img className={styles.naviconimg} src={navicon} alt="naviconimg" height={30} onClick={closeSidebar} /></Link>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
