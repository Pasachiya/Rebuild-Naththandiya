export default function DonationMethods() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How to Donate</h2>
            <p className="text-gray-700 text-lg">
              Your contribution will directly help children in need
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bank Transfer */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center">Bank Transfer</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="text-sm text-gray-600">Bank Name</p>
                  <p className="font-semibold">[Bank Name - To Be Added]</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Account Name</p>
                  <p className="font-semibold">[Account Name - To Be Added]</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Account Number</p>
                  <p className="font-semibold">[Account Number - To Be Added]</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Branch</p>
                  <p className="font-semibold">[Branch - To Be Added]</p>
                </div>
              </div>
            </div>
  
            {/* QR Code / Digital Payment */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-center">Digital Payment</h3>
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <img 
                    src="/donation-placeholder.png" 
                    alt="QR Code placeholder"
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Scan QR code to donate<br/>
                  <span className="text-xs">[QR Code - To Be Added]</span>
                </p>
              </div>
            </div>
          </div>
  
          {/* Additional info */}
          <div className="mt-10 text-center bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
            <p className="text-sm text-gray-600 mb-2">
              For other donation methods or bulk contributions, please contact us
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> [Email - To Be Added]
            </p>
          </div>
        </div>
      </section>
    )
  }