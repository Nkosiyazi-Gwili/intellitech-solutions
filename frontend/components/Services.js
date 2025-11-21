import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback data
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
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive technology solutions to drive your business forward with innovation and excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="card p-8 group hover:bg-gradient-to-br hover:from-primary-50 hover:to-cyan-50 border border-gray-200"
            >
              <div className="text-center space-y-6">
                {/* Icon */}
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-primary-600 font-medium">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card p-8 bg-gradient-to-r from-primary-600 to-cyan-600 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-primary-100 mb-6">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}