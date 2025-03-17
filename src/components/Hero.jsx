import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Drawing1 from "../assets/Drawing1.svg";

export default () => {
    const [state, setState] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set a short delay to ensure DOM is fully ready before animations start
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const navigation = [
        { title: "Partners", path: "javascript:void(0)" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Team", path: "javascript:void(0)" },
    ];

    // Animation Variants with smoother easing
    const fadeInUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.5, 
                ease: [0.25, 0.1, 0.25, 1], 
                delay 
            }
        },
    });

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { 
                duration: 0.7, 
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2
            } 
        },
    };

    const navVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                duration: 0.4,
                ease: "easeOut"
            } 
        },
    };

    return (
        <>
            {/* Navigation */}
            <motion.nav
                className="relative items-center pt-5 px-4 max-w-screen-xl sm:px-8 md:flex md:justify-between"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={navVariants}
            >
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center">
                        <a href="javascript:void(0)">
                            <img src={Drawing1} height={160} width={160} alt="Float UI logo" />
                        </a>
                        <p className="text-gray-700 font-medium text-sm mt-2">Established Media Enterprises</p>
                    </div>
                    <button
                        className="text-gray-500 outline-none md:hidden"
                        onClick={() => setState(!state)}
                    >
                        {state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
                <AnimatePresence>
                    {(state || window.innerWidth >= 768) && (
                        <motion.ul 
                            className={`md:flex md:items-center md:justify-end w-full md:w-auto mt-12 md:mt-0 ${state ? "absolute inset-x-0 px-4 border-b bg-white md:border-none md:static" : "hidden md:flex"}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col items-center md:flex-row md:space-x-6">
                                {navigation.map((item, idx) => (
                                    <motion.li 
                                        key={idx} 
                                        variants={fadeInUp(0.1 + idx * 0.05)} 
                                        className="text-gray-500 hover:text-indigo-600 my-2 md:my-0"
                                        initial="hidden"
                                        animate={isLoaded ? "visible" : "hidden"}
                                    >
                                        <a href={item.path}>{item.title}</a>
                                    </motion.li>
                                ))}
                            </div>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero Section */}
            <motion.section 
                className="py-24 bg-gradient-to-b from-white to-blue-50" 
                initial="hidden" 
                animate={isLoaded ? "visible" : "hidden"}
            >
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    {/* Left Content */}
                    <div className="flex-none space-y-6 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <motion.span 
                            variants={fadeInUp(0.1)} 
                            className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block"
                        >
                            Over 200 successful deals
                        </motion.span>
                        <motion.h2 variants={fadeInUp(0.2)} className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            Our Company Provides the <span className="text-indigo-600">Best IT Solutions</span>.
                        </motion.h2>
                        <motion.p variants={fadeInUp(0.3)} className="text-lg">
                            Welcome to our Headquarters. Established Media And Enterprises understands that no matter how small or how huge your needs are as a client, we are here to serve you.
                        </motion.p>
                        {/* Buttons */}
                        <motion.div variants={fadeInUp(0.4)} className="items-center gap-x-4 space-y-3 sm:flex sm:space-y-0">
                            <a href="javascript:void(0)" className="block py-3 px-6 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-lg hover:shadow-xl">
                                Let's get started
                            </a>
                            <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-3 px-6 text-gray-700 hover:text-gray-900 font-medium duration-150 active:bg-gray-100 border border-gray-200 rounded-lg md:inline-flex hover:shadow">
                                Get access
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={fadeInUp(0.5)} className="grid grid-cols-3 gap-4 pt-8 border-t">
                            <div>
                                <h4 className="text-3xl font-bold text-indigo-600">10+</h4>
                                <p className="text-gray-500">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-indigo-600">200+</h4>
                                <p className="text-gray-500">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-indigo-600">95%</h4>
                                <p className="text-gray-500">Client Satisfaction</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div 
                        variants={imageVariants} 
                        className="flex-none mt-14 md:mt-0 md:max-w-xl relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                            className="md:rounded-tl-[108px] shadow-2xl rounded-lg"
                            alt="Team collaboration"
                        />
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};