// pages/index.js
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Placeholder for data fetching logic
        // Example data for demonstration purposes
        setData({
            message: "This is a sample message from useEffect.",
            services: [
                { name: 'Website', link: 'https://www.prabhubank.com', icon: '/website.svg' },
                { name: 'Mobile Banking', link: 'https://digiprabhu.prabhubank.com/sign-in', icon: '/mobile.svg' },
                { name: 'Internet Banking', link: 'https://ibank.prabhubank.com/#/login', icon: '/internet.svg' },
                { name: 'Online Account Opening', link: 'https://www.prabhubank.com/online/', icon: '/account.svg' }
            ]
        });
    }, []);

    return (
        <div>
            <main>
                <section id="features" className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-1">
                    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                        <h2 className="font-bold text-lg leading-[1.1] sm:text-lg md:text-lg">
                            Prabhu Bank Services
                        </h2>
                    </div>

                    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
                        {data?.services?.map((service, index) => (
                            <div key={index}
                                 className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                <a href={service.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="flex flex-col justify-between h-auto rounded-md p-4">
                                        {/* SVG Icon */}
                                        <img src={service.icon} width={30} height={30} alt={service.name}/>

                                        {/* Title */}
                                        <div className="space-y-1">
                                            <h3 className="font-bold text-lg text-teal-600">{service.name}</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>


                    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
                        {data?.services?.map((service, index) => (
                            <div key={index}
                                 className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                <a href={service.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="flex flex-col justify-between h-auto rounded-md p-4">
                                        {/* SVG Icon */}
                                        <img src={service.icon} width={30} height={30} alt={service.name}/>

                                        {/* Title */}
                                        <div className="space-y-1">
                                            <h3 className="font-bold text-lg text-teal-600">{service.name}</h3>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>


                </section>
            </main>
        </div>
    );
};

export default Home;
