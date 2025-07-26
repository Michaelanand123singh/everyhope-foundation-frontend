import React, { useState } from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  Users, 
  Target, 
  ChevronLeft, 
  ChevronRight,
  Quote,
  Calendar,
  MapPin,
  Star,
  ArrowUpRight
} from 'lucide-react';

const ExpertOurStorySection = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const foundingStory = [
    {
      chapter: "Genesis",
      year: "2018",
      title: "A Single Moment of Compassion",
      story: "One injured puppy near Gaya railway station sparked a movement that would transform animal welfare across Bihar.",
      highlight: "From one rescue to a regional movement",
      metric: "1 Life Changed Everything"
    },
    {
      chapter: "Foundation",
      year: "2019",
      title: "Building the Framework",
      story: "Personal passion evolved into structured organization, establishing Bihar's first comprehensive animal welfare foundation.",
      highlight: "Transforming compassion into systematic impact",
      metric: "Foundation Established"
    },
    {
      chapter: "Expansion",
      year: "2020-22",
      title: "Scaling Through Adversity",
      story: "Pandemic challenges became opportunities, developing mobile units and educational programs reaching thousands.",
      highlight: "Innovation born from necessity",
      metric: "500+ Animals Rescued"
    },
    {
      chapter: "Leadership",
      year: "2023-Today",
      title: "Industry Standard Bearer",
      story: "Now Bihar's premier animal welfare organization, setting benchmarks for rescue, rehabilitation, and community engagement.",
      highlight: "From startup to sector leadership",
      metric: "850+ Lives Saved"
    }
  ];

  const coreValues = [
    {
      icon: Target,
      title: "Mission-Driven Excellence",
      description: "Every action aligned with measurable impact and sustainable outcomes",
      color: "#F4D03F",
      accent: "#E6CC37"
    },
    {
      icon: Users,
      title: "Community Integration",
      description: "Building lasting partnerships that amplify our collective impact",
      color: "#E67E50",
      accent: "#D96A47"
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Pioneering approaches that set new standards in animal welfare",
      color: "#F4D03F",
      accent: "#E6CC37"
    },
    {
      icon: BookOpen,
      title: "Transparent Operations",
      description: "Open governance and accountability in everything we do",
      color: "#E67E50",
      accent: "#D96A47"
    }
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % foundingStory.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + foundingStory.length) % foundingStory.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-50 to-transparent rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Sophisticated Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium tracking-wide mb-6 border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mr-3 animate-pulse"></div>
            ORGANIZATIONAL EVOLUTION
          </div>
          <h2 className="text-4xl lg:text-5xl font-extralight mb-4 tracking-tight" style={{ color: '#1B4332' }}>
            Our <span className="font-medium bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            From a singular moment of compassion to Bihar's definitive animal welfare institution
          </p>
        </div>

        {/* Premium Story Timeline */}
        <div className="mb-20">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Elegant Navigation */}
            <div className="flex justify-center bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm p-6 border-b border-gray-200/50">
              <div className="flex space-x-1 bg-gray-100/80 rounded-full p-1">
                {foundingStory.map((story, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStoryIndex(index)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative ${
                      index === currentStoryIndex 
                        ? 'text-white shadow-lg transform scale-105' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                    }`}
                    style={{ 
                      backgroundColor: index === currentStoryIndex ? '#1B4332' : 'transparent'
                    }}
                  >
                    <span className="relative z-10">{story.chapter}</span>
                    {index === currentStoryIndex && (
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Story Content with Advanced Layout */}
            <div className="p-12">
              <div className="max-w-4xl mx-auto">
                {/* Year Badge */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-200/50">
                    <Calendar className="w-4 h-4 mr-2" style={{ color: '#E67E50' }} />
                    <span className="text-sm font-semibold tracking-wide" style={{ color: '#1B4332' }}>
                      {foundingStory[currentStoryIndex].year}
                    </span>
                  </div>
                </div>
                
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  {/* Primary Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-3xl font-light leading-tight tracking-tight" style={{ color: '#1B4332' }}>
                      {foundingStory[currentStoryIndex].title}
                    </h3>
                    
                    <p className="text-lg text-gray-700 leading-relaxed font-light">
                      {foundingStory[currentStoryIndex].story}
                    </p>
                    
                    {/* Quote Highlight */}
                    <div className="relative p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400">
                      <Quote className="absolute top-4 right-4 w-8 h-8 text-yellow-400/30" />
                      <p className="text-base font-medium italic text-gray-800 leading-relaxed">
                        "{foundingStory[currentStoryIndex].highlight}"
                      </p>
                    </div>
                  </div>

                  {/* Metric Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200/50 shadow-sm">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Star className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Milestone</h4>
                        <p className="text-lg font-bold" style={{ color: '#1B4332' }}>
                          {foundingStory[currentStoryIndex].metric}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sophisticated Navigation */}
              <div className="flex justify-center mt-10 space-x-4">
                <button 
                  onClick={prevStory}
                  className="group p-3 rounded-full bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                </button>
                <div className="flex items-center space-x-2">
                  {foundingStory.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentStoryIndex ? 'bg-yellow-400 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextStory}
                  className="group p-3 rounded-full bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision - Executive Style */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-100/50 to-transparent rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mr-4 shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light" style={{ color: '#1B4332' }}>Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                Rescue, rehabilitate, and rehome animals while building compassionate communities through systematic education and advocacy programs.
              </p>
              <div className="inline-flex items-center text-sm font-medium text-gray-600 group-hover:text-yellow-600 transition-colors">
                Learn more <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mr-4 shadow-lg">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-light" style={{ color: '#1B4332' }}>Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed font-light mb-4">
                A Bihar where animal welfare is integrated into community values, creating sustainable compassion that transcends individual rescue efforts.
              </p>
              <div className="inline-flex items-center text-sm font-medium text-gray-600 group-hover:text-orange-600 transition-colors">
                Learn more <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Core Values - Masonry Style */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light mb-4 tracking-tight" style={{ color: '#1B4332' }}>
              Foundational <span className="font-medium">Principles</span>
            </h3>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                <div 
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10"
                  style={{ backgroundColor: value.color }}
                ></div>
                <div className="flex items-start space-x-4 relative z-10">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${value.color} 0%, ${value.accent} 100%)` 
                    }}
                  >
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-medium mb-2 tracking-tight" style={{ color: '#1B4332' }}>
                      {value.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertOurStorySection;