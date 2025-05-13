

import React from 'react';

const handleBookService = async () => {
    try {
        const response = await fetch('http://localhost:5000/send-sms', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();
        if (data.success) {
            alert("SMS sent: Your service is requested");
        } else {
            alert("Failed to send SMS");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error sending SMS");
    }
};


const ServiceDirectory = () => {
    const services = [
        {
            title: 'Electricians',
            members: [
                {
                    name: 'John Doe',
                    phone: '123-456-7890',
                    location: 'Downtown',
                },
                {
                    name: 'Jane Smith',
                    phone: '987-654-3210',
                    location: 'Uptown',
                },
                {
                    name: 'Sam Johnson',
                    phone: '555-555-5555',
                    location: 'Midtown',
                },
                {
                    name: 'Chris Lee',
                    phone: '111-222-3333',
                    location: 'Eastside',
                },
            ],
        },
        {
            title: 'Plumbers',
            members: [
                {
                    name: 'Mike Brown',
                    phone: '234-567-8901',
                    location: 'West End',
                },
                {
                    name: 'Anna White',
                    phone: '654-321-0987',
                    location: 'Northside',
                },
                {
                    name: 'Bob Taylor',
                    phone: '444-555-6666',
                    location: 'Southside',
                },
                {
                    name: 'Tom Green',
                    phone: '777-888-9999',
                    location: 'Central',
                },
            ],
        },
        {
            title: 'Painters',
            members: [
                {
                    name: 'David Adams',
                    phone: '321-654-9870',
                    location: 'Riverdale',
                },
                {
                    name: 'Lucy Martin',
                    phone: '888-777-6666',
                    location: 'Sunnydale',
                },
                {
                    name: 'Jake White',
                    phone: '555-444-3333',
                    location: 'Hillside',
                },
                {
                    name: 'Megan Clark',
                    phone: '222-333-4444',
                    location: 'Seaside',
                },
            ],
        },
        {
            title: 'Carpenters',
            members: [
                {
                    name: 'James Turner',
                    phone: '123-789-4560',
                    location: 'Parkview',
                },
                {
                    name: 'Sophia Miller',
                    phone: '987-321-6540',
                    location: 'Oakwood',
                },
                {
                    name: 'Michael Harris',
                    phone: '555-777-8888',
                    location: 'Pinehill',
                },
                {
                    name: 'Laura Walker',
                    phone: '333-444-5555',
                    location: 'Lakeside',
                },
            ],
        },
    ];

    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-2xl font-mono font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                        Service Directory
                    </h2>
                </div>

                {services.map((service, index) => (
                    <div key={index} className="mt-12 font-mono">
                        <h3 className="text-xl font-bold text-start text-gray-800">{service.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                            {service.members.map((member, idx) => (
                                <div key={idx} className="max-w-xs mx-auto bg-white border rounded-lg shadow-md hover:shadow-lg">
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                                        <p className="text-sm text-gray-600">Phone: {member.phone}</p>
                                        <p className="text-sm text-gray-600">Location: {member.location}</p>
                                        <div className="flex mt-4 space-x-4">
                                            <button
                                                className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-zinc-900 group"
                                                onClick={() => alert(`Calling ${member.name}`)}>
                                                Call
                                            </button>
                                            <button
                                                className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 hover:text-white rounded-lg hover:bg-zinc-900 group"
                                                onClick={handleBookService}
                                            >
                                                Book Service
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceDirectory;
