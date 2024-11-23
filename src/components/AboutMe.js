import React, { useState } from 'react';
import cvPdf from '../assets/cv.pdf'; // Mengimpor file PDF
import myPhoto from '../assets/foto.saya.jpg'; // Mengimpor foto

function AboutMe() {
  // State untuk mengubah background color dan color text
  const [bgColor, setBgColor] = useState('#f8f9fa'); // default light background
  const [textColor, setTextColor] = useState('#000'); // default text color (black)

  // Fungsi untuk mengubah warna background dan teks
  const changeBackgroundColor = (color) => {
    setBgColor(color);
    if (color === '#343a40') {
      setTextColor('#fff'); // Jika background gelap, ubah teks menjadi putih
    } else {
      setTextColor('#000'); // Jika background terang, ubah teks menjadi hitam
    }
  };

  return (
    <section id="about" className="py-5" style={{ backgroundColor: bgColor }}>
      <div className="container text-center">
        {/* Hero Section with Image */}
        <div className="mb-4">
          <img 
            src={myPhoto} // Menggunakan file gambar yang diimpor
            alt="Novi Diana Ningsih" 
            className="rounded-circle img-fluid" 
            style={{ width: '300px', height: '400px' }} // Ukuran foto lebih kecil
          />
        </div>

        <h2 className="mb-4" style={{ color: textColor }}>About Me</h2>
        <p className="lead" style={{ color: textColor }}>
          Hi! I'm Novi Diana Ningsih, mahasiswa semester 3 Program Studi Teknologi Informasi di Universitas Aisyiyah Yogyakarta. Saya memiliki minat dalam pengembangan teknologi digital dan terus mengembangkan keahlian di bidang pemrograman, analisis data, dan pengelolaan sistem informasi. Dengan semangat belajar yang tinggi, saya berkomitmen untuk memberikan kontribusi positif di dunia teknologi.
        </p>
        
        {/* Tombol Download CV */}
        <a 
          href={cvPdf} // Menggunakan path yang diimpor untuk file PDF
          download 
          className="btn btn-primary mt-4"
        >
          Download CV
        </a>

        {/* Tombol untuk Mengubah Background */}
        <div className="mt-4">
          <button className="btn btn-secondary me-2" onClick={() => changeBackgroundColor('#f8f9fa')}>Light</button>
          <button className="btn btn-dark" onClick={() => changeBackgroundColor('#343a40')}>Dark</button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
