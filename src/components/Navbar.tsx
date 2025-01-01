const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-end" >
      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/#projects">Projects</a>
        <a href="/#about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
