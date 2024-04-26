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
            
            As a seasoned Bubble developer, I specialize in crafting dynamic
            marketplaces, engaging landing pages, and functional dashboards.
            With my adeptness in Bubble's no-code platform, I swiftly bring
            your ideas to life without the need for traditional programming 
            languages. Additionally, I have experience developing with code 
            frameworks and languages, allowing me to offer hybrid solutions 
            tailored to your specific needs. Leveraging Bubble's intuitive 
            interface and extensive plugin ecosystem, I collaborate closely 
            with clients to ensure their vision is translated into efficient,
            scalable, and user-friendly solutions. Let's work together !
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