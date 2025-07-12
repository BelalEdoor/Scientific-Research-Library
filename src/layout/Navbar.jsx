import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700 dark:text-blue-400">
          <Link to="/">Scientific Library</Link>
        </div>
        <ul className="hidden md:flex gap-6 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/submit">Submit</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-sm"
        >
          {isDark ? "🌙 Dark" : "☀️ Light" }
        </button>
      </div>
    </nav>
  );
}
