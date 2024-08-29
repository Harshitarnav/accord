import React from 'react';

function LeadershipSection() {
    const leaders = [
        { name: 'Sanyam Goel', title: 'CPA, CISA (USA), CA, B.com(Hons)' },
        { name: 'Vikas Jhunjhunwala', title: 'CPA, CISA (USA), CA, B.com(Hons)' },
        { name: 'Ayushi Jain', title: 'ACCA (UK), CA, B.Com (Hons)' },
        { name: 'Julia Poluektova', title: 'Masters, ISO' },
        { name: 'Lisa Dorsey', title: 'ISO Lead Auditor, GDPR-DPO' },
        { name: 'Govind Gupta', title: 'CA, B.com(H)' },
        { name: 'Shyam Goel', title: 'CA, B.com (H)' },
        { name: 'Tripti Goel', title: 'CA, B Com (Hons), M Com' },
        { name: 'Neha', title: 'CPA, (USA) M.com' },
        { name: 'Priya Goel', title: 'CA, CISA (USA)' },
    ];

    return (
        <section className="bg-white pb-32">
            <div className="container mx-auto px-4 text-left lg:text-center">
                <h2 className="text-[#0F52BA] text-sm font-semibold mb-2">Meet Our Team</h2>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Leadership</h3>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Our philosophy is simple — hire a team of diverse, passionate people and foster a culture
                    that empowers you to do your best work.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {leaders.map((leader, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>
                            <h4 className="text-lg font-semibold">{leader.name}</h4>
                            <p className="text-gray-600 text-sm">{leader.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LeadershipSection;
