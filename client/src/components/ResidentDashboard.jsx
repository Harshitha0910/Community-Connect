import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import DynamicText from './DynamicText';


const ResidentDashboard= () => {        
    return (
        <section id='resident-dashboard'>
            <div className="flex font-mono font-bold flex-1 bg-gray-50">
                <div className="hidden md:flex md:w-64 md:flex-col">
                    <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white">
                        <div className="flex items-start flex-shrink-0 px-4">
                            <img className="w-full h-12" src="src\assets\logo2.png" alt="" />
                        </div>
                    
                <div className="px-4 mt-6">
                    <hr className="border-gray-200" />
                </div>

                <div className="flex flex-col flex-1 px-3 mt-6">
                    <div className="space-y-4">
                        <nav className="flex-1 space-y-2">
                        

                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-zinc-900 group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>   Community Forum
                        </a>

                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-zinc-900 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg> Group Chat
                        </a>

                        <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-zinc-900 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                        </svg> Private Messaging
                        </a>

                        <Link to="/complaints" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-zinc-900 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide mr-3 lucide-siren-icon lucide-siren"><path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/><path d="M21 12h1"/><path d="M18.5 4.5 18 5"/><path d="M2 12h1"/><path d="M12 2v1"/><path d="m4.929 4.929.707.707"/><path d="M12 12v6"/></svg>Complaints
                        </Link>

                        {/* <a href="#" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-zinc-900 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide mr-3 lucide-siren-icon lucide-siren"><path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/><path d="M21 12h1"/><path d="M18.5 4.5 18 5"/><path d="M2 12h1"/><path d="M12 2v1"/><path d="m4.929 4.929.707.707"/><path d="M12 12v6"/></svg>Complaints
                        </a> */}

                        <Link to="/notices" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-zinc-900 group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide mr-3 lucide-megaphone-icon lucide-megaphone"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>                            
                            Notices
                        </Link>


                        <Link to="/service-directory" className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-zinc-900 group">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                            Service Directory
                        </Link>

                    
                    

            <Link to="/maintenance"  className="flex items-center px-4 mr-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-zinc-900 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>Maintenance Dues
            </Link>


                    </nav>
                </div>

                <div className="pb-4 mt-40">
                    <button type="button" className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900 hover:text-white transition-all duration-200 rounded-lg hover:bg-zinc-900">
                        <img className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/2/avatar-male.png" alt="" />
                        Jacob Jones
                        <svg className="w-5 h-5 ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    </button>
                </div>
                        </div>
                    </div>
            </div>

    <div className="flex bg-gray-50 flex-col flex-1">
        <main>
            <div className="py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    {/* <!-- ADD YOUR CONTENT HERE --> */}
                    <DynamicText/>
                    <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <div class="w-full">
        <div class="flex flex-col w-full mb-10 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-zinc-700 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-zinc-700 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Recent Announcements</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                            decentralized network that combines a smart contract and a frontend user interface.</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-zinc-700 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-zinc-700 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Recent Discussions</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                            focus on understanding and analyzing data to provide a semantic web.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full mb-5 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-zinc-700 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-zinc-700 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Latest Polls</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                            to assess the extent up to which project management standards are being upheld.</p>
                    </div>
                </div>
            </div>
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-zinc-700 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-zinc-700 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Complaints Stats</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                            defenses and exploiting weaknesses in a computer system or network.</p>
                    </div>
                </div>
            </div>

            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-zinc-700 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-zinc-700 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">Recent Upgradations</h3>
                                
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                            that eliminate a large amount of manual work and accelerate the development process.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
{/* <!-- source:https://tailwind.besoeasy.com --> */}
                    
                </div>
            </div>
        </main>
    </div>
</div>

        </section>
        

    )
}
export default ResidentDashboard;