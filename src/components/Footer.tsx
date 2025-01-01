// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="p-4 bg-gray-100 dark:bg-gray-900 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} MyPortfolio. All Rights Reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/danefriser3" className="hover:text-blue-500">
          GitHub
        </a>
        <a href="https://linkedin.com/in/danieleparisi" className="hover:text-blue-500">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
