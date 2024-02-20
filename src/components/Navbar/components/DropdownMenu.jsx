import React, { useState } from "react";

const DropdownMenu = ({ dropdownName, optionLists }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      onBlur={closeDropdown}
      tabIndex={0}
    >
      <button className="p-2 text-gray-80" onClick={toggleDropdown}>
        {dropdownName}
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-md bg-white">
          <div className="py-1">
            {optionLists.map((option) => {
              return (
                <a
                  href={option.link}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  {option.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
