import { Home, Search, Compass, ArrowRight, RefreshCw, Zap, AlertTriangle, Navigation } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NotFound = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(10)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Countdown redirect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate])

  // Mouse move effect for floating elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Compass },
    { name: 'Services', path: '/services', icon: Zap },
    { name: 'Contact', path: '/contact', icon: Navigation },
    { name: 'Pricing', path: '/pricing', icon: Search }
  ]

  const errorCodes = ['404', '404', '404', '404']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full opacity-5 bg-primary-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `scale(${Math.random() * 2})`,
              animation: `float ${15 + i * 2}s infinite ease-in-out`
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]" />
        
        {/* Floating 404 numbers */}
        {errorCodes.map((code, index) => (
          <div
            key={index}
            className="absolute text-gray-900/5 font-black text-9xl pointer-events-none"
            style={{
              left: `${15 + index * 25}%`,
              top: `${10 + index * 20}%`,
              transform: `rotate(${index * 15}deg) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            {code}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center py-16">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto z-10">
          {/* Error Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-xl opacity-20 animate-pulse" />
            <div className="relative inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl border-8 border-white">
              <AlertTriangle className="h-16 w-16 text-red-500" />
            </div>
          </div>

          {/* Error Number */}
          <div className="mb-6">
            <h1 className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent leading-none">
              404
            </h1>
            <div className="h-1 w-48 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mt-4" />
          </div>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Lost in Digital Space
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              The page you're looking for seems to have vanished into the digital void. 
              Don't worry, we'll help you find your way back.
            </p>
            
            {/* Countdown */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-gray-700 font-medium mb-6">
              <RefreshCw className="h-4 w-4 animate-spin" />
              <span>Redirecting in </span>
              <span className="font-bold text-primary-600">{countdown}s</span>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Home className="mr-3 h-5 w-5" />
              Back to Homepage
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-primary-700 bg-white border-2 border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Go Back
              <ArrowRight className="ml-3 h-5 w-5 transform rotate-180 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Links Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
              <Navigation className="h-5 w-5 text-primary-600" />
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="p-3 bg-primary-50 rounded-lg mb-3 group-hover:bg-primary-100 transition-colors">
                    <link.icon className="h-6 w-6 text-primary-600 group-hover:text-primary-700" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Search className="h-5 w-5 text-primary-600" />
              Can't find what you're looking for?
            </h4>
            <p className="text-gray-600 mb-6">
              Try using our search feature or contact our support team for assistance.
            </p>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                />
              </div>
              <button className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium">
                Search
              </button>
            </div>
          </div>

          {/* Fun Stats */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Pages Found', value: '99.9%', color: 'text-green-600' },
                { label: 'Average Load Time', value: '0.8s', color: 'text-blue-600' },
                { label: 'Happy Visitors', value: '99%', color: 'text-purple-600' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-primary-50 rounded-2xl border border-blue-100">
            <p className="text-gray-700">
              <span className="font-semibold text-blue-700">Need immediate help?</span>{' '}
              Our support team is available 24/7. 
              <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-medium ml-2">
                Contact Support →
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  )
}

export default NotFound