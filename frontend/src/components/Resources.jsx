import React from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const resourcesData = [
  {
    title: "Frontend Development",
    description: "Learn HTML, CSS, JavaScript, React, and more.",
    links: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
      { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" },
      { name: "Frontend Masters", url: "https://frontendmasters.com/" }
    ]
  },
  {
    title: "Backend Development",
    description: "Master Node.js, Express, Databases, and APIs.",
    links: [
      { name: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
      { name: "The Odin Project", url: "https://www.theodinproject.com/" },
      { name: "Codecademy - JavaScript", url: "https://www.codecademy.com/catalog/language/javascript" }
    ]
  },
  {
    title: "Full Stack Development",
    description: "Combine frontend and backend for complete applications.",
    links: [
      { name: "Full Stack Open", url: "https://fullstackopen.com/en/" },
      { name: "Udemy - Web Dev Bootcamp", url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/" },
      { name: "Pluralsight", url: "https://www.pluralsight.com/paths/full-stack-web-development" }
    ]
  },
  {
    title: "UX/UI Design",
    description: "Enhance user experience with great design principles.",
    links: [
      { name: "Interaction Design Foundation", url: "https://www.interaction-design.org/" },
      { name: "UX Design Blog", url: "https://uxdesign.cc/" },
      { name: "Coursera UI/UX", url: "https://www.coursera.org/specializations/ui-ux-design" }
    ]
  }
];

const Resources = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Learning Resources</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {resourcesData.map((resource, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-2">{resource.title}</h2>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <ul className="space-y-2">
                {resource.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                    >
                      🔗 {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
