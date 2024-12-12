
import React from 'react';

const Product = () => {
    return (
        <main className="pb-5">
        <div className="max-w-7xl mx-auto p-6 mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800">Box 1 Title</h2>
                    <p className="text-gray-600 mt-2">This is the content for the first box. It has some text inside
                        it.</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Learn More
                    </button>
                </div>
                <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800">Box 2 Title</h2>
                    <p className="text-gray-600 mt-2">This is the content for the second box. It can hold any content
                        you wish.</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Learn More
                    </button>
                </div>
                <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-gray-800">Box 3 Title</h2>
                    <p className="text-gray-600 mt-2">This is the content for the third box. It could be any information
                        or feature.</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Learn More
                    </button>
                     </div>
                </div>
            </div>
        </main>

    );
};

export default Product;
