export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-purple-900 text-white pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Hero Text */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Intelligent
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Computing
                </span>
                Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                We deliver cutting-edge software development, mobile applications, 
                and digital marketing solutions powered by AI and data-driven insights.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                Start Your Project
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">150+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              {/* Main Code Window */}
              <div className="card p-6 bg-white/10 backdrop-blur-lg border border-white/20">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-gray-300 text-sm">intellitech-app.js</div>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-cyan-400">function <span className="text-green-400">innovate</span>() {'{'}</div>
                  <div className="text-gray-300 ml-4">return <span className="text-yellow-400">"success"</span>;</div>
                  <div className="text-cyan-400">{'}'}</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 animate-float">
                <div className="card p-4 bg-cyan-500 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="text-lg">🚀</div>
                    <div className="text-sm font-semibold">Fast Development</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="card p-4 bg-green-500 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="text-lg">🔒</div>
                    <div className="text-sm font-semibold">Secure Solutions</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 animate-float" style={{ animationDelay: '2s' }}>
                <div className="card p-4 bg-purple-500 text-white">
                  <div className="flex items-center space-x-2">
                    <div className="text-lg">📈</div>
                    <div className="text-sm font-semibold">Growth Focused</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}