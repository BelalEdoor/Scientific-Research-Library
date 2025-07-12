import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import About from "./pages/About";
import Authors from "./pages/Authors";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ResearchDetails from "./pages/ResearchDetails";
import Search from "./pages/Search";
import SubmitResearch from "./pages/SubmitResearch";

function App() {
  return (
    <Router>
      <div className="font-sans flex flex-col min-h-screen ">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            {/* مسار ديناميكي يحتوي اسم المجال */}
            <Route path="/details/:fieldName" element={<ResearchDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/submit" element={<SubmitResearch />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
