import React, { useState, useEffect } from 'react';

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false); // Default to closed on small screens
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Check if the screen is small when the component is mounted
    const handleResize = () => {
      if (window.innerWidth < 1024) { // Assuming 'lg' breakpoint for small screens
        setIsOpen(false); // Initially closed on small screens
      } else {
        setIsOpen(true); // Initially open on larger screens
      }
    };

    handleResize(); // Call on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const combinedContent = content.join('<br /> <br />');

  const renderContent = () => {
    if (combinedContent.length <= 100 || isExpanded) {
      return combinedContent;
    } else {
      return `${combinedContent.slice(0, 100)}...`;
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={toggleDropdown}
        className="w-full text-left py-2 px-4 font-bold text-lg text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {title}
      </button>
      {isOpen && (
        <div
          className="absolute left-0 right-0 z-10 bg-white shadow-lg rounded-lg p-6 mt-2 max-w-screen text-left"
        >
          <div
            className="text-lg text-gray-700"
            dangerouslySetInnerHTML={{ __html: renderContent() }}
          ></div>
          {combinedContent.length > 100 && (
            <button
              onClick={toggleExpansion}
              className="text-blue-600"
            >
              {isExpanded ? 'View Less' : 'View More'}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
