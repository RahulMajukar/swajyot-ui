// ExampleCarouselUsage.jsx
import React from 'react';
import Carousel from './Carousel';
import { Star, Users, Zap, Shield } from 'lucide-react';

const ExampleCarouselUsage = () => {
  // Example carousel items (images with overlay content)
  const carouselItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Enterprise Solutions',
      description: 'Custom software solutions for large organizations',
      badge: 'Featured',
      features: ['Scalable', 'Secure', 'Cloud-Native']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Mobile Applications',
      description: 'Cross-platform mobile apps with native performance',
      badge: 'Popular',
      features: ['iOS & Android', 'Offline Support', 'Push Notifications']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'AI & Machine Learning',
      description: 'Intelligent systems that learn and adapt',
      badge: 'Innovative',
      features: ['Predictive Analytics', 'Computer Vision', 'NLP']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Data Analytics',
      description: 'Transform data into actionable insights',
      badge: 'Analytics',
      features: ['Real-time Dashboards', 'Big Data', 'Visualizations']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure',
      badge: 'Migration',
      features: ['AWS/Azure/GCP', 'Zero Downtime', 'Cost Optimized']
    }
  ];

  return (
    <div className="max-w-full mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-primary-600">Featured</span> Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our portfolio of innovative software solutions that drive business transformation
        </p>
      </div>

      <div className="h-[500px] md:h-[600px]">
        <Carousel
          items={carouselItems.map((item) => (
            <CarouselSlide key={item.id} item={item} />
          ))}
          autoScroll={true}
          interval={4000}
          showDots={true}
          showArrows={true}
          showProgress={true}
          className="h-full"
        />
      </div>

      {/* Feature highlights below carousel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl">
          <Zap className="h-10 w-10 text-primary-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Agile development for rapid deployment</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl">
          <Shield className="h-10 w-10 text-primary-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Scalable</h3>
          <p className="text-gray-600">Enterprise-grade security and scalability</p>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl">
          <Users className="h-10 w-10 text-primary-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
          <p className="text-gray-600">Round-the-clock technical support</p>
        </div>
      </div>
    </div>
  );
};

// Carousel Slide Component
const CarouselSlide = ({ item }) => {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>
      
      {/* Overlay Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 w-fit">
          {item.badge}
        </div>
        
        {/* Title & Description */}
        <h3 className="text-3xl md:text-4xl font-bold mb-4 max-w-2xl">
          {item.title}
        </h3>
        <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl">
          {item.description}
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-3 mb-8">
          {item.features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg"
            >
              <Star className="h-3 w-3" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
            View Case Study
          </button>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExampleCarouselUsage;