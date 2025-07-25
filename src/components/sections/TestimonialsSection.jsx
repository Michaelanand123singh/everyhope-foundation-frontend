import React from 'react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Pet Adopter",
      image: "👩",
      story: "Humne Max ko sadak pe injured haalat mein dekha tha. Aaj woh hamare ghar ka sabse khush kutta hai aur family ka hissa. Recovery ke dauran jo care mila, bas kamaal tha!",
      animal: "Max (Golden Retriever)",
      timeframe: "2 saal pehle adopt kiya"
    },
    {
      name: "Raj Kumar",
      role: "Volunteer",
      image: "👨",
      story: "Everyhope ke saath volunteer karne se meri community service ki soch hi badal gayi. Jaanwaron ko theek hote aur ghar milte dekhna... dil khush ho jaata hai yaar!",
      animal: "50+ jaanwaron ki madad ki",
      timeframe: "3 saal se volunteer"
    },
    {
      name: "Meera Devi",
      role: "Emergency Reporter",
      image: "👵",
      story: "Jab maine nali mein phase puppies ko dekha, turant Everyhope ko call kiya. Bas 30 minute mein aa gaye aur saare 6 puppies ko bacha liya. Itni dedication rarely dekhne ko milti hai.",
      animal: "Puppy rescue report kiya",
      timeframe: "6 mahine pehle"
    }
  ]

  const successStories = [
    {
      name: "Bella",
      before: "Bilkul kamzor haalat mein mili thi, khaana bhi nahi kha rahi thi",
      after: "Ab bilkul healthy hai aur apne naye ghar mein khush",
      emoji: "🐕"
    },
    {
      name: "Whiskers",
      before: "Accident mein injured billi, bahut dard mein thi",
      after: "Poori tarah se theek ho gayi, loving family ne adopt kar liya",
      emoji: "🐱"
    },
    {
      name: "Lucky",
      before: "Sadak ka puppy tha, pair toot gaya tha",
      after: "Bilkul theek ho gaya, ab bachon ke liye therapy dog",
      emoji: "🦮"
    }
  ]

  return (
    <section className="py-12" style={{backgroundColor: '#FEF9E7'}}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Success Stories */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{color: '#1B4332'}}>
              Safalta Ki Kahaniyan
            </h2>
            <p className="text-sm text-gray-600">
              Har rescue ki apni kahani hai - umeed, ilaaj, aur nayi shururat ki
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="text-center mb-3">
                  <div className="text-2xl mb-1">{story.emoji}</div>
                  <h3 className="text-lg font-semibold" style={{color: '#1B4332'}}>{story.name}</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="border-l-3 p-2 rounded text-xs" style={{backgroundColor: '#FEF9E7', borderLeftColor: '#E67E50'}}>
                    <span className="font-medium" style={{color: '#1B4332'}}>Pehle:</span>
                    <span className="text-gray-700 ml-1">{story.before}</span>
                  </div>
                  <div className="border-l-3 p-2 rounded text-xs" style={{backgroundColor: '#FEF9E7', borderLeftColor: '#F4D03F'}}>
                    <span className="font-medium" style={{color: '#1B4332'}}>Baad mein:</span>
                    <span className="text-gray-700 ml-1">{story.after}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Community Testimonials */}
        <div>
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{color: '#1B4332'}}>
              Community Ki Awaaz
            </h2>
            <p className="text-sm text-gray-600">
              Un logon ki baat suniye jo hamare mission ko mumkin banate hain
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-sm" style={{color: '#1B4332'}}>{testimonial.name}</h4>
                    <p className="text-xs" style={{color: '#E67E50'}}>{testimonial.role}</p>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 text-sm mb-3 leading-relaxed">
                  "{testimonial.story}"
                </blockquote>
                
                <div className="border-t pt-3 border-gray-100">
                  <p className="text-xs text-gray-600">
                    <span className="font-medium" style={{color: '#1B4332'}}>Ke baare mein:</span> {testimonial.animal}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {testimonial.timeframe}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection