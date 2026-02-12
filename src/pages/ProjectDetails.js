import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { FiArrowLeft, FiGithub, FiExternalLink, FiTag, FiArrowRight } from 'react-icons/fi';

// Mock data - in a real app, this would come from an API
const projectData = {
  1: {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.',
    longDescription: 'This e-commerce platform was built with a focus on user experience and performance. It includes features like product search, filtering, user authentication, and a secure checkout process with Stripe integration. The admin dashboard allows for easy inventory management and order processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
    image: '/project1.jpg',
    github: '#',
    live: '#',
    category: 'Full Stack',
    features: [
      'Product catalog with filtering and search',
      'User authentication and authorization',
      'Shopping cart functionality',
      'Secure checkout with Stripe',
      'Order history and tracking',
      'Admin dashboard for inventory management'
    ],
    challenges: [
      'Implementing real-time inventory updates',
      'Optimizing performance for large product catalogs',
      'Ensuring secure payment processing',
      'Creating a responsive design for all devices'
    ],
    images: [
      '/project1-1.jpg',
      '/project1-2.jpg',
      '/project1-3.jpg'
    ]
  },
  // Add more projects as needed
};

const ProjectDetails = () => {
  const { id } = useParams();
  const { onCursor } = useCursor();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link
            to="/projects"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            onMouseEnter={() => onCursor('hover')}
            onMouseLeave={() => onCursor('default')}
          >
            <FiArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            onMouseEnter={() => onCursor('hover')}
            onMouseLeave={() => onCursor('default')}
          >
            <FiArrowLeft className="mr-2" /> Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
            <div className="flex space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onMouseEnter={() => onCursor('hover')}
                  onMouseLeave={() => onCursor('default')}
                >
                  <FiGithub className="mr-2" /> Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  onMouseEnter={() => onCursor('hover')}
                  onMouseLeave={() => onCursor('default')}
                >
                  <FiExternalLink className="mr-2" /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Project Image */}
          <div className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 h-64 md:h-96 flex items-center justify-center">
            <div className="text-gray-400">
              Project Image: {project.title}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Project Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="mb-4">{project.longDescription}</p>
              </div>
            </section>

            {/* Project Gallery */}
            {project.images && project.images.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((img, index) => (
                    <div 
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-48 flex items-center justify-center"
                    >
                      <span className="text-gray-400">Screenshot {index + 1}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Project Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FiTag className="mr-2" /> Project Details
              </h3>
              
              {/* Technologies Used */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Challenges */}
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Challenges</h4>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            onMouseEnter={() => onCursor('hover')}
            onMouseLeave={() => onCursor('default')}
          >
            <FiArrowLeft className="mr-2" /> Back to Projects
          </Link>
          
          {/* In a real app, you would have previous/next project navigation */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 dark:text-gray-400">Next Project</span>
            <span className="text-primary-600 dark:text-primary-400 font-medium">
              {project.id === 1 ? 'Task Management App' : 'E-commerce Platform'}
            </span>
            <FiArrowRight className="text-primary-600 dark:text-primary-400" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
