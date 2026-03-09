import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCursor } from '../context/CursorContext';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import { Application } from '@splinetool/runtime';
import ClockImg from '../assets/clock.png';
import Fight from "../assets/game.png"
import Gaze from '../assets/gaze_bubble.png';
import AiBug from '../assets/bug.png';
import Ecommerce from '../assets/Ecommerce.png';
import RAG from "../assets/rag_new.gif"

const Home = () => {
  const { onCursor } = useCursor();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/7G23JLxC6Byu0QlF/scene.splinecode');
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
        {
            id: 1,
            image: RAG,
            title: 'AI Codebase Assistant (RAG-based Developer Tool)',
            description: 'An AI-powered Codebase Assistant that allows developers to chat with any GitHub repository. The system clones a repository, indexes the code, generates embeddings, and uses Retrieval-Augmented Generation (RAG) to answer developer questions about the codebase. This helps developers understand large repositories faster without manually exploring every file.',
            tags: ['FastAPI', 'Next.Js', 'OpenAI API', 'FAISS','Vector Search','Embeddings','RAG'],
            github: 'https://github.com/Pandidurai-22/Intelligent_Codebase_RAG_System/tree/main',
            category:'AI',
            category:'Full Stack'
          },
    {
      id: 2,
      image: Ecommerce,
      title: 'E-Commerce Order & Inventory Management System — Backend',
      description: 'Designed and implemented a scalable e-commerce backend featuring JWT-based authentication, role-based access control (ADMIN / CUSTOMER), product and inventory management, order lifecycle handling, and transactional database operations. Secured APIs using Spring Security and deployed containerized services with Docker to simulate real-world production systems.',
      tags: ['Java', 'Spring-Boot', 'Spring Security', 'PostgreSQL','Docker','RESTAPIs'],
      github: 'https://github.com/Pandidurai-22/E-Commerce-Order-Inventory-Management-System-Java-Spring-Boot-.git',
    },
    {
      id: 3,
      image: AiBug,
      title: 'AI Powered Bug Tracker',
      description: 'A full-stack bug tracking application with AI-powered analysis for efficient issue management. Built with Spring Boot and React, this application helps teams track, prioritize, and resolve bugs effectively.',
      tags: ['React.js', 'Tailwind CSS', 'PostgreSQL', 'Spring Boot', 'AI','Java'],
      github: 'https://github.com/Pandidurai-22/Bug-Tracker',
      live: 'https://bugtrackerclient-mu.vercel.app/',
    },
    {
      id: 4,
      image: Gaze,
      title: 'Eye gaze tracking',
      description: 'Realtime eye gaze bubble follows your eye gaze on top of background image.',
      tags: ['Python', 'Linear Regression', 'Deep learning', 'AI'],
      github: 'https://github.com/Pandidurai-22/gaze_bubble',
      live: '#',
    },

  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-blue-700">Pandi Durai</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-black dark:text-black mb-8"
              variants={itemVariants}
            >
              Software Engineer
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={itemVariants}
            >
              <Link
                to="/projects"
                className="btn btn-primary group hover:bg-white hover:text-black dark:text-black"
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={() => onCursor('default')}
              >
                View My Work
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#contact"
                className="btn btn-primary hover:bg-white hover:text-black dark:text-black"
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={() => onCursor('default')}
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* 3D Background */}
        <div 
          className="absolute inset-0 w-full h-full "
          style={{ zIndex: 0 }}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full opacity-60 dark:opacity-90"
          />
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
            <div className="w-0.5 h-12 bg-gray-400 dark:bg-gray-600 rounded-full">
              <div className="w-2 h-2 bg-primary-500 rounded-full mx-auto animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="section-title">About Me</h2>
            <div className="prose dark:prose-invert max-w-none text-left mx-auto">
              <p className="text-lg mb-6">
                I'm a Software Engineer with 2+ years of hands-on experience in building 
  high-performance web applications and AI/ML solutions. With expertise in both 
  frontend (React, Next.js) and backend (Python, MySQL, Spring Boot) technologies, 
  I focus on creating scalable, efficient, and user-friendly digital experiences.
              </p>
              <p className="text-lg mb-8">
                 My journey in software development began with an internship at IITM Pravartak, 
  where I worked on automation and system performance. Since then, I've contributed 
  to projects ranging from deep learning–based gaze tracking on Raspberry Pi to 
  full-stack AI web applications and LMS platforms. I’m currently pursuing a B.S. in 
  Data Science & Applications at IIT Madras, and I’m always eager to explore new 
  tools, frameworks, and methodologies to stay ahead in this fast-evolving field.

              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Deep Learning',
                  'LLM',
                  'RAG',
                  'React.js',
                  'Next.js',
                  'Python',
                  'Java',
                  'Node.js',
                  'PostgreSQL',
                  'MongoDB',
                  'Tailwind CSS',
                  'Git & GitHub',
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white text-black dark:text-white dark:bg-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                    onMouseEnter={() => onCursor('hover')}
                    onMouseLeave={() => onCursor('default')}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white text-black dark:text-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover-lift"
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => onCursor('hover')}
                  onMouseLeave={() => onCursor('default')}
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                    {/* Project image placeholder */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      {project.image ? <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> : project.id}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        Live Demo
                        <FiExternalLink className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/projects"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium"
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={() => onCursor('default')}
              >
                View All Projects
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              onMouseEnter={() => onCursor('hover')}
              onMouseLeave={() => onCursor('default')}
            >
              Get In Touch
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
