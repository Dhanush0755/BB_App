import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Vinay",
        location: "Chennai, India",
        avatar: "/person1.jpg",
        text: "BB app is a game changer! From reliable cabs, food delivery, and groceries to easy event bookings, tours, and hotel reservations, it has everything I need in one place."
    },
    {
        id: 2,
        name: "John",
        location: "Kanchipuram",
        avatar: "/person2.jpg",
        text: "Amazing service and great user experience. The app makes everything so simple and efficient. Super convenient, fast, and user-friendly. Highly recommend!"
    },
    {
        id: 3,
        name: "Sarah",
        location: "Mumbai, India",
        avatar: "/person3.jpg",
        text: "The best all-in-one solution I've used. Customer service is excellent and the app is very intuitive. Super convenient, fast, and user-friendly. Highly recommend!"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const previousTestimonial = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="px-4 py-12 md:py-20 sm:mb-48 md:mb-40 lg:mb-20 lg:mt-28 lg:ml-32 mb-[315px] mt-10 relative">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between max-w-6xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
                {/* Header and Navigation */}
                <div className="flex flex-col items-center lg:items-start lg:w-1/3">
                    <h2 className="text-3xl lg:text-5xl whitespace-nowrap font-bold text-center lg:text-left mb-4 lg:mb-12">
                        What people say <span className="text-[#002ED2]"> <br className="hidden lg:block" /> about us.</span>
                    </h2>
                    <div className="mt-4 flex space-x-4 ">
                        <button
                            onClick={previousTestimonial}
                            className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-400 hover:bg-gray-200"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-[#002ED2] text-white hover:bg-blue-600"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Testimonials Display */}
                <div className="w-full pt-10 lg:mt-0 lg:w-2/3 flex justify-center relative   ">
                    {testimonials.map((testimonial, index) => {
                        const isActive = index === currentIndex;
                        const isNext = (currentIndex + 1) % testimonials.length === index;

                        return (
                            <div
                                key={testimonial.id}
                                className={`absolute transition-all duration-500 ${isActive
                                    ? "opacity-100 z-20 scale-100"
                                    : isNext
                                        ? "opacity-50 z-10 scale-95 translate-y-[70px] translate-x-6"
                                        : "opacity-0 scale-90"
                                    }`}
                                style={{
                                    width: "90%", 
                                    maxWidth: "500px", 
                                    transformOrigin: "center",
                                }}
                            >
                                <div className="bg-white rounded-lg py-6 px-4 shadow-lg relative ">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="absolute -top-10 -left-6 h-16 w-16 rounded-full border-4 border-white object-cover"
                                    />
                                    <p className="text-gray-700 mb-4 text-center lg:text-left">{testimonial.text}</p>
                                    <p className="font-semibold text-center lg:text-left">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500 text-center lg:text-left">{testimonial.location}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

               
            </div>

            
        </div>
    );
}