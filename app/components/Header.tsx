'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image'; // Add this import at the top


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: 'mailto:amitu2016@gmail.com', label: 'Email' },
    { href: 'https://linkedin.com/in/upadhyayamitk', label: 'LinkedIn', external: true },
    { href: 'https://github.com/amitu2016', label: 'GitHub', external: true },
    { href: 'https://medium.com/@amitu2016', label: 'Medium', external: true },
    { href: '/Amit_Kumar_Upadhyay_Resume.pdf', label: 'Download Resume', download: true },
  ];

  return (
    <motion.header
      className="bg-gradient-to-br from-purple-900 to-blue-900 text-white p-6 shadow-lg z-40"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ perspective: '1000px' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          {/* Uncomment and add your image in /public/profile.jpg */}
          <Image
  src="/profile.jpeg"
  alt="Amit"
  width={64}
  height={64}
  className="rounded-full border-2 border-white"
/>

          <h1 className="text-3xl font-bold">Amit Kumar Upadhyay</h1>
        </motion.div>

        {/* Hamburger Button (visible on mobile) */}
        <button
          className="md:hidden text-white focus:outline-none z-20"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
  className={`${
    isOpen ? 'flex' : 'hidden'
  } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-br from-purple-900 to-blue-900 md:bg-transparent p-6 md:p-0 space-y-4 md:space-y-0 md:space-x-6 z-50`}
>

          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              download={item.download}
              whileHover={{ scale: 1.1, color: '#d1e8ff', rotateZ: 5 }}
              className="hover:underline"
              onClick={() => setIsOpen(false)} // Close menu on click (mobile)
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}