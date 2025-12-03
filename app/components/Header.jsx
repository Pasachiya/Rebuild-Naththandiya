export default function Header() {
    return (
      <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col items-center text-center">
            {/* Parent organization */}
            <div className="text-sm text-gray-600 mb-1">
              Ammoo.labs
            </div>
            
            {/* Main organization - emphasized */}
            <div className="text-2xl font-semibold text-primary">
              Ammoo.society
            </div>
          </div>
        </div>
      </header>
    )
  }