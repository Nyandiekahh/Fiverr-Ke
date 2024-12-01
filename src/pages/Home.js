import React from 'react';
import { CircleDollarSign, ShieldCheck, BadgeCheck, ChevronRight, Star, Code, LineChart, PenTool } from 'lucide-react';

// SVG Animation Components
const ServiceCardPlaceholder = ({ icon: Icon, color }) => (
  <div className="w-full h-48 bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
    <Icon 
      size={64} 
      className={`${color} animate-pulse transform group-hover:scale-110 transition-transform duration-300`}
    />
  </div>
);

function Home() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites, e-commerce solutions, and web applications',
      icon: Code,
      iconColor: 'text-blue-500',
      price: 'From KSH 15,000'
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, social media management, and paid advertising',
      icon: LineChart,
      iconColor: 'text-green-500',
      price: 'From KSH 10,000'
    },
    {
      title: 'Content Writing',
      description: 'Blog posts, articles, and copywriting services',
      icon: PenTool,
      iconColor: 'text-purple-500',
      price: 'From KSH 5,000'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your Marketplace for Local Talent
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with skilled Kenyan freelancers for your business needs. Quality work, affordable rates, secure payments.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="What service are you looking for?"
                  className="w-full px-6 py-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Search
                </button>
              </div>
              <div className="mt-4 text-gray-600">
                Popular: Web Design, Mobile Apps, Logo Design, Content Writing
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-green-600" />
              <span>Verified Freelancers</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleDollarSign className="w-5 h-5 text-green-600" />
              <span>Best Market Rates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Popular Services</h2>
          <p className="text-gray-600 mb-8">Browse our most sought-after services</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <ServiceCardPlaceholder icon={service.icon} color={service.iconColor} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">{service.price}</span>
                    <button className="text-green-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More 
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of the sections remain the same */}
      {/* How It Works Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center">How It Works</h2>
          <p className="text-gray-600 mb-12 text-center">Get your project done in three simple steps</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Post Your Project',
                desc: 'Share your project details and requirements. It\'s free and only takes a few minutes.',
                icon: '1'
              },
              {
                title: 'Review & Select',
                desc: 'Browse proposals from skilled freelancers and choose the best match for your needs.',
                icon: '2'
              },
              {
                title: 'Complete Your Project',
                desc: 'Work with your chosen freelancer and only release payment when you are satisfied.',
                icon: '3'
              }
            ].map((step) => (
              <div key={step.title} className="text-center relative">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center">What Our Users Say</h2>
          <p className="text-gray-600 mb-12 text-center">Real feedback from our community</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'John Kamau',
                role: 'Business Owner',
                comment: 'Found an amazing web developer who delivered exactly what I needed for my online store.',
                rating: 5
              },
              {
                name: 'Sarah Wanjiku',
                role: 'Startup Founder',
                comment: 'The quality of work and professionalism of freelancers here is outstanding.',
                rating: 5
              },
              {
                name: 'David Ochieng',
                role: 'Marketing Manager',
                comment: 'Great platform for finding local talent. The process was smooth and efficient.',
                rating: 5
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-sm border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join thousands of businesses and freelancers who trust our platform</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Post a Project
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Browse Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;