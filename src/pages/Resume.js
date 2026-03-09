import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import resumeData from '../data/resume.json';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const downloadResume = () => {
    // Link to your PDF file in public folder
    const link = document.createElement('a');
    link.href = '/Pandidurai_AI_Engineer.pdf'; // Place your PDF in public folder
    link.download = 'Pandidurai_AI_Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            {resumeData.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{resumeData.title}</p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            {resumeData.summary}
          </p>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FiMail size={18} />
              <span className="text-sm">{resumeData.contact.email}</span>
            </a>
            <a
              href={`tel:${resumeData.contact.phone}`}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FiPhone size={18} />
              <span className="text-sm">{resumeData.contact.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FiMapPin size={18} />
              <span className="text-sm">{resumeData.contact.location}</span>
            </div>
          </motion.div>

          {/* Social Links & Download */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 flex-wrap">
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 font-black dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition"
              
            >
              <FiLinkedin size={18} />
              LinkedIn
            </a>
            <a
              href={resumeData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 font-black dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition"
            >
              <FiGithub size={18} />
              GitHub
            </a>
            <button
              onClick={downloadResume}
              className="inline-flex items-center font-black gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition transform hover:scale-105"
            >
              <FiDownload size={18} />
              Download PDF
            </button>
          </motion.div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center mb-12 flex-wrap"
        >
          {['experience', 'education', 'skills', 'projects'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Content Sections */}
        <motion.div variants={containerVariants}>
          {/* Experience */}
          {activeTab === 'experience' && (
            <motion.div variants={itemVariants} className="space-y-6">
              {resumeData.experience.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-blue-600"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {job.position}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400">{job.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                      {job.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{job.location}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <motion.div variants={itemVariants} className="space-y-6">
              {resumeData.education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-purple-600"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400">{edu.school}</p>
                      <p className="text-gray-600 dark:text-gray-400">{edu.field}</p>
                      {edu.gpa && (
                        <p className="text-gray-600 dark:text-gray-400">GPA: {edu.gpa}</p>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                      {edu.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Skills */}
          {activeTab === 'skills' && (
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></span>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-900 dark:text-blue-100 rounded-full text-sm font-semibold hover:shadow-md transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Certifications */}
          {activeTab === 'projects' && (
            <motion.div variants={itemVariants} className="space-y-6">
              {resumeData.projects.map((proj) => (
                <motion.div
                  key={proj.title}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition border-l-4 border-green-600"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {proj.title}
                      </h3>
                      <p className="text-lg line-spacing-2 text-green-600 dark:text-green-400 ">{proj.tech} </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                      {proj.no}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;
