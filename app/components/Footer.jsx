export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            {/* Organization names */}
            <div className="mb-4">
              <p className="text-sm text-gray-400">An initiative by</p>
              <p className="text-lg font-semibold text-primary">Ammoo.society</p>
              <p className="text-sm text-gray-400">Part of Ammoo.labs</p>
            </div>
  
            {/* Divider */}
            <div className="border-t border-gray-700 my-6"></div>
  
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {currentYear} Ammoo.society. All rights reserved.
            </p>
            
            {/* Mission statement */}
            <p className="text-xs text-gray-500 mt-3 max-w-2xl mx-auto">
              Dedicated to rebuilding hope and education for children in need. 
              Every contribution makes a difference.
            </p>
          </div>
        </div>
      </footer>
    )
  }