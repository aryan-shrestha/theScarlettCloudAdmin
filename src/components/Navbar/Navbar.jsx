import React from "react";
import DropdownMenu from "./components/DropdownMenu";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 p-4 flex justify-between items-center shadow-md z-50 bg-white">
      <div className="logo-container">
        <h1 className="font-medium text-xl">Logo</h1>
      </div>
      <div className="flex items-center">
        <DropdownMenu
          dropdownName={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          }
          optionLists={[
            { name: "option 1", link: "#" },
            { name: "option 2", link: "#" },
            { name: "option 3", link: "#" },
          ]}
        />
        <DropdownMenu />
        <div className="h-8 w-8 rounded-full overflow-hidden">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
            alt="User avatar"
            className="w-full h-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
