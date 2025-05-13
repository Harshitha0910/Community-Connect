
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold font-mono leading-tight text-black sm:text-4xl lg:text-5xl">Ready to bring your community together?</h2>       

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 lg:mt-12">
                    {/* Join Now with glowing background */}
                    <div className="relative group">
                        <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                    <Link to='/signup' className="relative  z-10 inline-flex items-center justify-center px-8 py-4 text-lg text-white transition-all duration-200 bg-gray-900 font-pj font-mono rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    >Join Now</Link>

                        {/* <a
                        href="#signup"
                        title=""
                        role="button"
                        >
                        Join Now
                        </a> */}
                    </div>

                    {/* Contact Sales */}
                    <a
                        href="#"
                        title=""
                        className="inline-flex font-mono items-center justify-center px-8 py-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border border-black rounded-md hover:bg-black hover:text-white focus:bg-black focus:text-white"
                        role="button"
                    >
                        <svg
                        className="w-5 h-5 mr-2 -ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                        </svg>
                        Contact Sales
                    </a>
                    </div>
                    <p className="mt-6 font-mono text-base text-black">Already have an account? <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Log in</a></p>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;