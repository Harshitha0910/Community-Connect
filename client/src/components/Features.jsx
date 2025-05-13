// import React from "react";

// const Features = () => {
//   return (
//     <section id="features" className="pb-12 bg-gray-50 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
//       <div className="container mx-auto">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
//               <span className="mb-2 block font-bold text-4xl font-mono text-primary">
//                 Platform Features
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="-mx-4 flex justify-center flex-wrap">
//           <FeatureCard
//             title="For Residents"
//             features={[
//               "Community Forum & Group Chats",
//               "Private Messaging",
//               "Complaint Submission & Tracking",
//               "Service Provider Directory",
//             ]}
//           />
//           <FeatureCard
//             title="For Administrators"
//             features={[
//               "Post Announcements",
//               "Create & Manage Polls",
//               "Assign & Monitor Complaints",
//               "Manage Service Providers",
//             ]}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;


// const FeatureCard = ({ icon, title, features }) => {
//     return (
//       <div className="w-full px-4 md:w-1/2 lg:w-1/3">
//         <div className="relative inline-flex w-full group mt-6">
//           {/* Glowing Border Effect */}
//           <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-[20px] blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
  
//           {/* Card Content */}
//           <div className="relative z-10 w-full rounded-[20px] bg-white p-8  hover:shadow-sm transition-all duration-300">
//             <h4 className="mb-[14px] text-2xl text-start font-semibold text-black">
//               {title}
//             </h4>
  
//             <ul className="list-disc pl-5 text-gray-700 font-mono text-sm space-y-1 text-start">
//               {features.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   };

import React from 'react';

const Features = () => {
    return (
        <section id='features' className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                <div className="text-center">
                    <h2 className="text-3xl font-bold font-mono leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Platform Features</h2>
                </div>

                {/* Flex wrapper to center the two cards */}
                {/* <div className="flex flex-col items-center justify-center gap-y-12 gap-x-12 text-center sm:mt-16 sm:flex-row xl:mt-24"> */}
                <div className="flex flex-col items-center justify-center gap-x-12 text-center sm:mt-10 sm:flex-row xl:mt-12">


                    {/* Card 1 */}
                    <div className="md:p-8 font-mono lg:p-18 max-w-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>

                        <h3 className="mt-3 text-xl font-bold text-gray-900 font-pj">For Residents</h3>
                        <ul className="mt-5 text-left list-disc list-inside text-gray-700 font-pj space-y-2 text-sm">
                            <li>Post and reply to community discussions</li>
                            <li>Submit and track complaints</li>
                            <li>Vote on polls and surveys</li>
                            <li>Receive notices and announcements</li>
                            <li>View contact info for service providers</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="md:p-8 font-mono lg:p-18 max-w-sm border-t sm:border-t-0 sm:border-l border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>

                        <h3 className="mt-3 text-xl font-bold text-gray-900 font-pj">For Administrators</h3>
                        <ul className="mt-5 text-left list-disc list-inside text-gray-700 font-pj space-y-2 text-sm">
                            <li>Manage resident database</li>
                            <li>View and resolve complaints</li>
                            <li>Create and schedule announcements</li>
                            <li>Monitor community engagement</li>
                            <li>Oversee service requests and vendors</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features;
