import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { FiGithub, FiExternalLink, FiFilter, FiX } from 'react-icons/fi';
import project1 from '../assets/google_clone.png';
import Fight from '../assets/game.png';
import Gaze from '../assets/gaze_bubble.png';
import AiBug from "../assets/bug.png"
import project3 from '../assets/clock.png';
import project4 from '../assets/bus.jpg';
import project5 from '../assets/face-de.webp';
import project6 from '../assets/python-tesseract-ocr.png';
import project7 from '../assets/moving.png';
import project8 from '../assets/image encrypt.jpg';
import project9 from '../assets/smart waste.webp';
import project10 from '../assets/twitter.avif';
import Ecommerce from '../assets/Ecommerce.png';
import { desc, image, title } from 'motion/react-client';
import qr from "../assets/Pandidurai_qr_circular.png"

const projects = [
  {
        id: 1,
        image: Ecommerce,
        title: 'E-Commerce Order & Inventory Management System — Backend',
        description: 'Designed and implemented a scalable e-commerce backend featuring JWT-based authentication, role-based access control (ADMIN / CUSTOMER), product and inventory management, order lifecycle handling, and transactional database operations.',
        tags: ['Java', 'Spring-Boot', 'Spring Security', 'PostgreSQL','Docker','RESTAPIs'],
        github: 'https://github.com/Pandidurai-22/E-Commerce-Order-Inventory-Management-System-Java-Spring-Boot-.git',
        category:'Backend',
      },
        {
        id: 2,
        image: Fight,
        title: 'Fighting Game',
        description: 'Designed a real-time 2D canvas rendering engine with collision detection, sprite animation, and keyboard-controlled physics interactions.',
        tags: ['Javascript', 'Html5', 'Canvas Api', 'CSS3'],
        github: 'https://github.com/Pandidurai-22/Fighting-Game-using-Canvas-Api',
        live: 'https://pandidurais-fighting-game.netlify.app/',
        category:'Frontend',
      },
      {
        id: 3,
        image: Gaze,
        title: 'Eye gaze tracking',
        description: "A real-time eye-tracking application that displays a visual bubble overlay on your screen, showing exactly where you're looking. Built with MediaPipe for face detection, OpenCV for camera processing, and Pygame for the transparent overlay display.",
        tags: ['Python', 'Linear Regression', 'Deep learning', 'AI','Computer vision','Mediapipe'],
        github: 'https://github.com/Pandidurai-22/gaze_bubble',
        live: '#',
        category: 'AI',
      },
      {
        id: 4,
        image: AiBug,
        title: 'AI Powered Bug Tracker',
        description: 'A full-stack bug tracking application with AI-powered analysis for efficient issue management. Built with Spring Boot and React, this application helps teams track, prioritize, and resolve bugs effectively.',
        tags: ['React.js', 'Tailwind CSS', 'PostgreSQL', 'Spring Boot', 'AI','Java'],
        github: 'https://github.com/Pandidurai-22/bug-tracker-backend',
        live: 'https://bugtrackerclient-mu.vercel.app/',
        category:'Full Stack',
      },
  {
    id: 5,
    title: 'Smart Waste Management in Metropolitan Cities in IBM',
    description:'This project was developed in my 7th semester college project ,IBM trained us for developing this hardware based project',
    tags:['Arduino Uno','Sensors','Java',],
    image: project9,
    live:'https://drive.google.com/file/d/1HnlWZj_lfdxcKS9p3PjUnHjUhhAkWlGk/view?usp=drive_link',
    category:'Backend',
  },
  {
    id: 6,
    title: 'Bus Booking System Using Java',
    description: 'A Simple bus booking system using basic java syntax and using some classes',
    tags: ['java'],
    image: project4,
    github: 'https://github.com/Pandidurai-22/Bus_Reservation',
    live: '#',
    category: 'Backend',
  },
  {
    id: 7,
    title: 'Twitter Fake Dataset Detection',
    description: 'This project is detecting the fake accounts on twitter(X) by using LSTM MLOps',
    tags: ['Python', 'LSTM', 'Tokenization','MLOps'],
    image: project10,
    github: 'https://colab.research.google.com/drive/1jh1SDqqp4TMg3mZUq1ygaf3fXFQEPxHj?usp=sharing',
    live: '#',
    category: 'AI',
  },
  {
    id:8,
    title: 'Google Clone',
    description: 'A Webpage of google clone using react and tailwind css.',
    tags: ['react.js', 'Tailwind CSS'],
    image: project1,
    github: '#',
    live: 'https://googleclonepandidurai.netlify.app/',
    category:'Frontend',
  },
  {
    id:9,
    image:project3,
    title: 'Analog clock using javascript',
    description: "Created using html5,css3,javascript just for understanding the circular rotation like offsets x,y directions",
    tags:['Javascript','HTML5','CSS3'],
    github:'#',
    live: "https://analogclockpandidurai.netlify.app/",
    category:'Frontend',
  },
  {
    id:10,
    image: qr,
    title: "Vcard(QR) generator using python",
    description:'Business card generator using python fpdf,qr it generates the qr if user scans it automatically saves in contact as suggestion dont need to enter all details for saving a contact',
    tags:['Python','Fpdf','Vcard','QR'],
    github:'https://github.com/Pandidurai-22/V_card-using-python/blob/main/updateddots%20-%20Copy.py',
    live:'#',
    category:'Backend',
  },
  {
    id:11,
    image: project8,
    title:'Image Encryption and Decryption using RSA Algorithm Java',
    description:"This is my college mini project we developed this using rsa algorithm if user uploaded image it encrypt using some password and decrypt only if we enter the password or key",
    tags:['Java','RSA',"Cryptography"],
    github:'https://github.com/Pandidurai-22/ImageEncrypt_decrypt/blob/master/src/SourceCode.java',
    live:'#',
    category:'Backend'
  },
  {
    id:12,
    image: project6,
    title: "Ocr detection using tesseract",
    description:'Ocr detection it detects the text of images and displays it in print or console after analyzing the image',
    tags:['Python','Ocr','tesseract','AI'],
    github:'https://github.com/Pandidurai-22/Projects/blob/main/Label%20recognition/code.py',
    live:'#',
    category:'AI',
  },
  {
    id:13,
    image:project7,
    title:"Real-Time Object Detection using Python & OpenCV",
    description:"A deep learning-based project that uses OpenCV's DNN module with the MobileNetSSD model to detect and classify multiple objects in real time from a webcam feed. It highlights detected objects with bounding boxes and confidence scores.",
    tags:['Python','MobileNetSSD','Realtime','OpenCv'],
    github:'https://github.com/Pandidurai-22/Projects/blob/main/Object%20Recognition/code.py',
    live:'#',
    category:'AI',
  }


  
];

const categories = ['All', 'Frontend','Backend', 'Full Stack','AI'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { onCursor } = useCursor();

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 dark:text-gray-600 mb-8">
          Here are some of my recent projects. Each project represents a unique challenge and learning experience.
        </p>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onMouseEnter={() => onCursor('hover')}
              onMouseLeave={() => onCursor('default')}
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={() => onCursor('default')}
              >
                <FiX className="h-5 w-5" />
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={() => onCursor('default')}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover-lift h-full flex flex-col"
                layout
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={() => onCursor('default')}
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 ">
                    <img src= {project.image} alt={project.title} ></img>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex space-x-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                          aria-label="Live Demo"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="text-center py-16">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <FiFilter className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">
            No projects found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchTerm('');
            }}
            className="mt-4 text-primary-600 dark:text-primary-400 hover:underline"
            onMouseEnter={() => onCursor('hover')}
            onMouseLeave={() => onCursor('default')}
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
