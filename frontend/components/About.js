export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About <span className="text-primary-600">IntelliTech</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a premier technology consulting firm specializing in intelligent 
                computing solutions that drive business growth and digital transformation.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses with cutting-edge technology solutions that solve complex challenges and drive sustainable growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading provider of intelligent computing solutions, recognized for innovation and excellence.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💎</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-600">
                    Innovation, Quality, Integrity, and Client Success drive everything we do.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Team Members' },
                { number: '150+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Team Card */}
              <div className="card p-6 bg-gradient-to-br from-primary-500 to-cyan-500 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">👨‍💻</div>
                  <div>
                    <div className="font-bold text-lg">Expert Team</div>
                    <div className="text-primary-100 text-sm">50+ Professionals</div>
                  </div>
                </div>
              </div>

              {/* Awards Card */}
              <div className="card p-6 bg-gradient-to-br from-amber-500 to-orange-500 text-white transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-12">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <div className="font-bold text-lg">Award Winning</div>
                    <div className="text-amber-100 text-sm">15+ Industry Awards</div>
                  </div>
                </div>
              </div>

              {/* Global Card */}
              <div className="card p-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white transform rotate-2 hover:rotate-0 transition-transform duration-300 -mt-8">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🌍</div>
                  <div>
                    <div className="font-bold text-lg">Global Reach</div>
                    <div className="text-green-100 text-sm">10+ Countries</div>
                  </div>
                </div>
              </div>

              {/* Innovation Card */}
              <div className="card p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">💡</div>
                  <div>
                    <div className="font-bold text-lg">Innovation</div>
                    <div className="text-purple-100 text-sm">Cutting-edge Tech</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Element */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-cyan-100 rounded-3xl -z-10 transform rotate-6 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
}