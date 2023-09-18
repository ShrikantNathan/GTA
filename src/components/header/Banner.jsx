import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

export const Banner = () => {
  const [banner, setBanner] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://40.112.58.27:3002/technology-main-banner/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBanner(data);
        setIsLoading(false);
      } catch (error) {
        setError('Failed to fetch data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="image-wrapper">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="label-main-wrapper">
          {banner.map((item) => (
            <div key={item.id} className="banner-item">
              <div className="overlay">
                <h1 className="cloud-computing">
                  <span className="text-wrapper">{item.title}</span> <br />
                  <span className="span">{item.subtitle}</span>
                </h1>
                <p className="text">{item.description}</p>
                <div className="learn-more">
                  <Link className="nav-link" to="/CloudComputing">
                    <button className="btn2" type="submit">
                      <span className="learn-more-text">Learn more</span>
                      <img src={item.icon} alt="group" height="25px" />
                    </button>
                  </Link>
                </div>
              </div>
              <img src={item.image} alt="group" className="banner-image" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
