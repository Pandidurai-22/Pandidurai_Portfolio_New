import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiX } from 'react-icons/fi';
import emailjs from 'emailjs-com';

export default function Contact() {
  const { onCursor } = useCursor();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   try {
  //     // In a real app, you would make an API call here
  //     await new Promise(resolve => setTimeout(resolve, 1500));
      
  //     setStatus({
  //       type: 'success',
  //       message: 'Your message has been sent successfully! I\'ll get back to you soon.'
  //     });
      
  //     // Reset form
  //     setFormData({
  //       name: '',
  //       email: '',
  //       subject: '',
  //       message: ''
  //     });
      
  //   } catch (error) {
  //     setStatus({
  //       type: 'error',
  //       message: 'Something went wrong. Please try again later.'
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      subject: formData.subject,
      to_name:'Recipient Name',
    };
    
    

    emailjs.send(
      'service_0c2bbvq',
      'template_m8qumkj',
      templateParams,
      'Kj_4WieHQ5JLCV_IO'
    ).then((result) => {
      alert('Message sent successfully!,Thank you!!')
      setFormData({name:'',email:'',message:'',subject:''})
    }).catch((error) => {
      console.error('Error:',error);
      alert("Failed to send Mail.. Please try again..")
    }).finally(()=> setIsSubmitting(false));
  }

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      value: 'pandidurai32127@gmail.com',
      link: 'mailto:pandidurai32127@gmail.com'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Phone',
      value: '+919751391299',
      link: 'tel:+919751391299'
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Chennai, India',
      link: 'https://maps.google.com?q=Chennai',
      isExternal: true
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 dark:text-gray-600">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-600">
            Feel free to reach out to me through any of the following channels. I'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4"
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={() => onCursor('default')}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-black ">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      target={item.isExternal ? "_blank" : "_self"} 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              {[
                { name: 'GitHub', url: 'https://github.com/Pandidurai-22' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pandidurai-s-6a30b8212' },
                // { name: 'Twitter', url: 'https://twitter.com/yourusername' },
                { name: 'Dribbble', url: 'https://dribbble.com/pandi-durai-s' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                  onMouseEnter={() => onCursor('hover')}
                  onMouseLeave={() => onCursor('default')}
                >
                  <span className="sr-only">{social.name}</span>
                  {/* Replace with actual icons */}
                  <span>{social.name[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Send me a message</h2>
            
            {status.message && (
              <div 
                className={`p-4 mb-6 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}
              >
                <div className="flex items-center">
                  {status.type === 'success' ? (
                    <FiCheck className="w-5 h-5 mr-2" />
                  ) : (
                    <FiX className="w-5 h-5 mr-2" />
                  )}
                  <span>{status.message}</span>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                  onMouseEnter={() => onCursor('hover')}
                  onMouseLeave={() => onCursor('default')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                  onMouseEnter={() => onCursor('hover')}
                  onMouseLeave={() => onCursor('default')}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                  onMouseEnter={() => onCursor('hover')}
                  onMouseLeave={() => onCursor('default')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                  onMouseEnter={() => onCursor('hover')}
                  onMouseLeave={() => onCursor('default')}
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  onMouseEnter={() => onCursor('hover')}
                  onMouseLeave={() => onCursor('default')}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
