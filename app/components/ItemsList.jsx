export default function ItemsList() {
    // Items needed for the students
    const items = [
      { name: 'Target Student Count', quantity: '3,500', description: 'Students we aim to help' },
      { name: 'Books', quantity: '17,500', description: '180-page CR books' },
      { name: 'Pencils', quantity: '7,000', description: 'Writing pencils' },
      { name: 'Blue Pens', quantity: '3,500', description: 'Blue ballpoint pens' },
      { name: 'Black Pens', quantity: '3,500', description: 'Black ballpoint pens' },
      { name: 'Rulers', quantity: '3,500', description: '30cm rulers' },
      { name: 'Pencil Cutters', quantity: '3,500', description: 'Pencil sharpeners' },
      { name: 'Erasers', quantity: '3,500', description: 'Quality erasers' },
      { name: 'Bags', quantity: '3,500', description: 'School bags' },
    ]
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What We Need</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              These essential supplies will help 3,500 children return to learning 
              with dignity and hope for their future.
            </p>
          </div>
  
          {/* Items grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-black">{item.name}</h3>
                  <span className="text-2xl font-bold text-primary ml-2">
                    {item.quantity}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
  
          {/* Total summary */}
          <div className="mt-10 text-center bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
            <p className="text-gray-700">
              <span className="font-semibold">Every contribution matters.</span> Whether you can help 
              provide supplies for one child or many, your generosity will make a real difference 
              in their lives.
            </p>
          </div>
        </div>
      </section>
    )
  }