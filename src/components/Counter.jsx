import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';

const CounterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const stats = [
    { number: 100, label: "Coffee Branches", icon: "☕" },
    { number: 85, label: "Number of Awards", icon: "🏆" },
    { number: 10567, label: "Happy Customer", icon: "😊" },
    { number: 900, label: "Staff", icon: "👥" }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-black text-white overflow-hidden"
      style={{
        backgroundImage: "url('images/bg_2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              animate={controls}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="flex justify-center"
                  variants={counterVariants}
                >
                  <div className="text-center max-w-xs w-full">
                    <div className="text-[#c49b63] text-4xl mb-4">{stat.icon}</div>
                    <CounterNumber value={stat.number} />
                    <span className="text-gray-300 text-lg">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Animated counter component
const CounterNumber = ({ value }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      const duration = 2000; // Animation duration in ms
      const start = 0;
      const increment = Math.ceil(value / (duration / 16)); // 60fps

      const timer = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount + increment;
          if (newCount >= value) {
            clearInterval(timer);
            return value;
          }
          return newCount;
        });
      }, 16);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <div ref={ref}>
      <strong className="text-5xl font-bold text-white block my-3">
        {count.toLocaleString()}
      </strong>
    </div>
  );
};

export default CounterSection;