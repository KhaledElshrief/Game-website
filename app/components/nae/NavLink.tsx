//"use client"; // Ensure this is a client component
import Link from 'next/link';
import React, { ReactElement } from 'react';

const NavLink = ({
  navLink,
  isActive, // Accept isActive as a prop
}: {
  navLink: { link: string; label: string; icon: ReactElement };
  isActive: boolean; // Type for the isActive prop
}) => {
  const { label, icon } = navLink;

  return (
    <Link
      href={navLink.link}
      className={`flex gap-2 hover:text-rose-400  duration-200 my-2 items-center p-2 rounded-md ${isActive ? 'text-rose-400' : 'text-gray-50'}`}
    >
      {React.cloneElement(icon, { className: "w-6 h-6" })}
      {label}
    </Link>
  );
};

export default NavLink;
