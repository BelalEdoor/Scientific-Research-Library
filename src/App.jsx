import './App.css';
import React, { useState } from 'react';
import Header from "./Componants/Header";
import Post from './Componants/Post';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Footer } from './Componants/Footer';
import SideBar from './Componants/SideBar';
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Reaserchers from './Pages/Researchers'
import './index.css';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

 const posts = [
  {
    title: "Building Applications with Artificial Intelligence",
    description: "Artificial intelligence enables developers to create smarter and more interactive applications...",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
  },
  {
    title: "Product Management with Big Data Analytics",
    description: "Modern product management relies on big data analysis to understand user needs...",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
  },
  {
    title: "The Future of Cloud Computing",
    description: "Cloud platforms allow businesses to scale applications quickly and securely...",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  },
  {
    title: "Cybersecurity Threats in 2025",
    description: "New technologies bring new risks—stay informed about the latest in cybersecurity...",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
  },
  {
    title: "Machine Learning in Healthcare",
    description: "AI is revolutionizing diagnostics and treatment plans in the medical field...",
    image: "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg",
  },
  {
    title: "Blockchain for Supply Chain Management",
    description: "Transparency and security in logistics powered by blockchain technology...",
    image: "https://images.pexels.com/photos/6771174/pexels-photo-6771174.jpeg",
  },
  {
    title: "The Rise of Edge Computing",
    description: "Edge computing pushes data processing closer to where it’s needed most...",
    image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
  },
  {
    title: "AR and VR in Education",
    description: "Immersive technologies are transforming how students learn and interact...",
    image: "https://images.pexels.com/photos/7652037/pexels-photo-7652037.jpeg",
  },
  {
    title: "Quantum Computing Explained",
    description: "Quantum computers promise incredible speed for complex problem-solving...",
    image: "https://images.pexels.com/photos/5864152/pexels-photo-5864152.jpeg",
  },
  {
    title: "Digital Twins in Engineering",
    description: "Simulating physical assets virtually can reduce costs and improve safety...",
    image: "https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg",
  },
  {
    title: "Ethical AI: Challenges and Opportunities",
    description: "Designing AI systems that are fair, transparent, and accountable...",
    image: "https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg",
  },
  {
    title: "Smart Cities and IoT Infrastructure",
    description: "Connected devices are reshaping urban spaces into smart, efficient cities...",
    image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
  },
  {
    title: "The Role of DevOps in Agile Teams",
    description: "Collaboration between developers and operations drives faster delivery...",
    image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg",
  },
  {
    title: "Voice Recognition Technology Trends",
    description: "From virtual assistants to smart homes—voice tech is everywhere...",
    image: "https://images.pexels.com/photos/4425730/pexels-photo-4425730.jpeg",
  },
  {
    title: "Sustainable Tech: Green Innovations",
    description: "Explore how technology is being used to protect the environment...",
    image: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg",
  },
  {
    title: "AI in Financial Forecasting",
    description: "Predictive analytics in banking helps manage risk and investments...",
    image: "https://images.pexels.com/photos/669365/pexels-photo-669365.jpeg",
  },
  {
    title: "5G and the Next Mobile Revolution",
    description: "Faster speeds and lower latency are changing mobile app development...",
    image: "https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg",
  },
  {
    title: "Computer Vision for Autonomous Vehicles",
    description: "Learn how self-driving cars see and interpret their environment...",
    image: "https://images.pexels.com/photos/8437008/pexels-photo-8437008.jpeg",
  },
  {
    title: "Data Privacy Laws You Should Know",
    description: "Compliance with GDPR, CCPA, and others is more important than ever...",
    image: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg",
  },
  {
    title: "Augmented Reality in Retail",
    description: "Try before you buy—how AR is enhancing the shopping experience...",
    image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg",
  },
  {
    title: "Building Scalable Web Applications",
    description: "Tips and tools for creating apps that grow with your user base...",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
  },
];


  const actions = [
    { label: "Download", action: () => alert("Downloaded!") },
    { label: "Preview", action: () => alert("Previewing...") }
  ];

  return (
    <div className="App bg-gradient-to-br from-cyan-100 to-white min-h-screen">
<Header isSidebarOpen={showSidebar} toggleSidebar={() => setShowSidebar(!showSidebar)} />

      {/* السايد بار */}
      {showSidebar && (
        <>
          <SideBar toggleSidebar={() => setShowSidebar(false)}/>
          
        </>
      )}

      <Routes>
        <Route path="/" element={
          <main className="max-w-5xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Latest Research Papers</h1>
            <div className="space-y-6">
              {posts.map((user) => (
                <Post key={user.title} user={user} actions={actions} />
              ))}
            </div>
          </main>
        } />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Login' element = {<Login/>} />
        <Route path='/SignUp' element = {<SignUp/>}/>
        <Route path='/Researchers' element={<Reaserchers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
