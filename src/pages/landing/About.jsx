import { Users, Target, Award, Globe, Rocket, Heart, Shield, Zap, Cpu, TrendingUp, CheckCircle, Clock, Star, ChevronRight, BookOpen, Lightbulb, Users as UsersIcon, BarChart, Settings, Cloud } from 'lucide-react'

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop',
      description: '15+ years in enterprise software',
      expertise: ['Digital Transformation', 'Business Strategy', 'Leadership']
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-400&h=400&fit=crop',
      description: 'Former Google Tech Lead',
      expertise: ['Cloud Architecture', 'AI/ML', 'Scalability']
    },
    {
      name: 'Emma Rodriguez',
      role: 'Product Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      description: 'Product strategy expert',
      expertise: ['UX Design', 'Product Management', 'Agile']
    },
    {
      name: 'David Kim',
      role: 'Head of Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      description: 'Award-winning solution architect',
      expertise: ['Enterprise Solutions', 'Integration', 'Security']
    }
  ]

  const milestones = [
    { year: '2005', title: 'Company Founded', description: 'Started with a vision to revolutionize business solutions', icon: Rocket },
    { year: '2010', title: 'First Enterprise Client', description: 'Secured first Fortune 500 client partnership', icon: Users },
    { year: '2015', title: 'Digital Transformation Focus', description: 'Shifted focus to comprehensive digital solutions', icon: Zap },
    { year: '2020', title: 'Global Expansion', description: 'Expanded operations to 20+ countries', icon: Globe },
    { year: '2024', title: 'AI Integration', description: 'Launched AI-powered business analytics suite', icon: Cpu }
  ]

  const values = [
    {
      icon: Target,
      title: 'Excellence Focused',
      description: 'We deliver nothing but the best, ensuring quality in every solution.',
      color: 'from-primary-50 to-primary-100'
    },
    {
      icon: Clock,
      title: 'Time-Bound Deliverables',
      description: 'Meeting deadlines with precision and maintaining project timelines.',
      color: 'from-blue-50 to-blue-100'
    },
    {
      icon: Heart,
      title: 'Customer Delight',
      description: 'Going beyond satisfaction to create memorable client experiences.',
      color: 'from-pink-50 to-pink-100'
    },
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'Building trust through transparency and ethical practices.',
      color: 'from-green-50 to-green-100'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Staying ahead with cutting-edge technologies and approaches.',
      color: 'from-purple-50 to-purple-100'
    },
    {
      icon: UsersIcon,
      title: 'Collaborative Growth',
      description: 'Growing together with clients and partners through teamwork.',
      color: 'from-orange-50 to-orange-100'
    }
  ]

  const whyChooseUs = [
    {
      icon: BookOpen,
      title: 'We Understand Requirements',
      description: 'Deep dive into client needs to craft tailored solutions that align with business objectives.',
      steps: ['Requirement Analysis', 'Business Process Mapping', 'Solution Design']
    },
    {
      icon: Lightbulb,
      title: 'Strategic Frameworks',
      description: 'Establish breakthrough success strategies through proven methodologies and frameworks.',
      steps: ['Strategy Formulation', 'Framework Implementation', 'Success Planning']
    },
    {
      icon: Settings,
      title: 'Agile Environment Creation',
      description: 'Blend existing systems with our solutions to build flexible, adaptive environments.',
      steps: ['System Integration', 'Agile Implementation', 'Environment Optimization']
    },
    {
      icon: BarChart,
      title: 'Competitive Edge',
      description: 'Help organizations gain and maintain competitive advantage through innovation.',
      steps: ['Market Analysis', 'Competitive Strategy', 'Growth Enablement']
    }
  ]

  const services = [
    { icon: Cpu, name: 'Digital Transformation', count: '250+' },
    { icon: Cloud, name: 'Cloud Solutions', count: '180+' },
    { icon: TrendingUp, name: 'Business Analytics', count: '150+' },
    { icon: Shield, name: 'Enterprise Security', count: '120+' },
    { icon: Zap, name: 'Process Automation', count: '200+' },
    { icon: Users, name: 'Team Management', count: '170+' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                  <Star className="w-4 h-4" />
                  About SWAJYOT
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Your Partner for
                  <span className="block text-primary-300">Business Transformation</span>
                </h1>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl">
                  We help organizations gain a constant competitive edge & maintain growth with our solutions & frameworks.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                    Our Approach
                    <ChevronRight className="inline ml-2 w-5 h-5" />
                  </button>
                  <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
                    View Case Studies
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-500 rounded-lg">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Proven Expertise</h4>
                        <p className="text-primary-100">Close to 2 decades of delivering excellence</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-500 rounded-lg">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Industry-wide Impact</h4>
                        <p className="text-primary-100">Hundreds of organizations across all sectors</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-500 rounded-lg">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Integrated Solutions</h4>
                        <p className="text-primary-100">End-to-end digital transformation services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-primary-600">SWAJYOT?</span>
            </h2>
            <p className="text-lg text-gray-600">
              We help organizations gain a constant competitive edge & maintain growth with our solutions & frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary-100 rounded-xl">
                    <item.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                          <span className="text-sm text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Our Approach Steps */}
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Our Transformation Framework
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-1 bg-primary-300 w-3/4 top-8"></div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: '01', title: 'Understand', desc: 'Client Requirements Analysis' },
                  { number: '02', title: 'Develop', desc: 'Tailored Solutions Framework' },
                  { number: '03', title: 'Establish', desc: 'Breakthrough Success Strategy' },
                  { number: '04', title: 'Blend', desc: 'Create Agile Environment' }
                ].map((step, index) => (
                  <div key={index} className="relative text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-4 border-white">
                      <span className="text-2xl font-bold text-primary-600">{step.number}</span>
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide every project, partnership, and solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className={`bg-gradient-to-br ${value.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`}>
                <div className="p-4 bg-white rounded-xl w-fit mb-4">
                  <value.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Experienced professionals driving innovation and excellence in digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl h-full">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Stats */}
      <div className="py-20 bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-primary-100 text-lg">
              Transforming businesses across industries with our digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold mb-2">{service.count}</div>
                <div className="text-sm text-primary-100">{service.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey of Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Close to 2 decades of innovation, growth, and customer delight.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line for mobile */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className="relative mb-12">
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} mb-6 md:mb-0`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 inline-block w-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary-100 rounded-lg">
                          <milestone.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                          <h3 className="text-lg font-bold text-gray-800">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-6 md:top-1/2">
                    <div className="w-8 h-8 rounded-full bg-primary-600 border-4 border-white shadow-lg"></div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="w-full md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have achieved breakthrough success with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
                Start Your Transformation
                <ChevronRight className="inline ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs