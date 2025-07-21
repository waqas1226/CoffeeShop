
import React from 'react';
import { motion } from 'motion/react';
import person_1 from '../images/person_2.jpg';
import person_2 from '../images/person_3.jpg';
import person_3 from '../images/person_4.jpg';
import bg_1 from '../images/bg_1.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.",
      name: "Louise Kelly",
      position: "Illustrator Designer",
      image: person_1,
      animate: true
    },
    {
      id: 2,
      quote: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      name: "Louise Kelly",
      position: "Illustrator Designer",
      image: person_2,
      overlay: true,
      animate: false
    },
    {
      id: 3,
      quote: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.",
      name: "Louise Kelly",
      position: "Illustrator Designer",
      image: person_3,
      animate: true
    },
    {
      id: 4,
      quote: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.",
      name: "Louise Kelly",
      position: "Illustrator Designer",
      image: person_2,
      overlay: true,
      animate: false
    },
    {
      id: 5,
      quote: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.",
      name: "Louise Kelly",
      position: "Illustrator Designer",
      image: person_3,
      animate: true
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="relative py-20 text-white"
      style={{
        backgroundImage: `url(${bg_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#c49b63] font-medium tracking-wider font_subheading">Testimony</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Customers Says</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="flex flex-wrap -mx-2 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="w-full lg:w-1/5 px-2 mb-4"
              initial="hidden"
              whileInView={testimonial.animate ? "visible" : {}}
              viewport={{ once: true, margin: "-50px" }}
              variants={testimonial.animate ? itemVariants : {}}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`h-full flex flex-col p-6 border-2 rounded-lg ${testimonial.overlay ? 'bg-black bg-opacity-50' : 'bg-gray-900'}`}>
                <blockquote className="mb-6">
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </blockquote>
                <div className="mt-auto flex items-center">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <span className="text-[#c49b63] text-sm">{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;