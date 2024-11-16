import { motion } from "framer-motion";
import { Mail } from 'lucide-react';
import mailVector from "../public/Element.png";
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';



function Footer() {
    return (
        <div id="contact" className="h-auto min-h-screen flex flex-col justify-between relative gap-10 sm:gap-0 lg:gap-20">
            <motion.div
                className="h-72 w-full max-w-[450px] bg-[#002ED2] m-auto rounded-xl px-4 sm:px-8 sm:max-w-[600px] md:max-w-[850px] lg:px-16 "
                initial={{ opacity: 0, y: 100 }}   
                whileInView={{ opacity: 1, y: 0 }}  
                viewport={{ once: true, amount: 0.3 }}  
                transition={{ type: "spring", stiffness: 80, damping: 25 }} 
            >
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center text-white py-12">
                    Subscribe and get exclusive <br /> deals & offer
                </h1>
                <div className="relative w-full max-w-md flex items-center mx-auto ">
                    <input
                        type="email"
                        placeholder="Enter your mail"
                        className="w-full h-12 border rounded-lg p-4 pr-20 pl-10 z-10"
                    />
                    <button className="absolute right-0 bg-[#002ED2] text-white text-sm rounded-lg m-2 px-4 py-2 z-10">
                        Subscribe
                    </button>
                    <Mail color="gray" size={18} className="absolute left-3 z-10" />
                    <img src={mailVector} alt="" className="absolute h-60 -top-[128px] -left-[195px] z-0" />
                </div>
            </motion.div>

            
           


            <div className="h-auto bg-[#E6EBFB] py-8 ">
                {/* Top Section with Logo, Quote, and Social Media */}
                <div className='flex flex-col items-center sm:flex-row justify-between pt-9 pb-6 mx-4 sm:mx-20 border-b border-gray-400'>
                    <div className="flex flex-col items-center  sm:items-start  sm:w-1/3  sm:-mt-3 md:-mt-7 lg:-mt-8 xl:-mt-12">
                        <div className="flex">
                            <img src="/logo.png" alt="logo" className="h-20 w-20 -ml-7"/>
                            <h2 className='text-xl mb-4 font-bold flex flex-col justify-center pt-5 -ml-3'>BB App</h2>
                        </div>
                        <p className='text-sm text-center  sm:text-left text-gray-600'>
                            &ldquo;Where Services Meet Efficiency. Manage Everything with BB.&ldquo;
                        </p>
                        <div className='flex gap-2 mt-4'>
                            <div className='rounded-full h-8 w-8 flex justify-center items-center bg-white border border-gray-400 hover:bg-[#002ED2] hover:text-white'>
                                <Facebook size={16} />
                            </div>
                            <div className='rounded-full h-8 w-8 flex justify-center items-center bg-white border border-gray-400 hover:bg-[#002ED2] hover:text-white'>
                                <Instagram size={16} />
                            </div>
                            <div className='rounded-full h-8 w-8 flex justify-center items-center bg-white border border-gray-400 hover:bg-[#002ED2] hover:text-white'>
                                <Twitter size={16} />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section with Company and Contact side-by-side */}
                    <div className='flex flex-col sm:flex-row gap-8 sm:gap-20 mt-8 sm:mt-0'>
                        <div className='flex flex-col gap-2 items-center sm:items-start'>
                            <h2 className='font-bold mb-2'>Company</h2>
                            <p className='text-gray-600'>About</p>
                            <p className='text-gray-600'>Services</p>
                            <p className='text-gray-600'>Features</p>
                            <p className='text-gray-600'>Privacy & Policy</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center sm:items-start'>
                            <h2 className='font-bold mb-2'>Contact</h2>
                            <p className='text-gray-600'>Help/FAQ</p>
                            <p className='text-gray-600'>E Mail</p>
                            <p className='text-gray-600'>Instagram</p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Text */}
                <div className='flex flex-col sm:flex-row justify-between items-center h-16 mx-4 sm:mx-20 text-gray-600 mt-4'>
                    <div>Copyright, Mitbots2024. All rights reserved.</div>
                    <div>Terms & Conditions Applied</div>
                </div>
            </div>


            
        </div >
    )
}

export default Footer;