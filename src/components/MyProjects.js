import React from 'react';
import projectImage1 from '../assets/foto4..jpg'; // Gambar untuk Project 1
import projectImage2 from '../assets/foto2.jpg'; // Gambar untuk Project 2
import projectImage3 from '../assets/foto1.jpg'; // Gambar untuk Project 3

function MyProjects() {
  const projects = [
    { 
      name: 'Game Mencari Pasien', 
      description: 'Membuat game Kesehatan dengan bahasa java.', 
      link: '#', 
      imgSrc: projectImage1  // Gambar untuk Project 1
    },
    { 
      name: 'Game Sederhana', 
      description: 'Membuat game mencari harta karun dengan menggunakan kode java.', 
      link: '#', 
      imgSrc: projectImage2  // Gambar untuk Project 2
    },
    { 
      name: 'UMKM INS>CO', 
      description: 'Membuat UI/UX desain.', 
      link: '#', 
      imgSrc: projectImage3  // Gambar untuk Project 3
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-0">
                <img 
                  src={project.imgSrc} 
                  alt={project.name} 
                  className="card-img-top" 
                />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyProjects;
