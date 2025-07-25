import React, { useState, useEffect, useRef } from 'react'
import { Target, Eye, Heart, Home, GraduationCap, Users, CheckCircle, Award } from 'lucide-react'

const MissionSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeValue, setActiveValue] = useState(0)
  const sectionRef = useRef(null)

  const services = [
    {
      icon: Heart,
      title: "Rescue & Care",
      description: "24/7 emergency response & medical care",
      color: "bg-coral bg-opacity-10 border-coral border-opacity-20"
    },
    {
      icon: Home,
      title: "Rehabilitation",
      description: "Complete recovery & preparation programs",
      color: "bg-golden bg-opacity-10 border-golden border-opacity-20"
    },
    {
      icon: Users,
      title: "Adoption Services",
      description: "Professional matching & placement",
      color: "bg-coral bg-opacity-10 border-coral border-opacity-20"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Community outreach & awareness",
      color: "bg-golden bg-opacity-10 border-golden border-opacity-20"
    }
  ]

  const values = [
    { name: "Compassion", color: "bg-coral" },
    { name: "Transparency", color: "bg-golden" },
    { name: "Community", color: "bg-coral" },
    { name: "Excellence", color: "bg-golden" }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }, { threshold: 0.2 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Cycle through values
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % values.length)
    }, 2500)

    return () => {
      observer.disconnect()
      clearInterval(interval)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content - 7 columns */}
            <div className={`lg:col-span-7 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              
              {/* Section Header */}
              <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 bg-teal-900 bg-opacity-10 rounded-md mb-3">
                  <Target className="w-3 h-3 text-teal-900 mr-2" />
                  <span className="text-teal-900 text-xs font-medium uppercase tracking-wide">Mission & Vision</span>
                </div>
                
                <h2 className="text-xl lg:text-2xl font-bold text-teal-900 mb-2">
                  Professional Animal Welfare Standards
                </h2>
              </div>
              
              {/* Mission */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Target className="w-4 h-4 text-coral mr-2" />
                  <h3 className="text-sm font-semibold text-teal-900">Strategic Mission</h3>
                </div>
                <p className="text-sm text-teal-900 text-opacity-80 leading-relaxed pl-6">
                  To deliver comprehensive animal rescue, rehabilitation, and rehoming services 
                  while building sustainable community partnerships that promote animal welfare 
                  excellence and responsible ownership practices.
                </p>
              </div>
              
              {/* Vision */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Eye className="w-4 h-4 text-golden mr-2" />
                  <h3 className="text-sm font-semibold text-teal-900">Long-term Vision</h3>
                </div>
                <p className="text-sm text-teal-900 text-opacity-80 leading-relaxed pl-6">
                  A professionally managed ecosystem where animal welfare is systematically 
                  supported through community engagement, education, and sustainable care 
                  infrastructure across the region.
                </p>
              </div>
              
              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => {
                  const Icon = service.icon
                  
                  return (
                    <div 
                      key={index}
                      className={`${service.color} rounded-lg p-4 border transition-all duration-300 hover:scale-102 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="flex items-center mb-2">
                        <Icon className="w-4 h-4 text-teal-900 mr-2" />
                        <h4 className="text-xs font-semibold text-teal-900">{service.title}</h4>
                      </div>
                      <p className="text-xs text-teal-900 text-opacity-70 leading-tight">
                        {service.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Right Content - 5 columns */}
            <div className={`lg:col-span-5 transform transition-all duration-800 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              
              <div className="bg-teal-900 rounded-lg p-6">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-golden bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-gray" />
                  </div>
                  <h3 className="text-base font-semibold text-cream mb-2">
                    Professional Standards
                  </h3>
                  <p className="text-xs text-cream text-opacity-80 leading-relaxed">
                    Every animal receives standardized care protocols, ensuring consistent 
                    quality and measurable outcomes across all our programs.
                  </p>
                </div>
                
                {/* Core Values */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-cream uppercase tracking-wide">Core Values</span>
                    <div className="flex space-x-1">
                      {values.map((_, index) => (
                        <div 
                          key={index}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            activeValue === index ? 'bg-golden' : 'bg-cream bg-opacity-20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {values.map((value, index) => (
                    <div 
                      key={index}
                      className={`flex items-center justify-between py-2 px-3 rounded-md transition-all duration-300 ${
                        activeValue === index 
                          ? 'bg-gray bg-opacity-20 border border-golden border-opacity-30' 
                          : 'bg-gray bg-opacity-5 border border-cream border-opacity-10'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-2 h-2 ${value.color} rounded-full mr-3 transition-all duration-300 ${
                          activeValue === index ? 'scale-125' : ''
                        }`} />
                        <span className={`text-xs font-medium transition-colors duration-300 ${
                          activeValue === index ? 'text-golden' : 'text-cream'
                        }`}>
                          {value.name}
                        </span>
                      </div>
                      {activeValue === index && (
                        <CheckCircle className="w-3 h-3 text-golden" />
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-cream border-opacity-10 text-center">
                  <div className="flex items-center justify-center space-x-2 text-xs text-cream text-opacity-60">
                    <div className="w-1.5 h-1.5 bg-golden rounded-full animate-pulse" />
                    <span>Certified Animal Welfare Standards</span>
                  </div>
                </div>
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

export default MissionSection