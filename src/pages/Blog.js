import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { FiCalendar, FiClock, FiSearch, FiTag, FiArrowRight, FiX } from 'react-icons/fi';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state effectively.',
    date: '2023-06-15',
    readTime: '5 min read',
    tags: ['React', 'Hooks', 'JavaScript'],
    image: '/blog/react-hooks.jpg',
    slug: 'getting-started-with-react-hooks'
  },
  {
    id: 2,
    title: 'Building a RESTful API with Node.js and Express',
    excerpt: 'A comprehensive guide to creating a robust REST API using Node.js, Express, and MongoDB.',
    date: '2023-05-22',
    readTime: '8 min read',
    tags: ['Node.js', 'Express', 'API', 'Backend'],
    image: '/blog/node-express.jpg',
    slug: 'building-restful-api-node-express'
  },
  {
    id: 3,
    title: 'Mastering CSS Grid Layout',
    excerpt: 'Unlock the full potential of CSS Grid to create complex, responsive layouts with ease.',
    date: '2023-04-10',
    readTime: '6 min read',
    tags: ['CSS', 'Grid', 'Frontend', 'Responsive Design'],
    image: '/blog/css-grid.jpg',
    slug: 'mastering-css-grid-layout'
  },
  {
    id: 4,
    title: 'State Management in React with Context API',
    excerpt: 'Learn how to manage global state in your React applications using the Context API.',
    date: '2023-03-28',
    readTime: '7 min read',
    tags: ['React', 'Context API', 'State Management', 'Frontend'],
    image: '/blog/react-context.jpg',
    slug: 'state-management-react-context-api'
  },
  {
    id: 5,
    title: 'Building Accessible Web Applications',
    excerpt: 'Best practices and techniques for creating web applications that everyone can use.',
    date: '2023-03-15',
    readTime: '9 min read',
    tags: ['Accessibility', 'Web Development', 'Best Practices'],
    image: '/blog/accessibility.jpg',
    slug: 'building-accessible-web-applications'
  },
  {
    id: 6,
    title: 'Introduction to TypeScript for JavaScript Developers',
    excerpt: 'A beginner-friendly guide to TypeScript and how it can improve your JavaScript code.',
    date: '2023-02-20',
    readTime: '6 min read',
    tags: ['TypeScript', 'JavaScript', 'Frontend'],
    image: '/blog/typescript.jpg',
    slug: 'introduction-to-typescript'
  }
];

// All unique tags from blog posts
const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const { onCursor } = useCursor();

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => post.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Thoughts, tutorials, and insights on web development, programming, and technology.
        </p>
      </motion.div>

      {/* Search and Filter */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-4 py-3 pl-12 pr-10 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onMouseEnter={() => onCursor('hover')}
            onMouseLeave={() => onCursor('default')}
          />
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              onMouseEnter={() => onCursor('hover')}
              onMouseLeave={() => onCursor('default')}
            >
              <FiX className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by tag:</span>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={() => onCursor('default')}
              >
                {tag}
              </button>
            ))}
          </div>
          
          {(searchTerm || selectedTags.length > 0) && (
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
              </p>
              <button
                onClick={clearFilters}
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={() => onCursor('default')}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover-lift h-full flex flex-col"
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={() => onCursor('default')}
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    {post.title}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center mr-4">
                      <FiCalendar className="mr-1.5" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-1.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3">
                    <a 
                      href={`/blog/${post.slug}`} 
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {post.title}
                    </a>
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline mt-auto"
                  >
                    Read more
                    <FiArrowRight className="ml-1.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            <FiSearch className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300 mb-2">
            No articles found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            We couldn't find any articles matching your search criteria.
          </p>
          <button
            onClick={clearFilters}
            className="text-primary-600 dark:text-primary-400 hover:underline"
            onMouseEnter={() => onCursor('hover')}
            onMouseLeave={() => onCursor('default')}
          >
            Clear all filters
          </button>
        </div>
      )}
      
      {/* Newsletter Subscription */}
      <div className="max-w-3xl mx-auto mt-20 p-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to my newsletter</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and resources delivered straight to your inbox. No spam, ever.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              onMouseEnter={() => onCursor('hover')}
              onMouseLeave={() => onCursor('default')}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
