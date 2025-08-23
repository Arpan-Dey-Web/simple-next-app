import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 mb-6 mx-auto">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl  ">
        ✏️
      </div>
      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        PencilCraft
      </h3>
    </div>
  );
};

export default Logo;
