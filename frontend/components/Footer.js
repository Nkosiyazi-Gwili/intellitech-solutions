import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IT</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">IntelliTech</h3>
                  <span className="text-cyan-400 text-sm font-medium">Solutions</span>
                </div>
              </Link>
              <p className="text-gray-400 leading-relaxed">
                Leading provider of intelligent computing solutions, 
                software development, and digital transformation services.
              </p>
              <div className="flex space-x-4">
                {['📘', '🐦', '📷', '💼'].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="text-sm">{icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {['Software Development', 'Mobile App Development', 'Web Development', 'Digital Marketing'].map((service, index) => (
                  <li key={index}>
                    <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Contact', 'Careers', 'Blog'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; 2024 IntelliTech Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              {['Privacy', 'Terms', 'Sitemap'].map((item, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}