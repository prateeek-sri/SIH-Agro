import { useState,React }from 'react';

export default function Page2() {
  return (
    <div>
      {/* <Button/> */}
      {/* <Card/> */}
      <GovernmentLinksSection />
      <GovernmentSchemesSection />
    </div>
  );
}

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

function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  const baseClasses =
    'whitespace-nowrap cursor-pointer font-medium rounded-lg transition-all duration-200 flex items-center justify-center';

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
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function GovernmentLinksSection() {
  const governmentLinks = [
    {
      name: 'Ministry of Agriculture & Farmers Welfare',
      url: 'https://agricoop.nic.in/',
      icon: 'ri-government-line',
      description: 'Official portal for agricultural policies and schemes',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'PM-KISAN Samman Nidhi',
      url: 'https://pmkisan.gov.in/',
      icon: 'ri-currency-line',
      description: 'Direct income support scheme for farmers',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Soil Health Card Portal',
      url: 'https://soilhealth.dac.gov.in/',
      icon: 'ri-leaf-line',
      description: 'Get soil health status and nutrient recommendations',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'eNAM - National Agriculture Market',
      url: 'https://enam.gov.in/',
      icon: 'ri-store-3-line',
      description: 'Online trading platform for agricultural commodities',
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Pradhan Mantri Fasal Bima Yojana',
      url: 'https://pmfby.gov.in/',
      icon: 'ri-shield-check-line',
      description: 'Crop insurance scheme for risk mitigation',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'Kisan Call Centre',
      url: 'https://kisancallcentre.gov.in/',
      icon: 'ri-phone-line',
      description: '24x7 helpline for agricultural queries (1800-180-1551)',
      color: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Agri Market Intelligence',
      url: 'https://agmarknet.gov.in/',
      icon: 'ri-line-chart-line',
      description: 'Real-time market prices and agricultural statistics',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Krishi Vigyan Kendra',
      url: 'https://kvk.icar.gov.in/',
      icon: 'ri-book-open-line',
      description: 'Agricultural extension services and training centers',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Digital India Land Records',
      url: 'https://landrecords.gov.in/',
      icon: 'ri-map-2-line',
      description: 'Digitized land records and property verification',
      color: 'from-teal-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Important <span className="text-green-600">Government Agricultural Links</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access essential government portals and services for agricultural support, schemes, and resources directly from here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {governmentLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
            >
              <div className="relative z-10 flex items-start space-x-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${link.icon} text-2xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                    {link.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {link.description}
                  </p>
                  <div className="flex items-center mt-3 text-green-600 font-medium group-hover:text-green-700 transition-colors duration-300">
                    <span className="text-sm">Visit Portal</span>
                    <i className="ri-external-link-line ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need More Information?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              For additional agricultural resources, schemes, and support services, contact your local agricultural department or visit the respective state government portals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-xl px-6 py-3 backdrop-blur-sm">
                <i className="ri-phone-line mr-2"></i>
                Toll Free: 1800-180-1551
              </div>
              <div className="bg-white/20 rounded-xl px-6 py-3 backdrop-blur-sm">
                <i className="ri-mail-line mr-2"></i>
                support@krishimitra.gov.in
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GovernmentSchemesSection() {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const schemes = [
    {
      id: 1,
      title: 'Government Loans',
      subtitle: 'Agricultural Credit Schemes',
      icon: 'ri-bank-line',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://readdy.ai/api/search-image?query=Farmer%20receiving%20agricultural%20loan%20from%20bank%20officer%2C%20government%20agricultural%20credit%20scheme%2C%20rural%20banking%20services%2C%20financial%20assistance%20for%20farming%2C%20official%20loan%20documentation%20process&width=500&height=300&seq=gov-loans&orientation=landscape',
      benefits: [
        'Low interest rates starting from 4%',
        'Collateral-free loans up to ₹1.6 lakh',
        'Flexible repayment options',
        'Quick approval process within 15 days',
        'Digital application and tracking'
      ],
      stats: {
        applicants: '1.2M+',
        villages: '45,000+',
        adoption: '78%',
        distributed: '₹12,500 Cr'
      },
      description: 'Comprehensive agricultural loan schemes designed to provide financial support to farmers for crop cultivation, farm equipment purchase, and agricultural infrastructure development.'
    },
    {
      id: 2,
      title: 'Crop Insurance',
      subtitle: 'Pradhan Mantri Fasal Bima Yojana',
      icon: 'ri-shield-check-line',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      image: 'https://readdy.ai/api/search-image?query=Agricultural%20insurance%20claim%20settlement%20officer%20inspecting%20damaged%20crops%2C%20crop%20insurance%20assessment%20in%20agricultural%20field%2C%20government%20crop%20protection%20scheme%2C%20farming%20risk%20management%20services&width=500&height=300&seq=crop-insurance&orientation=landscape',
      benefits: [
        'Premium as low as 1.5% for Rabi crops',
        'Coverage against natural calamities',
        'Quick claim settlement process',
        'Technology-based loss assessment',
        'Coverage for all food crops and oilseeds'
      ],
      stats: {
        applicants: '5.5M+',
        villages: '85,000+',
        adoption: '65%',
        distributed: '₹8,200 Cr'
      },
      description: 'Comprehensive crop insurance scheme providing financial support to farmers in case of crop loss due to natural calamities, pests, and diseases.'
    },
    {
      id: 3,
      title: 'Subsidy Schemes',
      subtitle: 'Agricultural Input Subsidies',
      icon: 'ri-government-line',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      image: 'https://readdy.ai/api/search-image?query=Government%20official%20distributing%20agricultural%20subsidies%20to%20farmers%2C%20subsidy%20scheme%20implementation%20in%20rural%20area%2C%20farming%20equipment%20subsidy%20distribution%2C%20agricultural%20support%20program%20ceremony&width=500&height=300&seq=subsidy-schemes&orientation=landscape',
      benefits: [
        'Fertilizer subsidy up to 50%',
        'Seed subsidy for certified varieties',
        'Equipment subsidy up to 40%',
        'Irrigation subsidy programs',
        'Organic farming incentives'
      ],
      stats: {
        applicants: '3.8M+',
        villages: '62,000+',
        adoption: '72%',
        distributed: '₹15,800 Cr'
      },
      description: 'Various subsidy schemes covering fertilizers, seeds, equipment, and other agricultural inputs to reduce farming costs and increase profitability.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Government <span className="text-green-600">Schemes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive government support schemes designed to empower farmers and boost agricultural growth across India.
          </p>
        </div>

        {/* Scheme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {schemes.map((scheme) => (
            <Card 
              key={scheme.id}
              className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedScheme === scheme.id 
                  ? 'ring-4 ring-green-500 shadow-2xl' 
                  : 'hover:shadow-xl'
              } ${scheme.bgColor} border-0`}
              onClick={() => setSelectedScheme(selectedScheme === scheme.id ? null : scheme.id)}
            >
              <div className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${scheme.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${scheme.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {scheme.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{scheme.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-medium">View Details</span>
                  <i className={`ri-arrow-${selectedScheme === scheme.id ? 'up' : 'down'}-line text-green-600 transition-transform duration-300`}></i>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Selected Scheme Details */}
        {selectedScheme && (
          <div className="mt-12 animate-fade-in">
            {schemes.filter(scheme => scheme.id === selectedScheme).map((scheme) => (
              <Card key={scheme.id} className="overflow-hidden bg-white shadow-2xl border-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left side - Image and Description */}
                  <div className="p-8">
                    <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                      <img 
                        src={scheme.image}
                        alt={scheme.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${scheme.color} opacity-20`}></div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{scheme.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{scheme.description}</p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className={`px-6 py-3 bg-gradient-to-r ${scheme.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                        <i className="ri-file-text-line mr-2"></i>
                        Apply Now
                      </Button>
                      <Button variant="outline" className="px-6 py-3 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600">
                        <i className="ri-information-line mr-2"></i>
                        Learn More
                      </Button>
                    </div>
                  </div>

                  {/* Right side - Benefits and Stats */}
                  <div className="p-8 bg-gray-50">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h4>
                    <div className="space-y-3 mb-8">
                      {scheme.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <i className="ri-check-double-line text-green-500 mr-3 mt-1 flex-shrink-0"></i>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Statistics */}
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Impact Statistics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-4 text-center shadow-md">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{scheme.stats.applicants}</div>
                        <div className="text-gray-600 text-sm">Applications</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center shadow-md">
                        <div className="text-2xl font-bold text-green-600 mb-1">{scheme.stats.villages}</div>
                        <div className="text-gray-600 text-sm">Villages Covered</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center shadow-md">
                        <div className="text-2xl font-bold text-purple-600 mb-1">{scheme.stats.adoption}</div>
                        <div className="text-gray-600 text-sm">Digital Adoption</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 text-center shadow-md">
                        <div className="text-2xl font-bold text-orange-600 mb-1">{scheme.stats.distributed}</div>
                        <div className="text-gray-600 text-sm">Benefits Distributed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
