export const HeaderButton = () => {
  return (
    <div className="flex flex-col justify-between items-center w-8 h-8 p-2">
      <div className="w-6 h-1 bg-[#f74c1c] rounded"></div>
      <div className="w-7 h-1 bg-[#f74c1c] rounded"></div>
      <div className="w-6 h-1 bg-[#f74c1c] rounded"></div>
    </div>
  );
};

export const HeaderButtonX = () => {
  return (
    <div className="h-8 w-8 flex items-center justify-center  overflow-hidden relative">
      <div className="w-8 h-1 bg-[#f74c1c] rounded transform rotate-45 absolute"></div>
      <div className="w-8 h-1 bg-[#f74c1c] rounded transform -rotate-45 absolute"></div>
    </div>
  );
};
