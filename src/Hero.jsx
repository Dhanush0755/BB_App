

import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { useState, useEffect } from "react";

function Hero() {

  const [isTextRevealed, setIsTextRevealed] = useState(false);

    useEffect(() => {
        setIsTextRevealed(true); 
    }, []);

  return (
    <div id="home"  className="min-h-screen mb-12 sm:mb-24  flex flex-col pt-10  overflow-x-hidden">    {/* lg:text-yellow-500 */}  {/* md:text-red-500  lg:text-yellow-500 xl:text-blue-500 sm:text-green-600 */}
      
      {/* Text Section */}
      <div className=" -mt-[300px] flex flex-col gap-10 flex-1 justify-center items-center text-center lg:-mt-[370px] xl:-mt-[390px] md:-mt-12 sm:-mt-0">
                <div className="text-2xl sm:text-[55px] sm:-mt-[380px] md:text-6xl lg:text-6xl lg:mt-16  font-semibold leading-[1.1] px-10  md:-mt-[370px] ">  {/* lg:text-7xl   text-3xl */}
                    <AnimatedTextCharacter text="Manage Everything with BB"  />
                </div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }} 
                    animate={{
                        y: isTextRevealed ? 0 : 100, 
                        opacity: isTextRevealed ? 1 : 0, 
                        transition: { delay: 1, type: "spring", stiffness: 100, damping: 10 }, 
                    }}
                    className="mx-auto  flex border-0 rounded-3xl text-white px-5 py-2 bg-[#002ED2] gap-1 -mt-1 "
                >
                    Download
                    <MoveUpRight size={16} className="my-auto " />
                </motion.div>
            </div>

      {/* Separate relative container for images */}
      <div className="relative  sm:mt-auto flex justify-center ">
        <div
          className="absolute  bottom-0 w-[90%] h-[300px] sm:w-[90%] sm:h-[400px]  md:w-[90%] md:h-[440px] lg:w-[950px] lg:h-[400px] lg:-mb-20 xl:h-[380px] xl:mb-0  "
          style={{
            
            backgroundImage: 'url("/circle.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        ></div>
        <div
          className="absolute  bottom-0 w-[400px] h-[500px] sm:w-[500px] sm:h-[650px]  md:w-[650px] md:h-[760px] lg:w-[650px] lg:-mb-20 xl:h-[700px] xl:mb-0"    /* xl:h-[720px] */
          style={{            
            
            backgroundImage: 'url("/mobile.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        ></div>
      </div>

      
    </div>
  );
}

const AnimatedTextCharacter = ({ text }) => {
  const letters = Array.from(text);

  const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
      }),
  };

  const child = {
      visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
              type: "spring",
              damping: 12,
              stiffness: 100,
          },
      },
      hidden: {
          opacity: 0,
          x: -20,
          y: 10,
          transition: {
              type: "spring",
              damping: 12,
              stiffness: 100,
          },
      },
  };

  return (
      <motion.div
          style={{ display: "flex", fontSize: "inherit" }}
          variants={container}
          initial="hidden"
          animate="visible"
      >
          {letters.map((letter, index) => (
              <motion.span variants={child} key={index}>
                  {letter === " " ? "\u00A0" : letter}
              </motion.span>
          ))}
      </motion.div>
  );
};

export default Hero;

