'use client'

import { useEffect, useState } from 'react'

export default function FundStatus() {
  // ⚠️ UPDATE THIS VALUE MANUALLY FOR CI/CD
  const CURRENT_AMOUNT = 0.00 // Change this value as funds are collected
  const GOAL_AMOUNT = 10000000.00

  const [displayAmount, setDisplayAmount] = useState(0)
  const percentage = (CURRENT_AMOUNT / GOAL_AMOUNT) * 100

  // Animate the number counting up
  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = CURRENT_AMOUNT / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= CURRENT_AMOUNT) {
        setDisplayAmount(CURRENT_AMOUNT)
        clearInterval(timer)
      } else {
        setDisplayAmount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [CURRENT_AMOUNT])

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Fund Status</h2>
          <p className="text-gray-600">
            Every rupee brings us closer to rebuilding their future
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 shadow-md">
          {/* Amount display */}
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Current Amount</p>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {formatCurrency(displayAmount)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">Goal</p>
              <p className="text-2xl md:text-3xl font-semibold text-gray-700">
                {formatCurrency(GOAL_AMOUNT)}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            >
              {percentage > 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                  {percentage.toFixed(1)}%
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            {percentage >= 100 
              ? '🎉 Goal reached! Thank you for your generosity!' 
              : `${(100 - percentage).toFixed(1)}% to go`}
          </p>
        </div>
      </div>
    </section>
  )
}