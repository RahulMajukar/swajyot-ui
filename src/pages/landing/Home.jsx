import { ArrowRight, Shield, Users, BarChart, Lock, TrendingUp, Zap, CheckCircle, Cpu, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Role-Based Access Control',
      description: 'Granular permissions for admin, managers, and users.'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Create teams, assign managers, and manage members efficiently.'
    },
    {
      icon: BarChart,
      title: 'Salary Analytics',
      description: 'Visualize salary data with interactive charts and reports.'
    },
    {
      icon: Lock,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with JWT authentication.'
    }
  ]

  const digitalSolutions = [
    {
      icon: TrendingUp,
      title: 'Business Analytics & AI',
      description: 'Understand business trends, predict future outcomes and make smart data-driven decisions to drive growth.',
      linkText: 'LEARN MORE'
    },
    {
      icon: Zap,
      title: 'Digital Process Automation',
      description: 'Drive digital transformation, reduce employee turnover and boost productivity.',
      linkText: 'LEARN MORE'
    },
    {
      icon: CheckCircle,
      title: 'Enterprise Quality Management',
      description: 'For compliance, data integrity, automation & 24/7 audit readiness in regulated industries.',
      linkText: 'LEARN MORE'
    },
    {
      icon: Cpu,
      title: 'Enterprise Computing Management',
      description: 'Enhance your organization\'s IT & infrastructure system with top-class software & hardware solutions.',
      linkText: 'LEARN MORE'
    },
    {
      icon: FileText,
      title: 'Enterprise Information Management',
      description: 'Capture, file, locate, edit, secure & process any document with ease, anywhere, anytime.',
      linkText: 'LEARN MORE'
    }
  ]

  const expertiseStats = [
    { value: 'Hundreds', label: 'Organizations Supported' },
    { value: 'All', label: 'Industry Sectors' },
    { value: 'Close to 2', label: 'Decades in Business' },
    { value: 'Beyond', label: 'Customer Satisfaction' }
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              Get Ahead Of The Curve
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Your Partner for
              <span className="block text-primary-600">Business Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              A catalyst supporting hundreds of organizations across all sectors achieve their success through
              <span className="font-semibold text-primary-700"> Integrated Solutions & Services</span>
              <span className="block">— Powered by Digital</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-green-700">EXCELLENCE Focussed</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium text-blue-700">TIME BOUND Deliverables</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                <span className="text-sm font-medium text-purple-700">OKR Driven Solutions</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
              >
                Start Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-primary-700 bg-primary-100 hover:bg-primary-200 transition-colors"
              >
                Explore Synergy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Transformation Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium mb-4">
              Lead with Digital Transformation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Digital Systems
            </h2>
            <p className="text-lg text-gray-600 italic">
              — Backbone of the Enterprise —
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {digitalSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <solution.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl font-bold text-gray-300">0{index + 1}</span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {solution.description}
                    </p>
                    <Link
                      to={`/solutions/${solution.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                    >
                      {solution.linkText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 text-lg"
            >
              VIEW ALL SOLUTIONS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Software Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We develop robust, scalable software solutions tailored to your business needs.
              From concept to deployment, we deliver excellence at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 via-primary-50/0 to-primary-50/0 group-hover:from-primary-50/30 group-hover:via-primary-50/20 group-hover:to-primary-50/10 transition-all duration-300 rounded-xl" />

                <div className="relative">
                  <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Learn more link that appears on hover */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="inline-flex items-center text-primary-600 text-sm font-medium hover:text-primary-700">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional software development focus points */}
          <div className="mt-20 pt-20 border-t border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Agile methodologies ensuring quality, transparency, and timely delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Discovery & Planning',
                  description: 'Thorough requirement analysis and strategic planning',
                  icon: '🔍'
                },
                {
                  title: 'Design & Development',
                  description: 'UI/UX design followed by agile development sprints',
                  icon: '💻'
                },
                {
                  title: 'Testing & Deployment',
                  description: 'Rigorous testing and seamless deployment',
                  icon: '🚀'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-4">{process.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industry Expertise Section */}
      <div className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              Wide Industry Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              We've grown stronger serving customers in almost every industry vertical from manufacturing & services sectors.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {expertiseStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                To Expand YOUR Business Outcomes
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                We Design, Develop, Deploy & Manage
              </h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Adaptable frameworks to accelerate your digital transformation journey with
                <span className="font-bold"> OKR Driven Bespoke Solutions</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white border-2 border-white hover:bg-white/10 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-white text-primary-700 text-sm font-medium mb-4">
            Customer Delight is Our Key Mantra
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to transform your organization?
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Join hundreds of organizations achieving excellence through integrated digital solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home