import { useState, useEffect } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const sections = document.querySelectorAll("div[id]");
        const scrollPosition =
            window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (
                scrollPosition >= sectionTop - sectionHeight / 3 &&
                scrollPosition < sectionTop + sectionHeight - sectionHeight / 3
            ) {
                setActiveSection(section.getAttribute("id"));
            }
        });
    };

    const handleNavClick = (id) => {
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" }); 
        }
        setActiveSection(id);
        setIsOpen(false); 
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About Us" },
        { id: "services", label: "Services" },
        { id: "features", label: "Features" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <header className="fixed w-full font-semibold bg-white z-30 py-1 px-12 shadow-sm">
            <div className="mx-auto flex items-center justify-between sm:px-6">
                <a href="/" className="flex items-center">
                    <img src="/logo.png" alt="logo" className="h-20 w-20 -ml-7" />
                    <div className="text-xl font-bold -ml-3 mt-1 ">BB App</div>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden font-sans text-[16px] md:flex md:items-center space-x-6 ml-6 mt-2">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`${
                                activeSection === item.id ? "text-black" : "text-gray-500"
                            }`}
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior
                                handleNavClick(item.id);
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Sign Up and Menu Button */}
                <div className="flex items-center">
                    <a
                        href="/signup"
                        className="hidden md:block rounded-full bg-[#002ED2] px-8 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        Sign Up
                    </a>
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground md:hidden"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`fixed inset-x-0 top-0 z-50 bg-white overflow-hidden transition-max-height duration-100 ease-in-out ${
                    isOpen ? "max-h-screen" : "max-h-0"
                } md:hidden`}
            >
                <div className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 rounded-md p-2 text-muted-foreground hover:bg-gray-200"
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`${
                                    activeSection === item.id ? "text-black" : "text-gray-500"
                                } block text-base font-semibold hover:bg-accent hover:text-primary px-3 py-2 rounded-lg`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.id);
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="/signup"
                            className="block bg-blue-600 text-center rounded-md text-white text-sm font-medium px-4 py-2 hover:bg-blue-700"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
