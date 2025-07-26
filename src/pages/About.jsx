import React from 'react';
import HeroSection from '../components/about-page/HeroSection';
import OurStorySection from '../components/about-page/OurStorySection';
import TeamSection from '../components/about-page/TeamSection';
import OurImpactSection from '../components/about-page/OurImpactSection';

const About = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF9E7' }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div id="about-content" className="max-w-7xl mx-auto px-4 py-12">
        <OurStorySection />
        <TeamSection />
        <OurImpactSection />
      </div>
    </div>
  );
};

export default About;