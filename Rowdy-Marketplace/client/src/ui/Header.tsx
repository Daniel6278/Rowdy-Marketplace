import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { IoClose, IoSearchOutline } from 'react-icons/io5';
import { FiUser, FiStar, FiShoppingCart } from 'react-icons/fi';
import Container from './Container';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

// UTSA Official Colors
const utsaColors = {
  navy: "#0C2340", // PMS 289, RGB: 12, 35, 64
  orange: "#F15A22", // PMS 1665, RGB: 241, 90, 34
};

const Header = () => {
  const [searchText, setSearchText] = useState("");
  
  return (
    <div className="w-full bg-white">
      {/* Top header with logo, search, and icons */}
      <div className="max-w-screen-xl mx-auto h-20 flex items-center justify-between px-2 lg:px-4">
        {/* Logo on the left - reduced padding */}
        <div className="h-14 mr-3">
          <img 
            src={logo} 
            alt="UTSA Rowdy Marketplace" 
            className="h-full object-contain -mt-4" 
            style={{ height: "100px", width: "160px" }} 
          />
        </div>
        
        {/* Search bar in the middle - expanded width */}
        <div className="relative flex-grow mx-2">
          <input 
            type="text" 
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search Products" 
            className="w-full py-2 px-4 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" 
            style={{ borderColor: searchText ? utsaColors.orange : 'rgb(209, 213, 219)', 
                    boxShadow: searchText ? `0 0 0 1px ${utsaColors.orange}` : 'none' }}
          />
          {searchText ? (
            <IoClose
              onClick={() => setSearchText("")}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-xl cursor-pointer duration-300"
              style={{ color: utsaColors.orange }}
            />
          ) : (
            <IoSearchOutline 
              className="absolute top-1/2 right-3 -translate-y-1/2 text-xl cursor-pointer duration-300"
              style={{ color: utsaColors.navy }}
            />
          )}
        </div>
        
        {/* MenuBar - reduced spacing */}
        <div className="flex items-center ml-3 gap-x-6 text-2xl">
          <Link to={"/profile"}>
            <FiUser className="duration-300 cursor-pointer hover:text-orange-500" 
                   style={{ color: utsaColors.navy }} />
          </Link>
          
          <Link to={"/favorite"} className="relative">
            <FiStar className="duration-300 cursor-pointer hover:text-orange-500" 
                   style={{ color: utsaColors.navy }} />
            <span className="inline-flex items-center justify-center text-white absolute -top-1 -right-1 text-xs w-4 h-4 rounded-full"
                  style={{ backgroundColor: utsaColors.orange }}>
              0
            </span>
          </Link>
          
          <Link to={"/cart"} className="relative">
            <FiShoppingCart className="duration-300 cursor-pointer hover:text-orange-500" 
                           style={{ color: utsaColors.navy }} />
            <span className="inline-flex items-center justify-center text-white absolute -top-1 -right-1 text-xs w-4 h-4 rounded-full"
                  style={{ backgroundColor: utsaColors.orange }}>
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom navigation bar */}
      <div className="w-full text-white" style={{ backgroundColor: utsaColors.navy }}>
        <Container className="py-2 max-w-screen-xl mx-auto relative px-2">
          <div className="flex items-center gap-x-1 cursor-pointer absolute left-2">
            <span style={{ color: utsaColors.orange }}>Select Category</span> <FaChevronDown style={{ color: utsaColors.orange }}/>
          </div>
          
          <div className="flex items-center gap-x-4 justify-center mx-auto">
            {bottomNavigation.map(({title, link}) => (
            <Link 
              to={link} 
              key={title} 
              className="uppercase text-sm font-medium tracking-wide px-1 py-1 relative group"
              style={{ color: utsaColors.orange }}
            >
              {title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: utsaColors.orange }}></span>
            </Link>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;