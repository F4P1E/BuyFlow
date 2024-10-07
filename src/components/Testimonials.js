import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
                <div className="space-y-4">
                    <div className="bg-gray-200 p-4 rounded shadow">
                        <p className="text-lg">"Amazing products! Will definitely shop again."</p>
                        <cite className="block mt-2 font-semibold">- Happy Customer</cite>
                    </div>
                    <div className="bg-gray-200 p-4 rounded shadow">
                        <p className="text-lg">"Great service and fast delivery!"</p>
                        <cite className="block mt-2 font-semibold">- Satisfied Buyer</cite>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
