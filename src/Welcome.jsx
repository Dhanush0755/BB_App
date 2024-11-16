import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Download from "./Download";

function Welcome() {

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <div id="about" className="px-4 pt-24 overflow-hidden relative" ref={sectionRef}>  {/* lg:mt-28 */}
            <div className="min-h-96 pt-20 flex flex-col lg:flex-row justify-between items-center lg:items-start ">

                {/* Text Section with Animation */}
                <motion.div
                    className="w-full lg:w-6/12 text-lg font-sans flex justify-center lg:justify-end mb-8 lg:mb-0"
                    initial={{ opacity: 0, x: -200 }} 
                    animate={isInView ? { opacity: 1, x: 0 } : {}} 
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <div  className="w-full  text-sm sm:text-md sm:w-3/4 lg:mr-10 px-4 sm:px-0 md:text-2xl lg:text-xl">
                        <span className="block  text-4xl sm:text-5xl font-semibold mb-10 -mt-10">About Us</span>
                        Welcome to BB! Your one-stop destination for hassle-free access to a variety of services. Whether you need a ride, want to order food, or are looking for the best deals on groceries, BB has got you covered. Discover our services below and experience convenience like never before!
                    </div>
                </motion.div>

                {/* Image Section with Animation */}
                <motion.div
                    className="w-full lg:w-[45%] aspect-[750/445] bg-cover bg-center  xl:-mt-10"
                    style={{
                        backgroundImage: 'url("/mobile2.png")'
                    }}
                    initial={{ opacity: 0, x: 200 }}   
                    animate={isInView ? { opacity: 1, x: 0 } : {}} 
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                ></motion.div>
            </div>

            {/* download */}
            <Download />
        </div>
    );
}

export default Welcome;






