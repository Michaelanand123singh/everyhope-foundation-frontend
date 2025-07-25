import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#FEF9E7] shadow-md sticky top-0 z-50 border-b border-[#1B4332]/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2.5">
          <Link to="/" className="flex items-center space-x-2">
  {/* Logo */}
  <img
    src="/ngo.png" // replace with actual path
    alt="Everyhope Logo"
    className="w-14 rounded-full object-cover"
  />
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium transition-colors duration-200">
              About
            </Link>
            <Link to="/animals" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium transition-colors duration-200">
              Animals
            </Link>
            <Link to="/get-involved" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium transition-colors duration-200">
              Get Involved
            </Link>
            <Link to="/news" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium transition-colors duration-200">
              News
            </Link>
            <Link to="/contact" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/contact" className="text-red-600 hover:text-red-700 text-sm font-semibold">
              🚨 Emergency
            </Link>
            <Link 
              to="/donate" 
              className="bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-[#1B4332] px-4 py-1.5 rounded-md text-sm font-semibold transition-colors duration-200"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[#1B4332] hover:text-[#E67E50] focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-3 border-t border-[#1B4332]/10 mt-2">
            <nav className="flex flex-col space-y-1 pt-2">
              <Link to="/" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium py-2 px-2 hover:bg-[#1B4332]/5 rounded transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium py-2 px-2 hover:bg-[#1B4332]/5 rounded transition-colors duration-200">
                About
              </Link>
              <Link to="/animals" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium py-2 px-2 hover:bg-[#1B4332]/5 rounded transition-colors duration-200">
                Animals
              </Link>
              <Link to="/get-involved" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium py-2 px-2 hover:bg-[#1B4332]/5 rounded transition-colors duration-200">
                Get Involved
              </Link>
              <Link to="/news" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium py-2 px-2 hover:bg-[#1B4332]/5 rounded transition-colors duration-200">
                News
              </Link>
              <Link to="/contact" className="text-[#1B4332] hover:text-[#E67E50] text-sm font-medium py-2 px-2 hover:bg-[#1B4332]/5 rounded transition-colors duration-200">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-3 border-t border-[#1B4332]/10">
                <Link to="/contact" className="text-red-600 hover:text-red-700 text-sm font-semibold text-center py-1">
                  🚨 Report Emergency
                </Link>
                <Link 
                  to="/donate" 
                  className="bg-[#F4D03F] hover:bg-[#F4D03F]/90 text-[#1B4332] px-4 py-2 rounded-md text-sm font-semibold text-center transition-colors duration-200"
                >
                  Donate Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header