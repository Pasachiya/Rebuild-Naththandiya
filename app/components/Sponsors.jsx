export default function Sponsors() {
    // Placeholder for future sponsors
    const sponsorSlots = Array(6).fill(null)
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Sponsors</h2>
            <p className="text-gray-700">
              We welcome partnerships with organizations that share our commitment to education
            </p>
          </div>
  
          {/* Sponsor grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sponsorSlots.map((_, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 
                           aspect-square flex items-center justify-center p-4 hover:border-primary 
                           transition-colors"
              >
                <div className="text-center">
                  <img 
                    src="/sponsor-placeholder.png" 
                    alt="Sponsor placeholder"
                    className="w-full h-auto opacity-30 mb-2"
                  />
                  <p className="text-xs text-gray-400">Sponsor Slot</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Call to action for sponsors */}
          <div className="mt-10 text-center bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-semibold text-lg mb-2">Become a Sponsor</h3>
            <p className="text-gray-700 mb-4">
              Partner with us to make a lasting impact on children's education in Naththandiya
            </p>
            <p className="text-sm text-gray-600">
              Contact us at: <span className="font-semibold">[Email - To Be Added]</span>
            </p>
          </div>
        </div>
      </section>
    )
  }