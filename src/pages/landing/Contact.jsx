import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Users, MessageSquare, Calendar, Shield, Zap, Headphones, Building, Globe } from 'lucide-react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
  const [submitStatus, setSubmitStatus] = useState(null)
  const [referenceId, setReferenceId] = useState('')

  const onSubmit = async (data) => {
    setSubmitStatus(null)
    setReferenceId('')
    
    try {
      const response = await axios.post('http://localhost:8080/api/contact/submit', data)
      
      setSubmitStatus({
        type: 'success',
        message: response.data.message,
        referenceId: response.data.referenceId
      })
      
      // Reset form
      reset()
      
      // Auto-clear success message after 10 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 10000)
      
    } catch (error) {
      console.error('Error submitting contact form:', error)
      
      let errorMessage = 'Failed to send message. Please try again.'
      
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = error.response.data?.message || 'Invalid form data. Please check your inputs.'
        } else if (error.response.status === 429) {
          errorMessage = 'Too many submissions. Please wait a while before trying again.'
        } else if (error.response.status === 500) {
          errorMessage = 'Server error. Please try again later.'
        }
      } else if (error.request) {
        errorMessage = 'Network error. Please check your connection.'
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@swajyot.com',
      subtitle: 'General inquiries and support',
      action: 'mailto:contact@swajyot.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      subtitle: 'Mon-Fri from 9am to 6pm IST',
      action: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: '123 Tech Park, Sector 18',
      subtitle: 'Gurugram, Haryana 122015',
      action: 'https://maps.google.com'
    },
    {
      icon: Globe,
      title: 'Global Presence',
      details: 'India • USA • UAE • Singapore',
      subtitle: 'Serving clients worldwide',
      action: '/locations'
    }
  ]

  const inquiryTypes = [
    { id: 'general', label: 'General Inquiry', icon: MessageSquare },
    { id: 'sales', label: 'Sales & Pricing', icon: Users },
    { id: 'support', label: 'Technical Support', icon: Headphones },
    { id: 'partnership', label: 'Partnership', icon: Building },
    { id: 'consultation', label: 'Free Consultation', icon: Calendar }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Let's Connect
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Start Your Digital
              <span className="block text-primary-300">Transformation Journey</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Ready to transform your business? Get in touch with our experts for a personalized consultation.
            </p>
          </div>
        </div>
      </div>

      {/* Success/Error Messages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {submitStatus && (
          <div className={`mb-8 p-6 rounded-2xl shadow-2xl ${
            submitStatus.type === 'success' 
              ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200' 
              : 'bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200'
          }`}>
            <div className="flex items-start">
              <div className={`flex-shrink-0 p-4 rounded-full ${
                submitStatus.type === 'success' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="h-8 w-8 text-green-600" />
                ) : (
                  <AlertCircle className="h-8 w-8 text-red-600" />
                )}
              </div>
              <div className="ml-6">
                <h3 className={`text-2xl font-bold ${
                  submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {submitStatus.type === 'success' ? 'Message Sent Successfully!' : 'Failed to Send Message'}
                </h3>
                <p className={`mt-2 text-lg ${
                  submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {submitStatus.message}
                </p>
                {submitStatus.referenceId && (
                  <div className="mt-4 p-4 bg-white rounded-xl border border-green-200">
                    <p className="text-sm text-gray-600 font-medium">Reference ID:</p>
                    <p className="font-mono font-bold text-gray-900 text-xl">{submitStatus.referenceId}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Shield className="w-4 h-4 text-gray-500" />
                      <p className="text-xs text-gray-500">
                        Save this ID for tracking your inquiry
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information & Cards */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start space-x-4 group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-4 bg-gradient-to-br from-primary-100 to-blue-100 rounded-xl group-hover:from-primary-200 group-hover:to-blue-200 transition-all">
                    <info.icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gray-800 font-semibold text-lg">{info.details}</p>
                    <p className="text-sm text-gray-500 mt-2">{info.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Response Promise */}
            <div className="mt-12 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/20 rounded-full">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">24-Hour Response Guarantee</h3>
                  <p className="text-primary-100">We value your time</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span>Follow-up consultation</span>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="mt-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Support Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-900 text-red-500">Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-primary-600" />
                  <span className="text-sm text-gray-600">
                    Emergency support available 24/7 for enterprise clients
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-primary-600 to-blue-600 p-8 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                      <Send className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">Send Your Inquiry</h2>
                      <p className="text-primary-100">Fill the form and our team will contact you</p>
                    </div>
                  </div>
                  <div className="hidden md:block px-4 py-2 bg-white/20 rounded-full text-sm">
                    <span className="font-bold">Step 1 of 2</span>
                  </div>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-lg font-semibold text-gray-900 mb-4">
                      Type of Inquiry *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {inquiryTypes.map((type) => (
                        <div key={type.id} className="relative">
                          <input
                            type="radio"
                            id={type.id}
                            value={type.id}
                            {...register('inquiryType', { required: 'Please select an inquiry type' })}
                            className="sr-only"
                          />
                          <label
                            htmlFor={type.id}
                            className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                              errors.inquiryType 
                                ? 'border-red-300' 
                                : 'border-gray-200 hover:border-primary-300 hover:shadow-lg'
                            }`}
                          >
                            <div className="p-3 rounded-lg bg-gray-50 mb-3">
                              <type.icon className="w-6 h-6 text-gray-600" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 text-center">
                              {type.label}
                            </span>
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.inquiryType && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.inquiryType.message}
                      </p>
                    )}
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        disabled={isSubmitting}
                        {...register('name', { 
                          required: 'Name is required',
                          minLength: {
                            value: 2,
                            message: 'Name must be at least 2 characters'
                          },
                          maxLength: {
                            value: 100,
                            message: 'Name must be less than 100 characters'
                          }
                        })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        disabled={isSubmitting}
                        {...register('company')}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        disabled={isSubmitting}
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        disabled={isSubmitting}
                        {...register('phone', {
                          pattern: {
                            value: /^[\+]?[1-9][\d]{0,15}$/,
                            message: 'Invalid phone number'
                          }
                        })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      disabled={isSubmitting}
                      {...register('subject', { 
                        required: 'Subject is required',
                        minLength: {
                          value: 5,
                          message: 'Subject must be at least 5 characters'
                        }
                      })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all"
                      placeholder="What would you like to discuss?"
                    />
                    {errors.subject && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      disabled={isSubmitting}
                      {...register('message', { 
                        required: 'Message is required',
                        minLength: {
                          value: 20,
                          message: 'Message must be at least 20 characters'
                        },
                        maxLength: {
                          value: 2000,
                          message: 'Message must be less than 2000 characters'
                        }
                      })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all resize-none"
                      placeholder="Please provide details about your project requirements, timeline, and any specific challenges you're facing..."
                    />
                    <div className="flex justify-between items-center mt-2">
                      {errors.message ? (
                        <p className="text-sm text-red-600 flex items-center">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          {errors.message.message}
                        </p>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-gray-400" />
                          <p className="text-xs text-gray-500">
                            Minimum 20 characters required
                          </p>
                        </div>
                      )}
                      <p className="text-xs text-gray-500">
                        Maximum 2000 characters
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-gray-200">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl hover:from-primary-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-bold text-lg group"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing Your Request...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                          Send Message & Start Journey
                        </>
                      )}
                    </button>

                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-500">
                        By submitting this form, you agree to our{' '}
                        <a href="/privacy" className="text-primary-600 hover:text-primary-700 font-medium">Privacy Policy</a>{' '}
                        and{' '}
                        <a href="/terms" className="text-primary-600 hover:text-primary-700 font-medium">Terms of Service</a>.
                        <br />
                        <span className="mt-1 inline-block">
                          Your information is secure and will never be shared with third parties.
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">What happens next?</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary-600">1.</span>
                    <span>We'll review your inquiry within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary-600">2.</span>
                    <span>Schedule a discovery call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-primary-600">3.</span>
                    <span>Receive a customized proposal</span>
                  </li>
                </ol>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Need immediate help?</h4>
                <p className="text-sm text-gray-600 mb-3">
                  For urgent matters, call our emergency support line
                </p>
                <a href="tel:+911800123456" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 1800 123 456
                </a>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Schedule a meeting</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Book a 30-minute consultation with our experts
                </p>
                <a 
                  href="https://calendly.com/swajyot/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2 bg-primary-50 text-primary-700 rounded-lg font-medium hover:bg-primary-100 transition-colors"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact