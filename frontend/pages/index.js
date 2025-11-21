import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading IntelliTech Solutions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>IntelliTech Solutions | Intelligence Computing Services</title>
        <meta name="description" content="Leading provider of software development, mobile apps, web development, and digital marketing solutions" />
      </Head>

      {/* Test with minimal content first */}
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">IntelliTech Solutions</h1>
          <p className="text-xl mb-8">Intelligent Computing Services</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}