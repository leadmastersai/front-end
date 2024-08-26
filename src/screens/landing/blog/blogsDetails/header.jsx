import React from "react";
import "./styles.scss";
import roi from '../../../../assets/blogdetails/roi.svg';

const Header = () => {
  return (
    <header className="header">
      <h1 className="biggest-text91 padding-h1">Maximizing ROI: How AI-Driven Lead Generation Transforms Digital Marketing Campaigns</h1>
      <img
        src={roi} // Replace with your image path
        alt="Maximizing ROI with AI"
        className="header-image"
      />
    </header>
  );
};

export default Header;
