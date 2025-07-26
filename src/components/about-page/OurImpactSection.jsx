import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  MapPin, 
  Award,
  TrendingUp,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote
} from 'lucide-react';

const OurImpactSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const impactStats = [
    {
      icon: Heart,
      number: "850+",
      label: "Animals Rescued",
      description: "From streets, accidents, and abusive situations"
    },
    {
      icon: Users,
      number: "650+",
      label: "Successful Adoptions",
      description: "Animals found loving forever homes"
    },
    {
      icon: MapPin,
      number: "15+",
      label: "Communities Served",
      description: "Across Gaya district and surrounding areas"
    },
    {
      icon: Award,
      number: "25+",
      label: "Awards & Recognition",
      description: "For excellence in animal welfare"
    }
  ];

  const yearlyStats = [
    { year: "2024", rescued: 245, adopted: 198, volunteers: 120 },
    { year: "2023", rescued: 210, adopted: 165, volunteers: 95 },
    { year: "2022", rescued: 185, adopted: 142, volunteers: 78 },
    { year: "2021", rescued: 125, adopted: 98, volunteers: 52 },
    { year: "2020", rescued: 85, adopted: 67, volunteers: 35 }
  ];

  const galleryImages = [
    {
      src: "/gallery/rescue1.jpg",
      caption: "Emergency rescue operation during floods",
      category: "Rescue"
    },
    {
      src: "/gallery/medical1.jpg",
      caption: "Mobile veterinary clinic in rural areas",
      category: "Medical Care"
    },
    {
      src: "/gallery/adoption1.jpg",
      caption: "Happy adoption ceremony",
      category: "Adoption"
    },
    {
      src: "/gallery/facility1.jpg",
      caption: "Our modern animal care facility",
      category: "Facility"
    },
    {
      src: "/gallery/volunteers1.jpg",
      caption: "Volunteer training program",
      category: "Community"
    },
    {
      src: "/gallery/success1.jpg",
      caption: "Recovery transformation story",
      category: "Success Story"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Best NGO Award",
      organization: "Bihar Animal Welfare Board",
      description: "Recognized for outstanding contribution to animal welfare in Bihar"
    },
    {
      year: "2023",
      title: "Community Champion",
      organization: "Gaya District Administration",
      description: "Honored for exceptional community service during natural disasters"
    },
    {
      year: "2022",
      title: "Excellence in Animal Care",
      organization: "National Animal Welfare Association",
      description: "Acknowledged for innovative approaches to animal rehabilitation"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Sinha",
      role: "Veterinary Officer, Gaya",
      quote: "Everyhope Foundation has transformed animal welfare in our district. Their professional approach and dedication is truly inspiring.",
      rating: 5
    },
    {
      name: "Meera Devi",
      role: "Local Resident",
      quote: "They rescued my injured dog and provided free treatment. Their compassion and care saved my pet's life.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Volunteer",
      quote: "Being part of this organization has been life-changing. Every rescue operation fills me with purpose and joy.",
      rating: 5
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1B4332' }}>
          Our Impact
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Measuring success through lives saved, families created, and communities transformed
        </p>
      </div>

      {/* Impact Statistics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {impactStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4D03F' }}>
              <stat.icon className="w-8 h-8" style={{ color: '#1B4332' }} />
            </div>
            <div className="text-3xl font-bold mb-2" style={{ color: '#1B4332' }}>
              {stat.number}
            </div>
            <div className="text-lg font-semibold mb-2" style={{ color: '#E67E50' }}>
              {stat.label}
            </div>
            <p className="text-gray-600 text-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Yearly Progress */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: '#1B4332' }}>
          Our Growth Over the Years
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2" style={{ borderColor: '#F4D03F' }}>
                <th className="text-left py-3 px-4 font-bold" style={{ color: '#1B4332' }}>Year</th>
                <th className="text-left py-3 px-4 font-bold" style={{ color: '#1B4332' }}>Animals Rescued</th>
                <th className="text-left py-3 px-4 font-bold" style={{ color: '#1B4332' }}>Adoptions</th>
                <th className="text-left py-3 px-4 font-bold" style={{ color: '#1B4332' }}>Active Volunteers</th>
                <th className="text-left py-3 px-4 font-bold" style={{ color: '#1B4332' }}>Growth</th>
              </tr>
            </thead>
            <tbody>
              {yearlyStats.map((year, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-bold" style={{ color: '#E67E50' }}>{year.year}</td>
                  <td className="py-3 px-4">{year.rescued}</td>
                  <td className="py-3 px-4">{year.adopted}</td>
                  <td className="py-3 px-4">{year.volunteers}</td>
                  <td className="py-3 px-4">
                    {index < yearlyStats.length - 1 && (
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" style={{ color: '#F4D03F' }} />
                        <span className="text-sm font-medium" style={{ color: '#1B4332' }}>
                          {Math.round(((year.rescued - yearlyStats[index + 1].rescued) / yearlyStats[index + 1].rescued) * 100)}%
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: '#1B4332' }}>
          Our Work in Pictures
        </h3>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img 
              src={galleryImages[currentImageIndex].src} 
              alt={galleryImages[currentImageIndex].caption}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjMwMCIgY3k9IjIwMCIgcj0iNTAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTI1MCAyNTBMMzUwIDM1MEgyNTBWMjUwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <div className="p-6 text-white">
                <div className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2" style={{ backgroundColor: '#F4D03F', color: '#1B4332' }}>
                  {galleryImages[currentImageIndex].category}
                </div>
                <h4 className="text-xl font-bold">
                  {galleryImages[currentImageIndex].caption}
                </h4>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all"
            >
              <ChevronLeft className="w-6 h-6" style={{ color: '#1B4332' }} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all"
            >
              <ChevronRight className="w-6 h-6" style={{ color: '#1B4332' }} />
            </button>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="p-4 bg-gray-50">
            <div className="flex space-x-2 overflow-x-auto">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex ? 'border-yellow-400' : 'border-transparent'
                  }`}
                  style={{ borderColor: index === currentImageIndex ? '#F4D03F' : 'transparent' }}
                >
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjEwIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Awards and Recognition */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: '#1B4332' }}>
          Awards & Recognition
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4D03F' }}>
                <Award className="w-8 h-8" style={{ color: '#1B4332' }} />
              </div>
              <div className="text-lg font-bold mb-2" style={{ color: '#E67E50' }}>
                {achievement.year}
              </div>
              <h4 className="text-xl font-bold mb-2" style={{ color: '#1B4332' }}>
                {achievement.title}
              </h4>
              <p className="font-medium mb-3" style={{ color: '#1B4332' }}>
                {achievement.organization}
              </p>
              <p className="text-gray-600 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: '#1B4332' }}>
          What People Say About Us
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 opacity-20" style={{ color: '#F4D03F' }} />
              </div>
              
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#F4D03F' }} />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t pt-4">
                <p className="font-bold" style={{ color: '#1B4332' }}>
                  {testimonial.name}
                </p>
                <p className="text-sm" style={{ color: '#E67E50' }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Goals */}
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1B4332' }}>
          Our 2025 Goals
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          We're committed to expanding our impact and reaching even more animals in need. 
          Here's what we aim to achieve this year.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FEF9E7' }}>
            <div className="text-2xl font-bold mb-2" style={{ color: '#1B4332' }}>500+</div>
            <div className="text-sm font-medium" style={{ color: '#E67E50' }}>Animals to Rescue</div>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FEF9E7' }}>
            <div className="text-2xl font-bold mb-2" style={{ color: '#1B4332' }}>400+</div>
            <div className="text-sm font-medium" style={{ color: '#E67E50' }}>Successful Adoptions</div>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FEF9E7' }}>
            <div className="text-2xl font-bold mb-2" style={{ color: '#1B4332' }}>200+</div>
            <div className="text-sm font-medium" style={{ color: '#E67E50' }}>New Volunteers</div>
          </div>
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FEF9E7' }}>
            <div className="text-2xl font-bold mb-2" style={{ color: '#1B4332' }}>25+</div>
            <div className="text-sm font-medium" style={{ color: '#E67E50' }}>Communities Reached</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#F4D03F', color: '#1B4332' }}
          >
            Support Our Mission
          </button>
          <button 
            className="px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#E67E50' }}
          >
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;