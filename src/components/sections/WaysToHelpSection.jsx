import React, { useState, useEffect, useRef } from 'react'
import { Heart, Users, Home, AlertTriangle, Check, ArrowRight, Clock } from 'lucide-react'

const WaysToHelpSection = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const [activeCard, setActiveCard] = useState(0)
  const sectionRef = useRef(null)

  const ways = [
    {
      title: "Donate",
      description: "Support professional rescue operations through secure online contributions",
      icon: Heart,
      color: "coral",
      benefits: ["Tax deductible (80G)", "Monthly options", "Impact reports"]
    },
    {
      title: "Volunteer",
      description: "Join our professional volunteer network for rescue and care operations",
      icon: Users,
      color: "golden",
      benefits: ["Flexible schedules", "Training provided", "Skill development"]
    },
    {
      title: "Adopt",
      description: "Provide forever homes for professionally rehabilitated animals",
      icon: Home,
      color: "coral",
      benefits: ["Pre-screened animals", "Support included", "Lifetime guidance"]
    },
    {
      title: "Report Emergency",
      description: "24/7 emergency response system for animals requiring immediate care",
      icon: AlertTriangle,
      color: "golden",
      benefits: ["24/7 response", "GPS tracking", "Professional team"]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ways.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index])
            }, index * 150)
          })
        }
      })
    }, { threshold: 0.2 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Cycle through cards
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % ways.length)
    }, 3000)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  const getColorClasses = (color, isActive = false) => {
    if (color === 'coral') {
      return {
        bg: isActive ? 'bg-coral bg-opacity-15' : 'bg-coral bg-opacity-8',
        border: isActive ? 'border-coral border-opacity-40' : 'border-coral border-opacity-20',
        text: 'text-coral',
        button: 'bg-coral hover:bg-red-600'
      }
    } else {
      return {
        bg: isActive ? 'bg-golden bg-opacity-15' : 'bg-golden bg-opacity-8',
        border: isActive ? 'border-golden border-opacity-40' : 'border-golden border-opacity-20',
        text: 'text-golden',
        button: 'bg-golden hover:bg-yellow-500'
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-12 bg-cream">
      <div className="container mx-auto px-6">
        
        {/* Corporate Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 bg-teal-900 bg-opacity-10 rounded-md mb-3">
            <Users className="w-3 h-3 text-golden mr-2" />
            <span className="text-golden text-xs font-medium uppercase tracking-wide">Engagement Options</span>
          </div>
          
          <h2 className="text-xl lg:text-2xl font-bold text-teal-900 mb-2">
            Professional Partnership Opportunities
          </h2>
          <p className="text-sm text-teal-900 text-opacity-70 max-w-2xl mx-auto leading-relaxed">
            Choose your preferred method of supporting our systematic approach to animal welfare
          </p>
        </div>
        
        {/* Ways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8 w-30">
          {ways.map((way, index) => {
            const Icon = way.icon
            const isVisible = visibleCards.includes(index)
            const isActive = activeCard === index
            const colors = getColorClasses(way.color, isActive)
            
            return (
              <div 
                key={index}
                className={`${colors.bg} ${colors.border} border rounded-lg p-5 transition-all duration-500 hover:scale-102 hover:shadow-sm ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-8 h-8 ${colors.bg} rounded-md flex items-center justify-center border ${colors.border}`}>
                    <Icon className={`w-4 h-4 ${colors.text}`} />
                  </div>
                  {isActive && (
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-teal-900 text-opacity-40" />
                      <div className={`w-1.5 h-1.5 ${colors.text.replace('text-', 'bg-')} rounded-full animate-pulse`} />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <h3 className="text-sm font-semibold text-teal-900 mb-2">
                  {way.title}
                </h3>
                <p className="text-xs text-teal-900 text-opacity-70 leading-tight mb-4">
                  {way.description}
                </p>
                
                {/* Benefits */}
                <div className="space-y-2 mb-4">
                  {way.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="w-3 h-3 text-teal-900 text-opacity-40 mr-2" />
                      <span className="text-xs text-teal-900 text-opacity-60">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {/* Action Button */}
                <button className={`w-full ${colors.button} text-white text-xs font-medium py-2 px-4 rounded-md transition-all duration-200 flex items-center justify-center group`}>
                  <span>{way.title === "Report Emergency" ? "Report Now" : `${way.title} Now`}</span>
                  <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </div>
            )
          })}
        </div>
        
        {/* Corporate CTA */}
        <div className="max-w-4xl mx-auto">
          <div className={`bg-teal-900 rounded-lg p-6 transition-all duration-800 ${
            visibleCards.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '600ms' }}>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-golden bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-golden" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2 text-cream">
                  Systematic Impact Through Strategic Partnership
                </h3>
                <p className="text-sm text-cream text-opacity-80 leading-relaxed mb-4">
                  Every engagement option contributes to our comprehensive animal welfare 
                  ecosystem, creating measurable impact through professional care protocols 
                  and community-driven solutions.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-golden hover:bg-yellow-400 text-teal-900 font-medium py-2 px-4 rounded-md text-sm transition-all duration-200 flex items-center justify-center">
                    <Heart className="w-3 h-3 mr-2" />
                    Primary Support
                  </button>
                  <button className="border border-cream border-opacity-30 hover:border-opacity-50 text-cream hover:bg-cream hover:bg-opacity-10 font-medium py-2 px-4 rounded-md text-sm transition-all duration-200 flex items-center justify-center">
                    <Users className="w-3 h-3 mr-2" />
                    Join Network
                  </button>
                </div>
              </div>
            </div>
            
            {/* Status Footer */}
            <div className="mt-4 pt-4 border-t border-cream border-opacity-10 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-cream text-opacity-60">
                <div className="w-1.5 h-1.5 bg-golden rounded-full animate-pulse" />
                <span>Active Operations</span>
              </div>
              <div className="flex space-x-4 text-cream text-opacity-60">
                <span>24/7 Response</span>
                <span>•</span>
                <span>Professional Standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Corporate Color Styles */}
      <style jsx>{`
        .bg-teal-900 { background-color: #1B4332; }
        .text-teal-900 { color: #1B4332; }
        .text-golden { color: #F4D03F; }
        .bg-golden { background-color: #F4D03F; }
        .border-golden { border-color: #F4D03F; }
        .text-cream { color: #FEF9E7; }
        .bg-cream { background-color: #FEF9E7; }
        .border-cream { border-color: #FEF9E7; }
        .text-coral { color: #E67E50; }
        .bg-coral { background-color: #E67E50; }
        .border-coral { border-color: #E67E50; }
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </section>
  )
}

export default WaysToHelpSection