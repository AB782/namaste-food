import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [isExpanded, setIsExpanded] = useState(showItems);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setShowIndex();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
        onClick={toggleAccordion}
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {data.title} ({data.itemCards.length})
          </h3>
          {data.description && (
            <p className="text-sm text-gray-500 mt-1">{data.description}</p>
          )}
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4">
          {data.itemCards.map((item) => (
            <div
              key={item.card.info.id}
              className="flex justify-between items-start py-4 border-b border-gray-100 last:border-0"
            >
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">
                  {item.card.info.name}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  ₹{item.card.info.price / 100}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  {item.card.info.description}
                </p>
              </div>
              <div className="ml-4 flex flex-col items-end">
                {item.card.info.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                    alt={item.card.info.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                )}
                <button
                  onClick={() => handleAddItem(item.card.info)}
                  className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
