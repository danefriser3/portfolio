// src/pages/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white py-20 px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hi, I'm <span className="text-yellow-300">Daniele Parisi</span>
            </h1>
            <div>
              <p className="text-lg md:text-xl break-words">
                Developer with ~10 years of working experience in software
                companies.
              </p>
              <p className="text-lg md:text-xl break-words">
                Bachelor's degree in Bachelor of Science at University of
                studies Federico II.
              </p>
              <p className="text-lg md:text-xl break-words">
                Strongly oriented in developing efficient and strong web
                solutions
              </p>
              <p className="text-lg md:text-xl break-words">
                and interested in engineering and software development
                companies.
              </p>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              <a
                href="#projects"
                className="bg-yellow-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 hover:shadow-xl transition"
              >
                My Projects
              </a>
              <Link
                to="/#contact"
                className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transition"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <img
            src="/profilo_buono.jpg"
            alt="Developer working on laptop"
            className="w-80 md:w-96 lg:w-[325px] rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "React", icon: "⚛️" },
              { title: "TypeScript", icon: "📜" },
              { title: "Node.js", icon: "🌐" },
              { title: "Tailwind CSS", icon: "🎨" },
              { title: "JavaScript", icon: "💻" },
              { title: "Python", icon: "🐍" },
              { title: "Java", icon: "☕" },
              { title: "Git", icon: "🔗" },
            ].map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition"
              >
                <div className="text-5xl mb-3">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-white dark:bg-gray-900" id="about">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            My Journey
          </h2>
          <div className="flex flex-col space-y-8">
            {[
              {
                year: "2021 - 2024",
                title:
                  "Front-End-Focused Full-Stack Developer at Hitachi Vantara",
                description: `Worked as a Front-End-Focused Full-Stack Developer for approximately 3 years, an experience that has allowed me to expand my knowledge and skills in various areas of development. My main focus has been on front-end development, where I have been able to apply my creativity and technical abilities to bring visually appealing and user-friendly websites to life.`,
              },
              {
                year: "2020 - 2021",
                title: "Full Stack Developer at Luebke Consulting",
                description: `Worked on an internal project oriented for managers coaching.`,
              },
              {
                year: "2017 - 2019",
                title: "Full Stack Developer at SEOCube",
                description: `During my time at the company, I had the opportunity to work on a groundbreaking internal project that was designed specifically for SEO specialists. This project was a major undertaking for the company and it required a dedicated team to bring it to fruition. As a member of this team, I was able to contribute my skills and expertise to help make this project a success.`,
              },
              {
                year: "2017",
                title: "Back End focused Full Stack Developer at Indra",
                description:
                  "Short term period job, where I worked as a backend development working with a Java Spring boot based stack, togheter with Oracle as RDBMS.",
              },
              {
                year: "2016",
                title: "Embedded Developer at STMicroelectronics",
                description: "Job experience during my last university year.",
              },
              {
                year: "2012 - 2016",
                title:
                  "Computer Science Bachelor's Degree at University of studies Federico II",
                description:
                  "Bachelor's degree in Computer Science at University of studies Federico II, Naples.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <span className="text-xl w-[10%] font-bold text-indigo-500">
                  {item.year}
                </span>
                <div className="w-[90%]">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Showcase */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800" id="projects">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Task Manager",
                description:
                  "An intuitive app for managing daily tasks efficiently.",
                image: "/task-manager.png",
                link: "https://vite-app-flax-zeta.vercel.app/",
              },
              {
                title: "Portfolio Website",
                description:
                  "A personal website showcasing my skills and projects.",
                image: "/portfolio.png",
                link: "/",
              },
              {
                title: "E-commerce Platform",
                description:
                  "A scalable finance family manager with a seamless UI.",
                image: "/ecommerce.png",
                link: "https://family-app-fe.vercel.app/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <Link
                  target="_blank"
                  to={project.link}
                  className="text-indigo-500 hover:underline"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-8 bg-white" id="contact">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg  shadow-[-2px_2px_6px_2px_rgba(0,0,0,0.5)]">
          <label className="block mb-4">
            <span className="text-gray-700">Your Name</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-2 p-1 border-gray-300 shadow-sm focus:ring focus:ring-blue-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-2 p-1 border-gray-300 shadow-sm focus:ring focus:ring-blue-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea className="mt-1 block w-full rounded-md border-2 p-1 border-gray-300 shadow-sm focus:ring focus:ring-blue-500"></textarea>
          </label>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
