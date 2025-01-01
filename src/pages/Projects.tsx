// src/pages/Projects.jsx
import { useState } from "react";

const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const projects = [
    { id: 1, title: "Task Manager", description: "A powerful app to manage tasks.", tech: ["React", "TypeScript"] },
    { id: 2, title: "Portfolio", description: "This personal portfolio.", tech: ["React", "Tailwind"] },
  ];

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {expanded === project.id ? project.description : project.description.slice(0, 20) + "..."}
            </p>
            <button
              onClick={() => setExpanded(expanded === project.id ? null : project.id)}
              className="mt-2 text-blue-500"
            >
              {expanded === project.id ? "Show Less" : "Show More"}
            </button>
            <div className="mt-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="text-sm bg-gray-200 dark:bg-gray-600 rounded px-2 py-1 mr-2">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
