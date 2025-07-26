import React, { useState } from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin, ArrowUpRight, Award, Users2, Shield } from 'lucide-react';

const TeamSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      name: "Prince Kumar",
      role: "Founder & Director",
      initials: "PS",
      description: "Veterinarian and visionary leader transforming animal welfare across Bihar through systematic innovation.",
      experience: "5+ years",
      specialty: "Enterpreneur",
      achievements: "850+ Lives Saved",
      email: "priya@everyhope.org",
      phone: "+91 98765 43210",
      gradient: "from-yellow-400 to-orange-500",
      accentColor: "#F4D03F"
    },
    {
      name: "Rajesh Kumar",
      role: "Operations Director",
      initials: "RK",
      description: "Strategic operations leader orchestrating rescue missions and community engagement programs.",
      experience: "10+ years",
      specialty: "NGO Management",
      achievements: "15+ Communities",
      email: "rajesh@everyhope.org",
      phone: "+91 98765 43211",
      gradient: "from-orange-400 to-red-500",
      accentColor: "#E67E50"
    },
    {
      name: "Dr. Anjali Singh",
      role: "Chief Veterinarian",
      initials: "AS",
      description: "Lead medical professional ensuring world-class rehabilitation and treatment protocols.",
      experience: "12+ years",
      specialty: "Animal Medicine",
      achievements: "95% Recovery Rate",
      email: "anjali@everyhope.org",
      phone: "+91 98765 43212",
      gradient: "from-yellow-400 to-orange-500",
      accentColor: "#F4D03F"
    },
    {
      name: "Suresh Yadav",
      role: "Community Director",
      initials: "SY",
      description: "Community engagement specialist building sustainable volunteer networks and educational programs.",
      experience: "8+ years",
      specialty: "Community Service",
      achievements: "200+ Volunteers",
      email: "suresh@everyhope.org",
      phone: "+91 98765 43213",
      gradient: "from-orange-400 to-red-500",
      accentColor: "#E67E50"
    }
  ];

  const advisors = [
    {
      name: "Prof. Dr. Ramesh Gupta",
      role: "Medical Advisor",
      credentials: "MBBS, MD",
      icon: Shield,
      color: "#F4D03F"
    },
    {
      name: "Advocate Sunita Devi",
      role: "Legal Advisor",
      credentials: "LLB, Animal Rights",
      icon: Award,
      color: "#E67E50"
    },
    {
      name: "CA Vivek Sharma",
      role: "Financial Advisor",
      credentials: "Chartered Accountant",
      icon: Users2,
      color: "#F4D03F"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-yellow-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Sophisticated Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium tracking-wide mb-6 border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 mr-3 animate-pulse"></div>
            LEADERSHIP & GOVERNANCE
          </div>
          <h2 className="text-4xl lg:text-5xl font-extralight mb-4 tracking-tight" style={{ color: '#1B4332' }}>
            Our <span className="font-medium bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Leadership</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Experienced professionals driving innovation in animal welfare across Bihar
          </p>
        </div>

        {/* Executive Team - Interactive Cards */}
        <div className="mb-20">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            {/* Team Navigation */}
            <div className="flex overflow-x-auto bg-gradient-to-r from-gray-50/80 to-white/80 backdrop-blur-sm border-b border-gray-200/50">
              {teamMembers.map((member, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTeamMember(index)}
                  className={`flex-shrink-0 px-6 py-4 text-left transition-all duration-300 relative ${
                    index === activeTeamMember 
                      ? 'bg-white shadow-lg' 
                      : 'hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className={`w-10 h-10 rounded-xl bg-gradient-to-r ${member.gradient} flex items-center justify-center shadow-md`}
                    >
                      <span className="text-white text-sm font-bold">{member.initials}</span>
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${index === activeTeamMember ? 'text-gray-900' : 'text-gray-600'}`}>
                        {member.name}
                      </div>
                      <div className="text-xs text-gray-500">{member.role}</div>
                    </div>
                  </div>
                  {index === activeTeamMember && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Active Member Details */}
            <div className="p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Profile Section */}
                <div className="lg:col-span-1">
                  <div className="text-center mb-8">
                    <div 
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${teamMembers[activeTeamMember].gradient} flex items-center justify-center mx-auto mb-6 shadow-xl`}
                    >
                      <span className="text-white text-2xl font-bold">
                        {teamMembers[activeTeamMember].initials}
                      </span>
                    </div>
                    <h3 className="text-2xl font-light mb-2 tracking-tight" style={{ color: '#1B4332' }}>
                      {teamMembers[activeTeamMember].name}
                    </h3>
                    <p className="text-sm font-medium mb-4" style={{ color: teamMembers[activeTeamMember].accentColor }}>
                      {teamMembers[activeTeamMember].role}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Experience</div>
                      <div className="text-sm font-bold" style={{ color: '#1B4332' }}>{teamMembers[activeTeamMember].experience}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Specialty</div>
                      <div className="text-sm font-bold" style={{ color: '#1B4332' }}>{teamMembers[activeTeamMember].specialty}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Impact</div>
                      <div className="text-sm font-bold" style={{ color: '#1B4332' }}>{teamMembers[activeTeamMember].achievements}</div>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h4 className="text-lg font-medium mb-4" style={{ color: '#1B4332' }}>Professional Overview</h4>
                    <p className="text-gray-700 leading-relaxed font-light">
                      {teamMembers[activeTeamMember].description}
                    </p>
                  </div>

                  {/* Contact Methods */}
                  <div>
                    <h4 className="text-lg font-medium mb-4" style={{ color: '#1B4332' }}>Contact</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <a 
                        href={`mailto:${teamMembers[activeTeamMember].email}`}
                        className="group flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-3 group-hover:bg-gray-200 transition-colors">
                          <Mail className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-gray-500">Email</div>
                          <div className="text-sm font-medium text-gray-900 truncate">{teamMembers[activeTeamMember].email}</div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>

                      <a 
                        href={`tel:${teamMembers[activeTeamMember].phone}`}
                        className="group flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-3 group-hover:bg-gray-200 transition-colors">
                          <Phone className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-gray-500">Phone</div>
                          <div className="text-sm font-medium text-gray-900">{teamMembers[activeTeamMember].phone}</div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="text-lg font-medium mb-4" style={{ color: '#1B4332' }}>Connect</h4>
                    <div className="flex space-x-3">
                      {[
                        { icon: Facebook, label: 'Facebook' },
                        { icon: Instagram, label: 'Instagram' },
                        { icon: Linkedin, label: 'LinkedIn' }
                      ].map((social, idx) => (
                        <a 
                          key={idx}
                          href="#"
                          className="group w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center hover:border-gray-300 hover:shadow-md transition-all duration-300"
                        >
                          <social.icon className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Board - Compact */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-light mb-3 tracking-tight" style={{ color: '#1B4332' }}>
              Advisory <span className="font-medium">Board</span>
            </h3>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6 text-center hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                <div 
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10"
                  style={{ backgroundColor: advisor.color }}
                ></div>
                <div className="relative z-10">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md"
                    style={{ backgroundColor: advisor.color }}
                  >
                    <advisor.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-medium mb-1 tracking-tight" style={{ color: '#1B4332' }}>
                    {advisor.name}
                  </h4>
                  <p className="text-sm font-medium mb-2" style={{ color: advisor.color }}>
                    {advisor.role}
                  </p>
                  <p className="text-xs text-gray-600 font-light">
                    {advisor.credentials}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;