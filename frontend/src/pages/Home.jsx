// App.jsx
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
// Button Component
function Button({ variant = 'primary', size = 'md', children, className = '', ...props }) {
  const baseClasses = 'whitespace-nowrap cursor-pointer font-medium rounded-lg transition-all duration-200 flex items-center justify-center';
  const variants = {
    primary: 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-amber-500 hover:bg-amber-600 text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-50',
    ghost: 'text-green-600 hover:bg-green-50',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm h-8',
    md: 'px-4 py-2 text-base h-10',
    lg: 'px-6 py-3 text-lg h-12',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}

// Card Component
function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-100 ${
        hover ? 'hover:shadow-md transition-shadow duration-200' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Hero Section
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        'https://readdy.ai/api/search-image?query=Modern%20smart%20farming%20with%20drones%20flying%20over%20green%20crop%20fields%2C%20precision%20agriculture%20technology%2C%20digital%20farming%20innovation%2C%20IoT%20sensors%20in%20agricultural%20field%2C%20sustainable%20farming%20practices%2C%20bright%20morning%20light&width=1920&height=1080&seq=hero-slide1&orientation=landscape',
      title: 'Smart Farming for Better Tomorrow',
      subtitle: 'Advanced Technology',
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=Farmer%20using%20tablet%20computer%20in%20wheat%20field%20with%20satellite%20connectivity%2C%20digital%20agriculture%20monitoring%2C%20modern%20farming%20technology%2C%20GPS%20guided%20farming%20equipment%2C%20smart%20agriculture%20solutions&width=1920&height=1080&seq=hero-slide2&orientation=landscape',
      title: 'Smart Farming for Better Tomorrow',
      subtitle: 'Digital Solutions',
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=Green%20agricultural%20landscape%20with%20modern%20irrigation%20systems%2C%20sustainable%20crop%20cultivation%2C%20eco-friendly%20farming%20methods%2C%20renewable%20energy%20in%20agriculture%2C%20environmental%20conservation%20farming&width=1920&height=1080&seq=hero-slide3&orientation=landscape',
      title: 'Smart Farming for Better Tomorrow',
      subtitle: 'Sustainable Growth',
    },
    {
      image:
        'https://readdy.ai/api/search-image?query=Happy%20farmers%20celebrating%20successful%20harvest%20in%20golden%20crop%20field%2C%20agricultural%20prosperity%2C%20community%20farming%20success%2C%20traditional%20and%20modern%20farming%20blend%2C%20rural%20development%20achievement&width=1920&height=1080&seq=hero-slide4&orientation=landscape',
      title: 'Smart Farming for Better Tomorrow',
      subtitle: 'Prosperity & Growth',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-3xl">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-green-500/90 text-white rounded-full text-sm font-semibold">
              {slides[currentSlide].subtitle}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-yellow-400">Smart Farming</span>
            <br />
            for Better Tomorrow
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Revolutionize your agriculture with AI-powered insights, real-time monitoring, government scheme
            integration, and data-driven decisions for maximum yield and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="px-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300"
            >
              <i className="ri-plant-line mr-2"></i> Start Farming Smart
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

// About Section (unchanged)
function AboutSection() {
  return (
    // your AboutSection code — same as earlier
    <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - App Icon and Visual */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl shadow-2xl mb-8 transform hover:scale-105 transition-transform duration-300">
              <i className="ri-seedling-line text-6xl text-white"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">KrishiMitra</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              KrishiMitra is India's most comprehensive agricultural platform, designed to empower farmers 
              with cutting-edge technology, government scheme access, and data-driven farming solutions. 
              Our mission is to transform traditional farming into smart, sustainable, and profitable agriculture.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-1">4+</div>
                <div className="text-gray-600 font-medium">Active Features</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-gray-600 font-medium">Govt Schemes</div>
              </div>
            </div>
          </div>

          {/* Right side - Description */}
          <div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-green-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Transforming Indian Agriculture
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="ri-smartphone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Smart Technology Integration</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Leverage AI-powered insights, satellite imagery, and IoT sensors for precision farming and data-driven decisions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="ri-government-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Government Scheme Access</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Direct access to all central and state government schemes, subsidies, and benefits with simplified application process.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <i className="ri-community-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Farmer Community Network</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Connect with fellow farmers, share experiences, and learn from agricultural experts across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section (unchanged)
function MyFeaturesSection() {
         const navigate = useNavigate();

  const [hoveredFeature, setHoveredFeature] = useState(null);
  const features = [
    {
      id: 1,
      title: 'My Soil',
      description: 'Advanced soil analysis using AI technology to determine soil health, nutrient levels, pH balance, and personalized fertilizer recommendations.',
      image: 'https://readdy.ai/api/search-image?query=Digital%20soil%20testing%20with%20modern%20equipment%2C%20agricultural%20scientist%20analyzing%20soil%20samples%20with%20technology%2C%20precision%20agriculture%20soil%20health%20monitoring%2C%20professional%20soil%20analysis%20laboratory&width=400&height=300&seq=my-soil&orientation=landscape',
      icon: 'ri-plant-line',
      color: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
      benefits: [
        'Real-time soil pH monitoring',
        'Nutrient deficiency detection',
        'Personalized fertilizer suggestions',
        'Soil health score tracking'
      ]
    },
    {
      id: 2,
      title: 'Leaf Scan',
      description: 'AI-powered plant disease detection through leaf image analysis. Identify diseases, pests, and nutrient deficiencies instantly with treatment recommendations.',
      image: 'https://readdy.ai/api/search-image?query=Farmer%20using%20smartphone%20to%20scan%20crop%20leaves%20for%20disease%20detection%2C%20AI%20plant%20diagnosis%20technology%2C%20mobile%20agriculture%20app%20leaf%20analysis%2C%20digital%20farming%20disease%20identification&width=400&height=300&seq=leaf-scan&orientation=landscape',
      icon: 'ri-leaf-line',
      color: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      benefits: [
        'Instant disease identification',
        'Pest detection and control',
        'Treatment recommendations',
        'Crop health monitoring'
      ]
    },
    {
      id: 3,
      title: 'Market Predictor',
      description: 'Predictive analytics for crop prices, market trends, and demand forecasting. Make informed decisions about what to grow and when to sell.',
      image: 'https://readdy.ai/api/search-image?query=Agricultural%20market%20analysis%20dashboard%20with%20price%20prediction%20charts%2C%20farmer%20checking%20crop%20prices%20on%20digital%20device%2C%20market%20trends%20analytics%20for%20agriculture%2C%20farming%20economic%20data%20visualization&width=400&height=300&seq=market-predictor&orientation=landscape',
      icon: 'ri-line-chart-line',
      color: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      benefits: [
        'Price trend predictions',
        'Market demand analysis',
        'Best selling time alerts',
        'Profit optimization tips'
      ]
    },
    {
      id: 4,
      title: 'Govt Schemes',
      description: 'Access all central and state government agricultural schemes, subsidies, and benefits directly through the platform.',
      image: 'https://st2.depositphotos.com/1996555/5504/i/450/depositphotos_55042265-stock-photo-india-government-concept.jpg',
      icon: 'ri-government-line',
      color: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      benefits: [
        'Central and state scheme access',
        'Subsidy eligibility info',
        'Easy application process',
        'Government updates notifications'
      ]
    }
  ];

  return (
    // your MyFeaturesSection code — copy your full code here
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Our Core <span className="text-green-600">Features</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Powerful tools designed to revolutionize your farming experience with cutting-edge technology and AI-driven insights.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {features.map((feature) => (
        <Card
          key={feature.id}
          className={`group relative overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 bg-gradient-to-br ${feature.bgGradient} border-0 shadow-xl hover:shadow-2xl`}
          onMouseEnter={() => setHoveredFeature(feature.id)}
          onMouseLeave={() => setHoveredFeature(null)}
        >
          {/* Background Image with Overlay */}
          <div className="relative h-64 overflow-hidden rounded-t-xl">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${feature.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

            {/* Feature Icon */}
            <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
              <i className={`${feature.icon} text-white text-xl`}></i>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {feature.description}
            </p>

            {/* Benefits List */}
            <div className={`space-y-2 transition-all duration-300 ${
              hoveredFeature === feature.id
                ? 'opacity-100 max-h-40 mb-6'
                : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
              {feature.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  {benefit}
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className={`flex items-center justify-between transition-all duration-300 ${
              hoveredFeature === feature.id ? 'transform translate-y-0' : 'transform translate-y-2'
            }`}>
              <button onClick={() => {
                if (feature.id === 1) navigate("/soil-data");
                else if (feature.id === 4) navigate("/scheme");
                else alert("Feature coming soon!");
              }} className={`px-6 py-3 bg-gradient-to-r ${feature.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap`}>
                <i className="ri-arrow-right-line mr-2"></i>
                Try Now
              </button>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="flex items-center text-yellow-400">
                  <i className="ri-star-fill text-sm"></i>
                  <i className="ri-star-fill text-sm"></i>
                  <i className="ri-star-fill text-sm"></i>
                  <i className="ri-star-fill text-sm"></i>
                  <i className="ri-star-fill text-sm"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}></div>
        </Card>
      ))}
    </div>
  </div>
</section>

  );
}

// Main App
export default function Page1() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MyFeaturesSection />
    </div>
  );
}
