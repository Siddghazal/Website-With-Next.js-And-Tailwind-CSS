

"use client"
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-green-700 text-center py-5 relative">
      <p className="text-white text-sm md:text-base">&copy; 2024 | All Rights Reserved.</p>
      
      {/* Scroll-to-Top Icon */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-2 bg-primary text-white rounded-full"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
