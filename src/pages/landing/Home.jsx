import { ArrowRight, Shield, Users, BarChart, Lock, TrendingUp, Zap, CheckCircle, Cpu, FileText, Star, Rocket, Target, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import ExampleCarouselUsage from '../../components/ExampleCarouselUsage'

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <DigitalTransformationSection />
      <FeaturesSection />
      <ExampleCarouselUsage />
      <IndustryExpertiseSection />
      <CTASection />
    </div>
  )
}

// Hero Section Component
const HeroSection = () => {
  const taglines = [
    { text: 'EXCELLENCE Focussed', color: 'bg-green-50', dotColor: 'bg-green-500', textColor: 'text-green-700' },
    { text: 'TIME BOUND Deliverables', color: 'bg-blue-50', dotColor: 'bg-blue-500', textColor: 'text-blue-700' },
    { text: 'OKR Driven Solutions', color: 'bg-purple-50', dotColor: 'bg-purple-500', textColor: 'text-purple-700' }
  ]

  return (
    <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-primary-700 text-sm font-medium mb-6 shadow-sm">
            <Rocket className="w-4 h-4" />
            Get Ahead Of The Curve
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Your Partner for
            <span className="block text-primary-600 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Business Transformation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            A catalyst supporting <span className="font-semibold text-primary-700">hundreds of organizations</span> across all sectors achieve their success through 
            <span className="font-semibold text-primary-700"> Integrated Solutions & Services</span>
            <span className="block mt-2">— Powered by Digital Innovation</span>
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {taglines.map((tagline, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-2 px-4 py-2 ${tagline.color} rounded-full shadow-sm transition-all hover:shadow-md`}
              >
                <div className={`h-2 w-2 rounded-full ${tagline.dotColor}`}></div>
                <span className={`text-sm font-medium ${tagline.textColor}`}>
                  {tagline.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/solutions"
              className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-primary-700 bg-white border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Explore Synergy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Digital Transformation Section Component
const DigitalTransformationSection = () => {
  const digitalSolutions = [
    {
      icon: TrendingUp,
      title: 'Business Analytics & AI',
      description: 'Understand business trends, predict future outcomes and make smart data-driven decisions to drive growth.',
      gradient: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Digital Process Automation',
      description: 'Drive digital transformation, reduce employee turnover and boost productivity.',
      gradient: 'from-purple-50 to-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'Enterprise Quality Management',
      description: 'For compliance, data integrity, automation & 24/7 audit readiness in regulated industries.',
      gradient: 'from-green-50 to-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Cpu,
      title: 'Enterprise Computing Management',
      description: 'Enhance your organization\'s IT & infrastructure system with top-class software & hardware solutions.',
      gradient: 'from-orange-50 to-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: FileText,
      title: 'Enterprise Information Management',
      description: 'Capture, file, locate, edit, secure & process any document with ease, anywhere, anytime.',
      gradient: 'from-indigo-50 to-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions protecting your digital assets and ensuring regulatory compliance.',
      gradient: 'from-red-50 to-red-100',
      iconColor: 'text-red-600'
    }
  ]

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium mb-4 rounded-full">
            <Target className="w-4 h-4" />
            Lead with Digital Transformation
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Smart Digital Systems
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            — Backbone of Modern Enterprises —
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {digitalSolutions.map((solution, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative p-8">
                <div className="flex items-start gap-4">
                  <div className={`p-4 bg-gradient-to-br ${solution.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className={`h-7 w-7 ${solution.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-gray-300">0{index + 1}</span>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {solution.description}
                    </p>
                    <Link
                      to={`/solutions/${solution.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group/link"
                    >
                      LEARN MORE
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/solutions"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-full border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
          >
            VIEW ALL SOLUTIONS
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Role-Based Access Control',
      description: 'Granular permissions for admin, managers, and users.',
      gradient: 'from-blue-100 to-blue-50'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Create teams, assign managers, and manage members efficiently.',
      gradient: 'from-purple-100 to-purple-50'
    },
    {
      icon: BarChart,
      title: 'Salary Analytics',
      description: 'Visualize salary data with interactive charts and reports.',
      gradient: 'from-green-100 to-green-50'
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with JWT authentication.',
      gradient: 'from-red-100 to-red-50'
    }
  ]

  const developmentProcess = [
    {
      title: 'Discovery & Planning',
      description: 'Thorough requirement analysis and strategic planning',
      icon: '🔍',
      color: 'text-blue-600'
    },
    {
      title: 'Design & Development',
      description: 'UI/UX design followed by agile development sprints',
      icon: '💻',
      color: 'text-purple-600'
    },
    {
      title: 'Testing & Deployment',
      description: 'Rigorous testing and seamless deployment',
      icon: '🚀',
      color: 'text-green-600'
    }
  ]

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium mb-4 rounded-full">
            <Award className="w-4 h-4" />
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Custom Software Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We develop robust, scalable software solutions tailored to your business needs. 
            From concept to deployment, we deliver excellence at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-primary-300 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className={`p-4 bg-gradient-to-br ${feature.gradient} rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7 text-gray-700" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to="/features"
                    className="inline-flex items-center text-primary-600 text-sm font-semibold hover:text-primary-700 group/link"
                  >
                    Explore Feature
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Development Process */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Agile methodologies ensuring quality, transparency, and timely delivery
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 w-3/4 top-12" />
            
            <div className="grid md:grid-cols-3 gap-8">
              {developmentProcess.map((process, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className={`text-4xl mb-4 ${process.color}`}>
                      {process.icon}
                    </div>
                    <div className="md:hidden w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h4>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Industry Expertise Section Component
const IndustryExpertiseSection = () => {
  const expertiseStats = [
    { value: 'Hundreds', label: 'Organizations Supported', icon: Users },
    { value: 'All', label: 'Industry Sectors', icon: Cpu },
    { value: 'Close to 2', label: 'Decades in Business', icon: Star },
    { value: 'Beyond', label: 'Customer Satisfaction', icon: Award }
  ]

  return (
    <div className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-4 rounded-full">
            <TrendingUp className="w-4 h-4" />
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Wide Industry Expertise
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            We've grown stronger serving customers in almost every industry vertical from manufacturing & services sectors.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertiseStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4 mx-auto group-hover:bg-white/20 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-600/90 to-blue-600/90 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm border border-white/10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4 rounded-full">
            <Target className="w-4 h-4" />
            To Expand YOUR Business Outcomes
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            We Design, Develop, Deploy & Manage
          </h3>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Adaptable frameworks to accelerate your digital transformation journey with
            <span className="font-bold text-white"> OKR Driven Bespoke Solutions</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-white border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// CTA Section Component
const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-primary-50 via-white to-primary-50 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-primary-500/[0.03] bg-[size:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-primary-700 text-sm font-medium mb-4 rounded-full shadow-sm">
          <Star className="w-4 h-4" />
          Customer Delight is Our Key Mantra
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Organization?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Join hundreds of organizations achieving excellence through integrated digital solutions.
        </p>
        <Link
          to="/contact"
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
        >
          Start Your Journey
          <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
        </Link>
        
        {/* Additional Info */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: 'Free Initial Consultation', icon: CheckCircle, color: 'text-green-600' },
              { text: 'Customized Solutions', icon: Shield, color: 'text-blue-600' },
              { text: '24/7 Support', icon: Zap, color: 'text-purple-600' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <div className={`p-2 rounded-full bg-white ${item.color} bg-opacity-20`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home