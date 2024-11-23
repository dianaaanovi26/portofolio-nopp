import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, Plugin } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the necessary components for chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

function MySkills() {
  const skills = ['Editing', 'bisa kerja tim', 'Time Managementt', 'Problem-Solving', 'Adaptability'];

  // Skill proficiency data (percentages)
  const skillLevels = [90, 80, 85, 70, 75];

  // Data for the pie chart with bright colors
  const data = {
    labels: skills, // Labels for each section of the pie chart
    datasets: [
      {
        data: skillLevels, // Data representing the proficiency levels
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)', // Bright orange
          'rgba(75, 192, 192, 0.6)', // Bright teal
          'rgba(255, 205, 86, 0.6)', // Bright yellow
          'rgba(54, 162, 235, 0.6)', // Bright blue
          'rgba(153, 102, 255, 0.6)', // Bright purple
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'My Skill Proficiency ',
        color: '#fff', // Title text color
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`; // Display percentage in tooltip
          },
        },
      },
      // Enable data labels for each slice of the pie chart
      datalabels: {
        formatter: (value, context) => {
          return `${value}%`; // Display percentage inside each sector
        },
        color: '#fff', // Color of the percentage text
        font: {
          weight: 'bold', // Bold text
        },
        padding: 5,
      },
    },
  };

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: '#333', color: '#fff' }}>
      <div className="container">
        <h2 className="text-center mb-4">My Skills</h2>

        {/* Display Pie Chart centered with larger size */}
        <div className="mb-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
          <Pie data={data} options={options} />
        </div>

        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card shadow-sm">
                <div className="card-body text-center" style={{ backgroundColor: '#444', color: '#fff' }}>
                  <h5 className="card-title">{skill}</h5>
                  <p>{`Proficiency: ${skillLevels[index]}%`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MySkills;
