'use client';

import { aboutData } from '@/lib/data';
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '@/lib/variants'
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/public/img/about/newImage.jpg'

const About = () => {
  const { title, subtitle1, subtitle2, subtitle3, btnText, btnIcon } =
    aboutData;

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <>
    <section  className='lg:py-16 xl:pb-[160px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
          {/* numbers */}
          <motion.div
            variants={fadeIn('right')}
            // initial='visible'
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex flex-col lg:flex-row flex-1'
          >
            <div className='text-[360px] xl:text-[620px] 2xl:text-[720px] leading-none font-rozha lg:-tracking-[0.055em] bg-about_img bg-no-repeat bg-right bg-clip-text text-transparent'>
              01
            </div>
          </motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 h-full xl:mt-48'
          >
            <h2 className='h2'>{title}</h2>
            <div className='flex flex-col items-end'>
              <div className='font-light max-w-[530px] text-grey'>
                <p className='mb-6'>{subtitle1}</p>
                <p className='mb-9'>{subtitle2}</p>
                {isButtonClicked ? (
                  <p className='mb-9'>{subtitle3}</p>
                ) : (
                  <button
                    className='btn btn-lg btn-link font-normal'
                    onClick={() => setIsButtonClicked(true)}
                    aria-label='Reveal More Text'
                  >
                    {btnText} <div className='text-xl'>{btnIcon}</div>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

<section  className='lg:py-16 xl:pb-[160px]'>
<div className='container mx-auto'>
  <div className='flex flex-col lg:flex-row gap-x-[70px] items-center'>
    {/* numbers */}
  
    <motion.div
      variants={fadeIn('right')}
      // initial='visible'
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      className='flex flex-col lg:flex-row flex-1'
    >
        <Image
            src={Logo}
            alt={"logo"}
            height="0"
            width="0"
            className=" h-fit mb-4  mx-auto"
            unoptimized
        />
     
      {/* <div className='text-[360px] xl:text-[620px] 2xl:text-[720px] leading-none font-rozha lg:-tracking-[0.055em] bg-about_img bg-no-repeat bg-right bg-clip-text text-transparent'>
        01
      </div> */}
    </motion.div>

    {/* text */}
    <motion.div
      variants={fadeIn('left')}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.7 }}
      className='flex-1 h-full xl:mt-48'
    >
      <h2 className='h2'>{title}</h2>
      <div className='flex flex-col items-end'>
        <div className='font-light max-w-[530px] text-grey'>
          <p className='mb-6'>{subtitle1}</p>
          <p className='mb-9'>{subtitle2}</p>
          {isButtonClicked ? (
            <p className='mb-9'>{subtitle3}</p>
          ) : (
            <button
              className='btn btn-lg btn-link font-normal'
              onClick={() => setIsButtonClicked(true)}
              aria-label='Reveal More Text'
            >
              {btnText} <div className='text-xl'>{btnIcon}</div>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  </div>
</div>
</section>
</>
  );
};

export default About;
