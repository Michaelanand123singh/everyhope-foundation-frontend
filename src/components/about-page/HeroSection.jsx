import React from 'react';
import { Heart, Users, MapPin, Clock, ArrowDown, Award, Target } from 'lucide-react';

const AboutHeroSection = () => {
  const milestones = [
    {
      year: "2018",
      label: "Founded"
    },
    {
      number: "850+",
      label: "Lives Saved"
    },
    {
      number: "200+",
      label: "Volunteers"
    },
    {
      number: "15+",
      label: "Communities"
    }
  ];

  const scrollToContent = () => {
    const element = document.getElementById('about-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="/images/about-hero-bg.jpg" 
          alt="Everyhope Foundation Story"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMUI0MzMyIi8+CjxjaXJjbGUgY3g9IjQ4MCIgY3k9IjI3MCIgcj0iNDAiIGZpbGw9IiNGNEQwM0YiIG9wYWNpdHk9IjAuMyIvPgo8Y2lyY2xlIGN4PSIxNDQwIiBjeT0iODEwIiByPSI2MCIgZmlsbD0iI0U2N0U1MCIgb3BhY2l0eT0iMC4yIi8+CjxjaXJjbGUgY3g9IjI0MCIgY3k9IjU0MCIgcj0iMzAiIGZpbGw9IiNGNEQwM0YiIG9wYWNpdHk9IjAuNCIvPgo8Y2lyY2xlIGN4PSIxNjgwIiBjeT0iMzI0IiByPSI1MCIgZmlsbD0iI0U2N0U1MCIgb3BhY2l0eT0iMC4zIi8+CjxwYXRoIGQ9Ik05NjAgNTQwTDEwODAgNjQ4TDk2MCA3NTZMODQwIDY0OEw5NjAgNTQwWiIgZmlsbD0iI0Y0RDAzRiIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPgo=';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/50 to-black/60"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {/* Breadcrumb/Context */}
          <div className="flex items-center text-sm text-gray-300 mb-6">
            <span className="opacity-60">Home</span>
            <span className="mx-3 opacity-40">/</span>
            <span className="text-yellow-400">About Us</span>
          </div>

          {/* Main Content */}
          <div className="mb-12">
            {/* Eyebrow */}
            <div className="flex items-center mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-yellow-400 to-orange-500 mr-4"></div>
              <span className="text-yellow-400 text-sm font-medium uppercase tracking-wider">Our Story</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Building Hope
              <span className="block font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                One Life at a Time
              </span>
            </h1>

            {/* Mission Statement */}
            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed font-light mb-8">
              Since 2018, Everyhope Foundation has been Bihar's leading voice for animal welfare, 
              combining compassionate rescue with sustainable community impact across 15+ regions.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-6">
              <button 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={scrollToContent}
              >
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </button>
              <button className="inline-flex items-center text-white hover:text-yellow-400 transition-colors font-medium group">
                <Award className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Recognition & Awards
              </button>
            </div>
          </div>

          {/* Timeline Stats */}
          <div className="border-t border-white/20 pt-8">
            <div className="grid grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {milestone.year || milestone.number}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">
                    {milestone.label}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-6">
          <button 
            onClick={scrollToContent}
            className="flex items-center text-white/70 hover:text-white transition-all duration-300 group text-sm"
          >
            <span className="mr-3 font-medium">Learn More</span>
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-all">
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Side Quote/Vision */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-xs border border-white/20">
            <div className="text-4xl text-yellow-400 mb-3 opacity-60">"</div>
            <p className="text-white text-sm leading-relaxed mb-4 font-light">
              Every rescued animal represents our commitment to creating a more compassionate Bihar.
            </p>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mr-3"></div>
              <div>
                <div className="text-white text-xs font-medium">Founder's Vision</div>
                <div className="text-gray-400 text-xs">Everyhope Foundation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 right-20 w-2 h-2 rounded-full bg-yellow-400 opacity-60 animate-pulse"></div>
      <div className="absolute top-32 left-20 w-1 h-1 rounded-full bg-orange-500 opacity-40"></div>
    </section>
  );
};

export default AboutHeroSection;