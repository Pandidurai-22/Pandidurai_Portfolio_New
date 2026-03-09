import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { FiAward, FiCode, FiLayers, FiUsers } from 'react-icons/fi';
import profileImage from "../assets/about_2.jpg"; // Import your profile image

const About = () => {
  const { onCursor } = useCursor();

  const stats = [
    { id: 1, value: '2+', label: 'Years Experience', icon: <FiAward className="w-8 h-8" /> },
    { id: 2, value: '15+', label: 'Projects Completed', icon: <FiCode className="w-8 h-8" /> },
    { id: 3, value: '5+', label: 'Happy Clients', icon: <FiUsers className="w-8 h-8" /> },
    { id: 4, value: '10+', label: 'Technologies', icon: <FiLayers className="w-8 h-8" /> },
  ];

  const skills = [
    {name: 'AI/ML', items:['Deep Learning','Computer vision','LLM','RAG', 'NLP']},
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS','Bootstrap','Redux'] },
    { name: 'Backend', items: ['Python(Django)','Java(Springboot)','Php','Node.js', 'Deep learning', 'PostgreSQL'] },
    { name: 'Tools', items: ['Git', 'Docker', 'Figma', 'Postman'] },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 dark:text-gray-800">
          Software Engineer with 2+ years of experience building, training, and deploying deep learning models into production. Strong
hands-on expertise in computer vision, NLP, and end-to-end ML pipelines using TensorFlow and PyTorch. Experienced in
full-stack development, containerized deployments, and CI/CD workflows for scalable AI systems.
{/* I'm a Software Engineer with 2+ years of experience and I also specialize in AI/ML solutions, including deep learning projects like gaze tracking on Raspberry Pi, 
leveraging TensorFlow, PyTorch, and OpenCV. With hands-on experience in CI/CD pipelines using Docker and Jenkins, 
I bridge development, data science, and DevOps to deliver impactful solutions. */}
{/* building scalable, user-focused applications. Skilled in frontend (React, Next.js, Tailwind CSS) 
and backend (Python, MySQL, Spring Boot), I create seamless digital experiences from design to deployment.  */}

        </p>
      </motion.div>

      {/* Stats */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5
                }
              }
            }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center hover-lift"
            onMouseEnter={() => onCursor('hover')}
            onMouseLeave={() => onCursor('default')}
          >
            <div className="text-primary-500  dark:text-primary-400 mb-3 flex justify-center">
              {stat.icon}
            </div>
            <h3 className="text-3xl dark:text-white font-bold  mb-1">{stat.value}</h3>
            <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
  {/* Text Section */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-bold mb-6">Who I Am</h2>
    <div className="prose dark:prose-invert max-w-none">
      <p className="mb-4">
        I'm a Software Engineer with hands-on experience in full stack development and AI/ML. 
        My journey started with a strong foundation in Information Technology, and since then 
        I've been building scalable applications and intelligent systems that solve real-world problems.
      </p>
      <p className="mb-4">
        I specialize in developing responsive and performant web applications using React, Next.js, 
        Python, and MySQL, while also working on deep learning projects with TensorFlow, PyTorch, 
        and OpenCV. I enjoy bridging web development, data science, and DevOps by optimizing 
        CI/CD pipelines with Docker and Jenkins.
      </p>
      <p>
        When I'm not coding, you can find me exploring new technologies, contributing to open-source 
        projects.
      </p>
    </div>
  </motion.div>

  {/* Profile Section */}
  <motion.div
    className="flex flex-col items-center text-center relative"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="relative">
      <div className="bg-primary-500/10 dark:bg-primary-500/20 w-64 h-64 rounded-2xl"></div>
      <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border-4 border-primary-500 rounded-2xl -z-10"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    <h3 className="text-xl font-bold mt-6">Pandi Durai</h3>
    <p className="text-gray-500 dark:text-gray-600">
      Software Engineer - AI
    </p>
  </motion.div>
</div>


      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => onCursor('hover')}
              onMouseLeave={() => onCursor('default')}
            >
              <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 dark:text-white rounded-full mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
