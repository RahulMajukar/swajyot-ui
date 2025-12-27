import { Check, Star, Shield, Zap, Users, Globe, Award, HelpCircle, Clock, BarChart, Lock, Cloud, TrendingUp, Smartphone, Users as TeamIcon, Headphones } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'Startup',
      price: '$999',
      period: '/project',
      description: 'Perfect for startups & SMEs',
      icon: TrendingUp,
      features: [
        'Custom Web Application',
        'Responsive Design',
        'Basic Analytics Dashboard',
        'User Management System',
        'API Integration',
        '3 Months Support',
        'Basic Security',
        'Mobile Responsive',
        'SEO Optimization',
        'Performance Optimization'
      ],
      bestFor: 'Startups & Small Businesses'
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/project',
      description: 'For growing enterprises',
      icon: Building,
      features: [
        'Custom Enterprise Software',
        'Advanced Analytics & AI',
        'Multi-level User Management',
        'Complete API Suite',
        'Advanced Security Features',
        '12 Months Premium Support',
        'Custom Integrations',
        'Scalable Architecture',
        '24/7 Monitoring',
        'Dedicated Account Manager',
        'Training & Documentation',
        'Priority Updates'
      ],
      popular: true,
      bestFor: 'Mid to Large Enterprises'
    },
    {
      name: 'Custom',
      price: 'Custom',
      period: '',
      description: 'Tailored enterprise solutions',
      icon: Settings,
      features: [
        'Fully Custom Software Development',
        'AI & Machine Learning Integration',
        'Enterprise-grade Security',
        'Custom DevOps Setup',
        'Dedicated Development Team',
        'Unlimited Support',
        'White-label Solutions',
        'Legacy System Integration',
        'Multi-cloud Deployment',
        'Advanced Data Analytics',
        'Real-time Collaboration',
        'Custom Training Programs',
        'Quarterly Strategy Reviews'
      ],
      bestFor: 'Large Organizations & Corporations'
    }
  ]

  const faqs = [
    {
      question: "What's included in the support period?",
      answer: "Support includes bug fixes, security updates, minor feature enhancements, and technical assistance during business hours."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade at any time. We'll help migrate your data and features seamlessly."
    },
    {
      question: "Do you offer custom development?",
      answer: "Absolutely! Our Custom plan is designed for organizations needing tailored solutions. Contact us for a consultation."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Startup plans: 4-6 weeks, Enterprise: 8-12 weeks, Custom: Based on requirements (usually 12+ weeks)."
    },
    {
      question: "Do you provide maintenance after launch?",
      answer: "Yes, we offer ongoing maintenance packages to ensure your software stays secure and up-to-date."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern tech stacks including React, Node.js, Python, .NET, AWS, Azure, and more."
    }
  ]

  const addOns = [
    {
      name: 'AI Integration',
      price: '+$2,499',
      description: 'Add AI capabilities to your software',
      features: ['Predictive Analytics', 'Chatbots', 'ML Models']
    },
    {
      name: 'Mobile App',
      price: '+$3,999',
      description: 'Native iOS & Android applications',
      features: ['Cross-platform', 'Push Notifications', 'Offline Support']
    },
    {
      name: '24/7 Support',
      price: '+$999/mo',
      description: 'Round-the-clock technical support',
      features: ['24/7 Monitoring', 'Emergency Support', 'SLA Guarantee']
    },
    {
      name: 'Advanced Analytics',
      price: '+$1,799',
      description: 'Comprehensive analytics dashboard',
      features: ['Real-time Data', 'Custom Reports', 'Predictive Insights']
    }
  ]

  const valueProps = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, 2FA, and regular audits'
    },
    {
      icon: Zap,
      title: 'Fast Development',
      description: 'Agile methodology for rapid deployment and iteration'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Experienced developers, designers, and project managers'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Compliance with international quality and security standards'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Custom Software Development
              <span className="block text-primary-300">Pricing Plans</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Tailored solutions for businesses of all sizes. Every project includes our commitment to excellence and customer delight.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>No Hidden Costs</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Flexible Payment</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Money-back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-4">
                <prop.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{prop.title}</h3>
              <p className="text-sm text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each plan includes a comprehensive set of features. Scale up as your business grows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular 
                  ? 'ring-2 ring-primary-500 shadow-2xl transform md:scale-105' 
                  : 'shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-blue-600 text-white py-3 text-center font-bold">
                  ⭐ Most Popular Choice
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${
                    plan.popular ? 'bg-primary-100' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.popular ? 'text-primary-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-sm inline-block">
                    <span className="font-medium text-gray-700">Best for: </span>
                    {plan.bestFor}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary-600 to-blue-600 text-white hover:from-primary-700 hover:to-blue-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  {plan.name === 'Custom' ? 'Contact for Quote' : 'Get Started Now'}
                </button>
                
                {plan.name === 'Custom' && (
                  <p className="text-center text-gray-600 text-sm mt-4">
                    Custom pricing based on requirements
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Popular Add-ons
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your plan with these powerful add-ons
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900">{addon.name}</h4>
                  <span className="text-lg font-bold text-primary-600">{addon.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <ul className="space-y-2">
                  {addon.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900">Plan Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-6 text-left font-semibold text-gray-900">Features</th>
                  {plans.map((plan, index) => (
                    <th key={index} className="p-6 text-center font-semibold text-gray-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  'Custom Development',
                  'Support Duration',
                  'Project Management',
                  'Security Features',
                  'API Access',
                  'Mobile App',
                  'Analytics Dashboard',
                  'Team Training'
                ].map((feature, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="p-6 font-medium text-gray-900">{feature}</td>
                    {plans.map((plan, colIndex) => (
                      <td key={colIndex} className="p-6 text-center">
                        {rowIndex === 0 ? (
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            colIndex === 0 ? 'bg-blue-100 text-blue-800' :
                            colIndex === 1 ? 'bg-primary-100 text-primary-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {colIndex === 0 ? 'Basic' : colIndex === 1 ? 'Advanced' : 'Full'}
                          </span>
                        ) : (
                          <Check className={`h-5 w-5 mx-auto ${
                            (colIndex === 0 && rowIndex < 4) || 
                            (colIndex === 1 && rowIndex < 7) || 
                            (colIndex === 2)
                              ? 'text-green-500' 
                              : 'text-gray-300'
                          }`} />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our pricing and services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <HelpCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-primary-100 text-lg mb-8">
              Our team is ready to help you choose the right plan and discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule a Free Consultation
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>100% Satisfaction</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/50"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Custom icon component since Building and Settings weren't imported
const Building = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

const Settings = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0" />
  </svg>
)

export default Pricing