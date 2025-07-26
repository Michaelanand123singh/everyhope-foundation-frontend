import React, { useState, useEffect } from 'react'
import { ChevronDown, Heart, Users, Award, Calendar } from 'lucide-react'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Heart, number: '500+', label: 'Animals Rescued' },
    { icon: Calendar, number: '5+', label: 'Years of Service' },
    { icon: Users, number: '200+', label: 'Happy Adoptions' },
    { icon: Award, number: '50+', label: 'Active Volunteers' }
  ]

  return (
    <section className="relative bg-teal-900 py-20 lg:py-24 overflow-hidden">
      {/* Subtle Corporate Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M20 20h20v20H20V20zM0 0h20v20H0V0z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content - 7 columns */}
            <div className={`lg:col-span-7 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              
              {/* Corporate Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-golden bg-opacity-15 rounded-md mb-4 border-l-3 border-golden">
                <div className="w-1.5 h-1.5 bg-golden rounded-full mr-2"></div>
                <span className="text-gray text-xs font-medium uppercase tracking-wide">Gaya Animal Welfare</span>
              </div>
              
              {/* Corporate Headline */}
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 leading-tight text-cream">
                Professional Animal Care &
                <span className="block text-golden">Welfare Services</span>
              </h1>
              
              <p className="text-base text-cream text-opacity-80 mb-6 leading-relaxed max-w-lg">
                Leading animal welfare organization in Gaya, providing comprehensive care and rehabilitation services with professional expertise and community commitment.
              </p>
              
              {/* Corporate CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button className="group bg-golden hover:bg-yellow-400 text-teal-900 font-semibold py-2.5 px-5 rounded-md text-sm transition-all duration-200 hover:shadow-md flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Support Mission
                </button>
                
                <button className="group bg-coral hover:bg-red-600 text-cream font-semibold py-2.5 px-5 rounded-md text-sm transition-all duration-200 hover:shadow-md flex items-center">
                  <div className="w-1.5 h-1.5 bg-red-300 rounded-full mr-2 animate-pulse"></div>
                  Emergency Report
                </button>
              </div>
            </div>
            
            {/* Right Stats - 5 columns */}
            <div className={`lg:col-span-5 transform transition-all duration-800 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="bg-cream bg-opacity-5 backdrop-blur-sm rounded-lg border border-cream border-opacity-10 p-6">
                
                {/* Stats Header */}
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm font-semibold text-gray uppercase tracking-wide">Our Impact</h3>
                  <div className="flex space-x-1">
                    {stats.map((_, index) => (
                      <div 
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentStat === index ? 'bg-golden' : 'bg-cream bg-opacity-20'}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    const isActive = currentStat === index
                    
                    return (
                      <div 
                        key={index}
                        className={`p-4 rounded-md border transition-all duration-300 hover:scale-102 ${
                          isActive 
                            ? 'bg-golden bg-opacity-10 border-golden border-opacity-30' 
                            : 'bg-cream bg-opacity-3 border-cream border-opacity-10 hover:border-opacity-20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Icon className={`w-4 h-4 transition-colors duration-300 ${
                            isActive ? 'text-gray' : 'text-gray text-opacity-60'
                          }`} />
                        </div>
                        <div className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                          isActive ? 'text-gray' : 'text-gray'
                        }`}>
                          {stat.number}
                        </div>
                        <div className="text-xs text-gray text-opacity-70 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    )
                  })}
                </div>
                
                {/* Trust Indicator */}
                <div className="mt-5 pt-4 border-t border-cream border-opacity-10 text-center">
                  <p className="text-xs text-red-700">
                    Trusted by <span className="text-golden font-medium">1000+</span> families across Gaya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <ChevronDown className="w-4 h-4 text-cream text-opacity-40" />
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
        .bg-coral { background-color: #E67E50; }
        .border-l-3 { border-left-width: 3px; }
        .hover\\:scale-102:hover { transform: scale(1.02); }
      `}</style>
    </section>
  )
}

export default HeroSection