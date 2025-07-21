import React from 'react';
import { motion } from 'motion/react';
import { blogPosts } from './HelpingFiles/menuData';
import { Link } from 'react-router';


const BlogSection = () => {
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent from blog</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </motion.div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="flex"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col rounded-lg  overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                <a 
                  href="#" 
                  className="block h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                
                <div className=" grow flex flex-col justify-end p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <a href="#" className="hover:text-[#c49b63] transition-colors">{post.date}</a>
                    <span className="mx-2">•</span>
                    <a href="#" className="hover:text-[#c49b63] transition-colors">{post.author}</a>
                    <span className="mx-2">•</span>
                    <a href="#" className="hover:text-[#c49b63] transition-colors flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {post.comments}
                    </a>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">
                    <a href="#" className="hover:text-[#c49b63] ">
                      {post.title}
                    </a>
                  </h3>
                  
                  <p className="text-gray-500 mb-2">{post.excerpt}</p>
                  
                  <Link 
                    to="/blog_single" 
                    className="block text-[#c49b63] mt-auto font-medium hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;