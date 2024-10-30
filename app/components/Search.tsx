import React from 'react';
import { Search } from "lucide-react"; // استيراد الأيقونة بالاسم الصحيح

const SearchComponent = () => {
  return (
    <div className="w-full flex relative  group items-center gap-2 justify-between px-4 border border-input  rounded-xl md:w-[40%] bg-main"> 
      <input className="py-2  text-base   w-full bg-transparent text-gray-50  border-none   outline-none active:outline-none ring-0 placeholder:text-gray-400" />
      <Search className="hover:text-rose-400 group:hover:text-rose-400 w-5 h-5 cursor-pointer  " /> {/* استخدام الأيقونة */}
    </div>
  );
}

export default SearchComponent;
