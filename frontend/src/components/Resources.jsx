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
      { name: "Frontend Masters", url: "https://frontendmasters.com/" },
      { name: "CSS Tricks", url: "https://css-tricks.com/" },
      { name: "React Docs", url: "https://react.dev/" }
    ]
  },
  {
    title: "Backend Development",
    description: "Master Node.js, Express, Databases, and APIs.",
    links: [
      { name: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
      { name: "The Odin Project", url: "https://www.theodinproject.com/" },
      { name: "Codecademy - Backend", url: "https://www.codecademy.com/catalog/subject/backend-engineering" },
      { name: "Express.js Docs", url: "https://expressjs.com/" },
      { name: "SQL for Developers", url: "https://sqlzoo.net/" }
    ]
  },
  {
    title: "Full Stack Development",
    description: "Combine frontend and backend for complete applications.",
    links: [
      { name: "Full Stack Open", url: "https://fullstackopen.com/en/" },
      { name: "Udemy - Web Dev Bootcamp", url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/" },
      { name: "Pluralsight", url: "https://www.pluralsight.com/paths/full-stack-web-development" },
      { name: "CS50 by Harvard", url: "https://cs50.harvard.edu/" },
      { name: "The Modern JavaScript Tutorial", url: "https://javascript.info/" }
    ]
  },
  {
    title: "Data Analysis",
    description: "Learn data analysis using Python, SQL, and visualization tools.",
    links: [
      { name: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
      { name: "DataCamp", url: "https://www.datacamp.com/" },
      { name: "Google Data Analytics Certificate", url: "https://www.coursera.org/professional-certificates/google-data-analytics" },
      { name: "Pandas Documentation", url: "https://pandas.pydata.org/docs/" },
      { name: "SQL for Data Analysis", url: "https://mode.com/sql-tutorial/" }
    ]
  },
  {
    title: "Software Testing",
    description: "Master QA, Automation, and Manual Testing techniques.",
    links: [
      { name: "Software Testing Help", url: "https://www.softwaretestinghelp.com/" },
      { name: "Guru99 Testing", url: "https://www.guru99.com/software-testing.html" },
      { name: "Test Automation University", url: "https://testautomationu.applitools.com/" },
      { name: "Selenium Docs", url: "https://www.selenium.dev/documentation/en/" },
      { name: "JUnit Guide", url: "https://junit.org/junit5/docs/current/user-guide/" }
    ]
  },
  {
    title: "Software Development",
    description: "Learn best practices in coding, architecture, and system design.",
    links: [
      { name: "Clean Code by Robert C. Martin", url: "https://www.goodreads.com/book/show/3735293-clean-code" },
      { name: "Design Patterns - Refactoring Guru", url: "https://refactoring.guru/design-patterns" },
      { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
      { name: "MIT OpenCourseWare - Software Engineering", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-005-elements-of-software-construction-fall-2011/" },
      { name: "Roadmap for Developers", url: "https://roadmap.sh/" }
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
