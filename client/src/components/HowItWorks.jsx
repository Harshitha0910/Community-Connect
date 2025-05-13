
import React from 'react';

const HowItWorks = () => {
    return (
        <section id='howItWorks' className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-mono font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
                </div>

                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>

                    <div className="relative font-mono grid grid-cols-1 text-center gap-y-12 md:grid-cols-2 lg:grid-cols-4 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Sign Up</h3>
                            <p className="mt-4 text-base text-gray-600">Create your account in just a few clicks using your phone number or email. Join your apartment community instantly!</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Complete Profile</h3>
                            <p className="mt-4 text-base text-gray-600">Tell us a bit about yourself—your flat number, role (resident, staff, or admin), and contact info to personalize your experience.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Start Engaging</h3>
                            <p className="mt-4 text-base text-gray-600">Join community discussions, participate in polls, report issues, or chat with neighbors and staff—all in one place.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 4 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Stay Informed</h3>
                            <p className="mt-4 text-base text-gray-600">Never miss an update! Get real-time notifications on announcements, events, and everything happening in your community.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;