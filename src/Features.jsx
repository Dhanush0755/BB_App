import { CreditCard, Download, Handshake, Headset, Mail, MapPinCheck } from "lucide-react";
import { motion } from 'framer-motion';

function Features() {
    const firstColumnData = [
        {
            id: 1,
            icon: <Handshake size={40} color="#4FD1C5" />,
            title: "User-Friendly Interface",
            description: "Experience a sleek and intuitive design that makes navigation effortless. With just a few taps, you can access all the services you need, making your experience smooth and enjoyable."
        },
        {
            id: 2,
            icon: <Mail size={40} color="#4FD1C5" />,
            title: "Personalized Recommendations",
            description: "BB learns your preferences to offer personalized suggestions tailored to your interests. Whether it’s the best food options or events you might love, BB helps you discover new favorites effortlessly."
        },
        {
            id: 3,
            icon: <Headset size={40} color="#4FD1C5" />,
            title: "24/7 Customer Support",
            description: "Experience a sleek and intuitive design that makes navigation effortless. With just a few taps, you can access all the services you need, making your experience smooth and enjoyable."
        }
    ];

    const secondColumnData = [
        {
            id: 4,
            icon: <MapPinCheck size={40} color="#4FD1C5" />,
            title: " Real-Time Tracking",
            description: "Stay informed with real-time tracking for services like cab rides and food deliveries. Know exactly when your driver will arrive or when your meal will be at your door, enhancing your convenience and peace of mind."
        },
        {
            id: 5,
            icon: <CreditCard size={40} color="#4FD1C5" />,
            title: "Secure Payment Options",
            description: "Shop and book with confidence using our secure payment gateway. Enjoy multiple payment options for your convenience, ensuring a safe transaction every time."
        },
        {
            id: 6,
            icon: <Download size={40} color="#4FD1C5" />,
            title: "Call to Action",
            description: "Ready to experience the features that set BB apart? Download the app now and unlock a world of convenience at your fingertips!"
        }
    ];

    return (
        <div>
            <div id="features" className="mt-16">
                <motion.div
                    style={{
                        backgroundImage: 'url("/wave.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                    }}
                    className="w-full h-auto pb-16 flex flex-col lg:flex-row justify-center space-y-52"
                    // initial={{ opacity: 0, y: 100 }} // Start from the bottom with opacity 0
                    // whileInView={{ opacity: 1, y: 0 }} // Animate to original position and opacity 1
                    // viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
                    // transition={{ type: "spring", stiffness: 80, damping: 25 }}
                >
                    {/* Heading */}
                    <div className="flex flex-col justify-center text-white text-[35px] font-semibold text-center lg:text-left -mb-8 mt-16 lg:mb-0 lg:mr-24">
                        What Makes Us <br /> Different From <br /> Others
                    </div>

                    {/* Cards Container */}
                    <motion.div
                        className="flex flex-col lg:flex-row lg:space-x-20 space-y-7 lg:space-y-0 mt-32"
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            show: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    staggerChildren: 0.3, 
                                }
                            }
                        }}
                    >
                        {/* First Column */}
                        <motion.div
                            className="space-y-10 -mt-24"
                            variants={{
                                hidden: { opacity: 0, filter: "blur(1px)" }, 
                                show: {
                                    opacity: 1,
                                    filter: "blur(0)", 
                                    transition: {
                                        duration: 0.6,
                                        delay: 1.5 
                                    }
                                }
                            }}
                        >
                            {firstColumnData.map((item) => (
                                <Card key={item.id} icon={item.icon} title={item.title} description={item.description} />
                            ))}
                        </motion.div>

                        {/* Second Column */}
                        <motion.div
                            className="space-y-10 lg:mt-0"
                            variants={{
                                hidden: { opacity: 0, filter: "blur(1px)" }, 
                                show: {
                                    opacity: 1,
                                    filter: "blur(0)", 
                                    transition: {
                                        duration: 1, 
                                        delay: 1.5 
                                    }
                                }
                            }}
                        >
                            {secondColumnData.map((item) => (
                                <Card key={item.id} icon={item.icon} title={item.title} description={item.description} />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
} 

function Card({ icon, title, description }) {
    return (
        <motion.div
            className="mx-5 sm:max-w-md sm:mx-auto bg-[#F6FFFE] rounded-2xl shadow-md overflow-hidden md:max-w-[400px] m-4"
            initial={{ opacity: 0, filter: "blur(1px)" }} 
            whileInView={{ opacity: 1, filter: "blur(0)" }} 
            viewport={{ once: true }} 
            transition={{ type: "spring", stiffness: 80, damping: 25, delay: 1 }} 
        >
            <div className="p-8  h-[350px] sm:h-[270px]">
                <div className="flex items-center">
                    <div className="min-w-20 min-h-20 bg-[#E6FBFF] rounded-lg flex items-center justify-center mr-4">
                        {icon}
                    </div>
                    <h2 className="text-[23px] font-semibold text-gray-800">{title}</h2>
                </div>
                <p className="mt-4 text-gray-600 ">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export default Features;