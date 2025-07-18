import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
          <footer className="w-full py-8 sm:py-10 bg-gray-100 text-gray-700 text-center mt-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-8 px-2 sm:px-4">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Image src="/myageny_logo.png" alt="Myageny Logo" width={36} height={36} className="mb-2" />
            <span className="font-bold text-base sm:text-lg mb-1">myageny.com</span>
            <span className="text-xs sm:text-sm">Your trusted LIC partner for agents & clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold mb-2 text-sm sm:text-base">Quick Links</span>
            <a href="/page/home" className="text-blue-600 hover:underline text-xs sm:text-base">Home</a>
            <a href="/page/plan" className="text-blue-600 hover:underline text-xs sm:text-base">Plans</a>
            <a href="/page/ouragent" className="text-blue-600 hover:underline text-xs sm:text-base">Our Agents</a>
            <a href="/page/ourclient" className="text-blue-600 hover:underline text-xs sm:text-base">Our Clients</a>
            <a href="/page/society" className="text-blue-600 hover:underline text-xs sm:text-base">MyAgeny Society</a>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold mb-2 text-sm sm:text-base">Connect</span>
            <div className="flex gap-2 sm:gap-4 mb-2">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200" title="Twitter">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.72 0-4.924 2.206-4.924 4.924 0 .386.044.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.724-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200" title="Facebook">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200" title="Instagram">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-200" title="LinkedIn">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
              </a>
            </div>
            <span className="text-xs text-gray-500">Share your LIC journey with us on social media!</span>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 text-xs text-gray-500">&copy; {new Date().getFullYear()} myageny.com | All rights reserved | Designed with ❤️ for LIC agents & clients</div>
      </footer>
  )
}

export default Footer