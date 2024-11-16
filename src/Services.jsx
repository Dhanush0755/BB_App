import Slider from 'react-slick';
import { MoveLeft, MoveRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Download from './Download';


const contentSlides = [
  { center_des: "What Our App Offers?" }, 
  {
    title1: "Cabs",
    title2: "Foods",
    description1: "Easily book rides with reliable drivers at your convenience. Track your ride in real-time and choose from various options tailored to your needs.",
    description2: "Order from your favorite local restaurants and enjoy quick delivery. Browse menus, track your order, and take advantage of exclusive offers.",
    imageUrlLeft: "/slide_img2.png",
    imageUrlRight: "/slide_img1.png",
  },
  {
    title1: "Groceries",
    title2: "Fashion & Goods",
    description1: "Experience safe, comfortable rides with top-rated drivers anytime, anywhere. Our platform offers transparency and convenience at your fingertips.",
    description2: "Discover local dining options and enjoy meals delivered fresh to your door. Customize your orders and enjoy exclusive discounts on each delivery.",
    imageUrlLeft: "/slide_img3.png",
    imageUrlRight: "/slide_img4.png",
  },
  {
    title1: "Tours",
    title2: "Hotels",
    description1: "Get affordable rides that match your schedule, with options for every travel need. Track your driver's progress and enjoy a stress-free journey.",
    description2: "Support local eateries and satisfy your cravings with quick, reliable delivery. Order easily, track in real-time, and indulge in a variety of cuisines.",
    imageUrlLeft: "/slide_img5.png",
    imageUrlRight: "/slide_img6.png",
  },
  {
    title1: "Events",
    title2: "And More...",
    description1: "Plan unforgettable celebrations with curated event packages that cover all your needs. Enhance your occasion by booking celebrity chief guests for entertainment.",
    // description2: "Support local eateries and satisfy your cravings with quick, reliable delivery. Order easily, track in real-time, and indulge in a variety of cuisines.",
    imageUrlLeft: "/slide_img7.png",
    // imageUrlRight: "/slide_img6.png",
  },
];

const slide = [
  { center_des: "What Our App Offers?" },  // First slide for mobile/tablet view
  {
    title: "Cabs",
    description: "Easily book rides with reliable drivers at your convenience. Track your ride in real-time and choose from various options tailored to your needs.",
    imageUrl: "/slide_img2.png",
  },
  {
    title: "Foods",
    description: "Order from your favorite local restaurants and enjoy quick delivery. Browse menus, track your order, and take advantage of exclusive offers.",
    imageUrl: "/slide_img1.png",
  },
  {
    title: "Groceries",
    description: "Experience safe, comfortable rides with top-rated drivers anytime, anywhere. Our platform offers transparency and convenience at your fingertips.",
    imageUrl: "/slide_img3.png",
  },
  {
    title: "Fashion & Goods",
    description: "Discover local dining options and enjoy meals delivered fresh to your door. Customize your orders and enjoy exclusive discounts on each delivery.",
    imageUrl: "/slide_img4.png",
  },
  {
    title: "Tours",
    description: "Get affordable rides that match your schedule, with options for every travel need. Track your driver's progress and enjoy a stress-free journey.",
    imageUrl: "/slide_img5.png",
  },
  {
    title: "Hotels",
    description: "Support local eateries and satisfy your cravings with quick, reliable delivery. Order easily, track in real-time, and indulge in a variety of cuisines.",
    imageUrl: "/slide_img6.png",
  },
  { center_des: "And More..." },
];

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute top-1/2 -left-16 ml-4 z-10 transform -translate-y-1/2">
      <MoveLeft className="w-8 h-8 text-gray-500 hover:text-gray-700" />
    </button>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute top-1/2 -right-16 mr-4 z-10 transform -translate-y-1/2">
      <MoveRight className="w-8 h-8 text-gray-500 hover:text-gray-700" />
    </button>
  );
}

export default function ServicesCarousel() {
  const desktopSettings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3500,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    customPaging: function (i) {
      return (
        <div
          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
            i === this.currentSlide ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        ></div>
      );
    },
  };

  return (
    <div id="services" className="min-h-screen flex flex-col items-center md:px-36 px-3   relative ">
      {/* Mobile and Tablet Carousel - Visible only on mobile and tablet */}
      <div className="w-full max-w-6xl lg:hidden">
        <Slider {...mobileSettings}>
          {slide.map((slide, index) => (
            <div key={index} className="outline-none px-4 sm:px-6 lg:px-8">
              {slide.center_des ? (
                <div className="w-full h-[660px] flex justify-center items-center">
                  <div className="text-4xl md:text-6xl text-[#002ED2] font-semibold text-center">
                    {slide.center_des}
                  </div>
                </div>
              ) : (
                <div className="mb-2 mx-auto">
                  <div className="w-full h-full">
                    <div className="relative sm:w-full h-[430px] sm:h-[500px] mb-6">
                      <img
                        src={slide.imageUrl}
                        alt={`Service ${slide.title}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="w-full text-center">
                    <div className="text-3xl mb-3 font-semibold">{slide.title}</div>
                    <p>{slide.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Carousel - Visible only on large screens */}
      <div className="hidden lg:block w-full">
        <Slider {...desktopSettings}>
          {contentSlides.map((slide, index) => (
            <div key={index} className="flex w-full items-center justify-between">
              {index === 0 ? (
                <div className="w-full h-[660px] flex justify-center items-center">
                  <div className="text-6xl text-[#002ED2] font-semibold text-center">
                    {slide.center_des}
                  </div>
                </div>
              ) : (
                <div className="flex w-full items-center justify-between">
                  <div className="w-1/3 pb-40">
                    <div
                      style={{
                        height: '500px',
                        backgroundImage: `url("${slide.imageUrlLeft}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '150%',
                        backgroundPosition: 'center',
                      }}
                      className="rounded-lg"
                    ></div>
                  </div>

                  <div className="w-[45%]">
                    <div className="mb-12 pr-20 text-left">
                      <div className="text-4xl font-semibold text-black mb-4">{slide.title1}</div>
                      <p className="text-lg text-gray-700">{slide.description1}</p>
                    </div>
                    <div className="pl-20 text-left">
                      <div className="text-4xl font-semibold text-right text-black mb-4">{slide.title2}</div>
                      <p className="text-lg text-gray-700">{slide.description2}</p>
                    </div>
                  </div>

                  <div className="w-1/3 pt-40">
                    <div
                      style={{
                        height: '500px',
                        backgroundImage: `url("${slide.imageUrlRight}")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '150%',
                        backgroundPosition: 'center',
                      }}
                      className="rounded-lg"
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>

      
      <Download />
    </div>
  );
}