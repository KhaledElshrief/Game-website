import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { MdDashboard } from 'react-icons/md';
import NavLink from './NavLink';
import Logo from '../defaults/Logo';
/* eslint-disable */

const NAV_LINKS = [
  {
    label: "Home",
    link: "/",
    icon: <GoHomeFill />,
  },
  {
    label: "Category",
    link: "/category",
    icon: <MdDashboard />,
  },
  {
    label: "Games",
    link: "/games",
    icon: <MdDashboard />,
  },
  {
    label: "Wishlist",
    link: "/wishlist",
    icon: <FaHeart />,
  },
  {
    label: "Friends",
    link: "/friends",
    icon: <BsFillPeopleFill />,
  },
];

const SideBar = () => {
  return (
    <div className=" gap-3 col-span-2">
      <div className="flex flex-col  h-screen sticky inset-0  gap-3 items-start bg-black/30 text-gray-50 py-5 px-10">
        <Logo />
        {NAV_LINKS.map((navLink) => (
        <NavLink navLink={navLink} isActive={false} />
      ))}
      </div>
      
     
    </div>
  );
};

export default SideBar;
