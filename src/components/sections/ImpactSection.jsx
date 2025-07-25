import React, { useState, useEffect, useRef } from 'react'
import { TrendingUp, Heart, Award, Users } from 'lucide-react'

const ImpactSection = () => {
  const [visibleStats, setVisibleStats] = useState([])
  const [counters, setCounters] = useState([0, 0, 0, 0])
  const sectionRef = useRef(null)

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Jaanwar Bachaye Gaye",
      description: "Professional rescue operations",
      icon: Heart,
      color: "text-coral"
    },
    {
      number: 350,
      suffix: "+",
      label: "Zindagiyan Badli",
      description: "Medical care & rehabilitation",
      icon: TrendingUp,
      color: "text-golden"
    },
    {
      number: 5,
      suffix: "+",
      label: "Saal Ki Seva",
      description: "Dedicated welfare expertise",
      icon: Award,
      color: "text-coral"
    },
    {
      number: 50,
      suffix: "+",
      label: "Active Volunteers",
      description: "Community professionals",
      icon: Users,
      color: "text-golden"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate stats visibility
          stats.forEach((_, index) => {
            setTimeout(() => {
              setVisibleStats(prev => [...prev, index])
              
              // Animate counter
              let start = 0
              const end = stats[index].number
              const duration = 1500
              const increment = end / (duration / 16)
              
              const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                  setCounters(prev => {
                    const newCounters = [...prev]
                    newCounters[index] = end
                    return newCounters
                  })
                  clearInterval(timer)
                } else {
                  setCounters(prev => {
                    const newCounters = [...prev]
                    newCounters[index] = Math.floor(start)
                    return newCounters
                  })
                }
              }, 16)
            }, index * 200)
          })
        }
      })
    }, { threshold: 0.3 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Corporate Header - Centered */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-teal-900 bg-opacity-10 rounded-lg mb-4">
            <TrendingUp className="w-4 h-4 text-teal-900 mr-2" />
            <span className="text-teal-900 text-sm font-medium uppercase tracking-wider">Impact Metrics</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-900 mb-4 leading-tight">
            Hamare Kaam Ka Asar
          </h2>
          <p className="text-base text-teal-900 text-opacity-70 max-w-2xl mx-auto leading-relaxed">
            Gaya region mein professional animal welfare services ke zariye 
            measurable results aur lasting impact create kar rahe hain
          </p>
        </div>
        
        {/* Stats Grid - Centered with spacing */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const isVisible = visibleStats.includes(index)
              
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-xl p-6 border border-teal-900 border-opacity-10 hover:border-opacity-30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-900 bg-opacity-5 rounded-xl mb-4">
                      <Icon className={`w-6 h-6 ${stat.color} transition-transform duration-300 hover:scale-110`} />
                    </div>
                    
                    <div className="text-3xl font-bold text-teal-900 mb-2">
                      {counters[index]}{stat.suffix}
                    </div>
                    
                    <h3 className="text-sm font-semibold text-teal-900 mb-2 leading-tight">
                      {stat.label}
                    </h3>
                    
                    <p className="text-xs text-teal-900 text-opacity-60 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Corporate Statement - Centered with impressive design */}
        <div className="max-w-4xl mx-auto">
          <div className={`relative bg-teal-900 text-cream rounded-2xl p-8 lg:p-10 border border-teal-900 transition-all duration-1000 overflow-hidden ${
            visibleStats.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`} style={{ transitionDelay: '1000ms' }}>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-golden bg-opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-golden bg-opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-golden bg-opacity-20 rounded-2xl mb-6">
                <Heart className="w-8 h-8 text-golden" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-cream">
                Professional Care Ke Zariye Strategic Impact
              </h3>
              
              <p className="text-base text-cream text-opacity-90 leading-relaxed mb-6 max-w-3xl mx-auto">
                Hamara systematic approach animal welfare mein professional veterinary care, 
                community engagement, aur sustainable rehabilitation programs ko combine karta hai 
                taaki region mein lasting change la sake.
              </p>
              
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-golden rounded-full animate-pulse"></div>
                  <span className="text-golden font-medium">Active Operations</span>
                </div>
                <div className="w-px h-4 bg-cream bg-opacity-30"></div>
                <span className="text-cream text-opacity-70">Est. 2019 • Gaya, Bihar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Corporate Color Styles */}
      <style jsx>{`
        .bg-teal-900 { background-color: #1B4332; }
        .text-teal-900 { color: #1B4332; }
        .border-teal-900 { border-color: #1B4332; }
        .text-golden { color: #F4D03F; }
        .bg-golden { background-color: #F4D03F; }
        .text-cream { color: #FEF9E7; }
        .bg-cream { background-color: #FEF9E7; }
        .text-coral { color: #E67E50; }
      `}</style>
    </section>
  )
}

export default ImpactSection