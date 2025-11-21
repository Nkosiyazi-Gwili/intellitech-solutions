import { useState, useEffect } from 'react';

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setError(null);
        // Use the deployed backend URL directly
        const API_URL = 'https://intellitech-solutions-backend.vercel.app';
        console.log('Fetching services from:', `${API_URL}/api/services`);
        
        const response = await fetch(`${API_URL}/api/services`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Services data received:', data);
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError(error.message);
        // Fallback to local data
        setServices([
          {
            id: 1,
            icon: '💻',
            title: 'Software Development',
            description: 'Custom software solutions tailored to your business needs with cutting-edge technologies.',
            features: ['Enterprise Applications', 'CRM Systems', 'Custom Solutions']
          },
          {
            id: 2,
            icon: '📱',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
            features: ['iOS & Android', 'React Native', 'Flutter', 'Native Apps']
          },
          {
            id: 3,
            icon: '🌐',
            title: 'Web Development',
            description: 'Responsive and scalable web applications with modern frameworks and best practices.',
            features: ['React/Next.js', 'Node.js', 'Progressive Web Apps', 'E-commerce']
          },
          {
            id: 4,
            icon: '📊',
            title: 'Digital Marketing',
            description: 'Data-driven marketing strategies to boost your online presence and drive growth.',
            features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics']
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive technology solutions to drive your business forward with innovation and excellence.
          </p>
          {error && (
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 rounded text-yellow-700">
              Note: Using demo data - {error}
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id || index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="text-center space-y-6">
                {/* Icon */}
                <div className="text-6xl">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features && service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-blue-600 font-medium">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}