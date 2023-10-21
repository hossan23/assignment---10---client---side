const Darkmode = ({ darkMode, toggleDarkMode }) => {
 return (
  <label className="flex items-center cursor-pointer">
   <div className="relative">
    <input type="checkbox" className="hidden" onChange={toggleDarkMode} checked={darkMode} />
    <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
    <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
   </div>
   <div className="ml-3 text-gray-700">Dark Mode</div>
  </label>
 );
};

export default Darkmode;
