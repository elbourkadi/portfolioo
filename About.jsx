import { MotionConfig } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

    const ServiceCard = ({ index, title, icon }) => (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img
              src={icon}
              alt='web-development'
              className='w-16 h-16 object-contain'
            />
    
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
    
    const About = () => {
      return (
        <section className='container mx-auto'>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>
    
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            I'm a skilled software engineer who graduated from FST Tangier in Morocco. i have experience in developing and maintaining software applications, as well as debugging and troubleshooting code. I'm proficient in various programming languages, including Java, Python, and C++. Abderrazzak is a detail-oriented professional who is passionate about using technology to solve complex problems. He is a quick learner and always stays up-to-date with the latest trends and advancements in the field. Abderrazzak is an excellent team player who enjoys collaborating with colleagues and clients to deliver high-quality software solutions.
          </motion.p>
    
          <div className='mt-20 flex flex-wrap gap-10'>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
          </section>
      );
    };
    
    export default SectionWrapper(About,"about") ;