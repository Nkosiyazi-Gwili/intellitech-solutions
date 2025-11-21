import Head from 'next/head';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundary';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  console.log('Home page loaded');
  // Test the API call directly
    fetch('https://intellitech-solutions-backend.vercel.app/api/services')
      .then(response => {
        console.log('API Response status:', response.status);
        return response.json();
      })
      .then(data => console.log('API Data:', data))
      .catch(error => console.error('API Error:', error));
  }, []);

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
    <ErrorBoundary>
      <div className="min-h-screen">
        <Head>
          <title>IntelliTech Solutions | Intelligence Computing Services</title>
          <meta name="description" content="Leading provider of software development, mobile apps, web development, and digital marketing solutions" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}