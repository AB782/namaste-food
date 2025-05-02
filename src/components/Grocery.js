const Grocery = () => {
  const groceryItems = [
    {
      id: 1,
      name: "Fresh Fruits",
      description: "Seasonal and organic fruits",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Vegetables",
      description: "Farm-fresh vegetables",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Dairy Products",
      description: "Fresh milk, cheese, and yogurt",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Bakery Items",
      description: "Freshly baked bread and pastries",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Pantry Staples",
      description: "Rice, pasta, and cooking essentials",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Beverages",
      description: "Juices, teas, and coffee",
      image:
        "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Grocery Store</h1>
          <p className="mt-4 text-xl text-gray-600">
            Fresh and high-quality groceries delivered to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {groceryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {item.description}
                </p>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-indigo-200">
                <svg
                  className="w-6 h-6 text-indigo-600 transition-colors duration-300 group-hover:text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                Fresh Products
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Direct from farm to your home
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-indigo-200">
                <svg
                  className="w-6 h-6 text-indigo-600 transition-colors duration-300 group-hover:text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                Fast Delivery
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Same day delivery available
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 group-hover:bg-indigo-200">
                <svg
                  className="w-6 h-6 text-indigo-600 transition-colors duration-300 group-hover:text-indigo-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                Secure Payment
              </h3>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                100% secure payment options
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
