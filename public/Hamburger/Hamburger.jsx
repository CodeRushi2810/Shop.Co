import { useState } from 'react';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-10 h-8 flex items-center justify-center"
      aria-label="Toggle Menu"
    >
      {/* Common Line Style */}
      <span
        className={`absolute h-1 w-8 bg-black rounded-xl transition-all duration-300 ease-in-out
          ${isOpen ? 'rotate-45' : '-translate-y-2'}`}
      ></span>
      <span
        className={`absolute h-1 w-8 bg-black rounded-xl transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      ></span>
      <span
        className={`absolute h-1 w-8 bg-black rounded-xl transition-all duration-300 ease-in-out
          ${isOpen ? '-rotate-45' : 'translate-y-2'}`}
      ></span>
    </button>
  );
}

export default Hamburger;
