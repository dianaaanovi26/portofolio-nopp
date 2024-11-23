import React from "react";
import "./PortfolioBanner.css";
import BannerImage from "../assets/banner-image.jpg"; // Path ke gambar di folder assets

const PortfolioBanner = () => {
  return (
    <section
      className="portfolio-banner"
      style={{
        backgroundImage: url(${BannerImage}),
      }}
      
    >
      <div className="profile-section">
        <img
          src={require("../assets/banner-image.jpg")} // Pastikan ini sesuai path untuk gambar profil Anda
          alt="Profile"
          className="profile-img"
        />
        <div className="banner-text">Creative Portfolio</div>
      </div>
      <h1>PORTFOLIO</h1>
      <h2>By Jaehyun's girl</h2>
      <div>
        <button className="btn btn-primary">Hubungi</button>
        <button className="btn btn-outline-secondary">Lihat Proyek</button>
      </div>
    </section>
  );
};

export default PortfolioBanner;
