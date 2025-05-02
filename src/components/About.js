import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-down">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Welcome to Namaste-Food, where we bring the best culinary
              experiences to your doorstep. Our mission is to make food delivery
              simple, reliable, and enjoyable for everyone.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 animate-slide-up delay-100">
              <div className="text-4xl font-bold text-indigo-600 mb-2 animate-count">
                10K+
              </div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 animate-slide-up delay-200">
              <div className="text-4xl font-bold text-indigo-600 mb-2 animate-count">
                500+
              </div>
              <div className="text-gray-600">Partner Restaurants</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 animate-slide-up delay-300">
              <div className="text-4xl font-bold text-indigo-600 mb-2 animate-count">
                50+
              </div>
              <div className="text-gray-600">Cities Served</div>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] animate-slide-right">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600">
                Founded with a passion for great food and exceptional service,
                we've been connecting people with their favorite restaurants
                since our inception. Our journey began with a simple idea: to
                make food delivery as enjoyable as dining out.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-[1.02] animate-slide-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Values
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li className="hover:text-indigo-600 transition-colors duration-300">
                  Quality and Freshness
                </li>
                <li className="hover:text-indigo-600 transition-colors duration-300">
                  Customer Satisfaction
                </li>
                <li className="hover:text-indigo-600 transition-colors duration-300">
                  Innovation in Service
                </li>
                <li className="hover:text-indigo-600 transition-colors duration-300">
                  Community Support
                </li>
              </ul>
            </div>
          </div>

          {/* Meet Our Team Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-16 animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center animate-slide-down">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center transform transition-all duration-300 hover:scale-105 animate-slide-up delay-100">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-100">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299539-5187871.png"
                    alt="Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Aayush Bansal
                </h3>
                <p className="text-indigo-600 mb-2">Frontend Developer</p>
                <p className="text-gray-600 text-sm">
                  Crafting beautiful and responsive user interfaces with React
                  and Tailwind CSS
                </p>
              </div>
              <div className="text-center transform transition-all duration-300 hover:scale-105 animate-slide-up delay-200">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-100">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299539-5187871.png"
                    alt="Backend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Aayush Bansal
                </h3>
                <p className="text-indigo-600 mb-2">Backend Developer</p>
                <p className="text-gray-600 text-sm">
                  Building robust and scalable server-side applications with
                  Node.js and Express
                </p>
              </div>
              <div className="text-center transform transition-all duration-300 hover:scale-105 animate-slide-up delay-300">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-indigo-100">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299539-5187871.png"
                    alt="Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Aayush Bansal
                </h3>
                <p className="text-indigo-600 mb-2">Full Stack Developer</p>
                <p className="text-gray-600 text-sm">
                  Creating end-to-end solutions with expertise in both frontend
                  and backend technologies
                </p>
              </div>
            </div>
          </div>

          {/* Current User Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center animate-slide-down">
              Currently Logged In
            </h2>
            <div className="flex justify-center">
              <UserContext.Consumer>
                {({ loggedInUser }) => (
                  <div className="text-center">
                    <p className="text-lg text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
                      {loggedInUser}
                    </p>
                  </div>
                )}
              </UserContext.Consumer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
