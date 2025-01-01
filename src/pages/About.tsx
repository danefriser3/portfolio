// src/pages/About.jsx
const About = () => {
  return (
    <div className="p-8 bg-white min-h-screen text-gray-800">
      <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed mb-4">
          I'm a passionate developer with over 5 years of experience building
          modern web applications. I specialize in front-end development but
          have a strong full-stack background.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Skills:</h3>
        <ul className="list-disc pl-6">
          <li>React, TypeScript, JavaScript</li>
          <li>Node.js, Express, MongoDB</li>
          <li>Responsive Design, TailwindCSS</li>
          <li>Git, CI/CD pipelines</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
