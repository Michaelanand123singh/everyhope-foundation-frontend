import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#1B4332] text-[#FEF9E7]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 bg-[#F4D03F] rounded-full flex items-center justify-center">
                <span className="text-[#1B4332] font-bold text-sm">EH</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#FEF9E7]">Everyhope Foundation</h3>
                <p className="text-[#FEF9E7]/70 text-xs">Animal Welfare • Gaya</p>
              </div>
            </div>
            <p className="text-[#FEF9E7]/80 mb-3 leading-relaxed text-sm">
              Where Every Life Finds Hope, Every Heart Finds Purpose. Join Gaya's leading animal welfare community in creating a compassionate world for all animals.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-[#FEF9E7]/60 hover:text-[#E67E50] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-[#FEF9E7]/60 hover:text-[#E67E50] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-[#FEF9E7]/60 hover:text-[#E67E50] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.219 0 .359.16.359.438 0 .219-.139.578-.219.937-.199.797.399 1.437 1.187 1.437 1.406 0 2.593-1.488 2.593-3.649 0-1.909-1.406-3.244-3.424-3.244-2.334 0-3.704 1.747-3.704 3.563 0 .219.08.438.199.578.08.08.08.16.059.219-.059.219-.199.797-.219.937-.059.16-.16.199-.359.119-1.007-.359-1.627-1.578-1.627-2.544 0-2.084 1.518-3.994 4.38-3.994 2.334 0 4.142 1.667 4.142 3.885 0 2.32-1.464 4.142-3.504 4.142-.678 0-1.317-.359-1.537-.797 0 0-.359 1.376-.438 1.698-.16.638-.599 1.437-.897 1.936.678.219 1.397.359 2.155.359 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-[#F4D03F]">Quick Links</h4>
            <ul className="space-y-1.5">
              <li><a href="/about" className="text-[#FEF9E7]/70 hover:text-[#E67E50] text-sm transition-colors duration-200">About Us</a></li>
              <li><a href="/animals" className="text-[#FEF9E7]/70 hover:text-[#E67E50] text-sm transition-colors duration-200">Animals</a></li>
              <li><a href="/get-involved" className="text-[#FEF9E7]/70 hover:text-[#E67E50] text-sm transition-colors duration-200">Volunteer</a></li>
              <li><a href="/donate" className="text-[#FEF9E7]/70 hover:text-[#E67E50] text-sm transition-colors duration-200">Donate</a></li>
              <li><a href="/news" className="text-[#FEF9E7]/70 hover:text-[#E67E50] text-sm transition-colors duration-200">News & Updates</a></li>
              <li><a href="/resources" className="text-[#FEF9E7]/70 hover:text-[#E67E50] text-sm transition-colors duration-200">Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-[#F4D03F]">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#E67E50]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="text-[#FEF9E7]/80 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#E67E50]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="text-[#FEF9E7]/80 text-sm">info@everyhope.org</span>
              </div>
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-[#E67E50] mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-[#FEF9E7]/80 text-sm">Gaya, Bihar 823001<br />India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FEF9E7]/20 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#FEF9E7]/60 text-xs">
            © 2024 Everyhope Foundation. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/privacy" className="text-[#FEF9E7]/60 hover:text-[#E67E50] text-xs transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[#FEF9E7]/60 hover:text-[#E67E50] text-xs transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer