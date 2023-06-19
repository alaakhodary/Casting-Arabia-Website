import React from "react";

interface IPropChildren {
  children: React.ReactNode;
}

const Card: React.FC<IPropChildren> = ({ children }) => {
  return (
    <div className="mx-auto mt-[16px] h-auto w-full max-w-[1400px] rounded-2xl bg-white p-[32px] shadow-secoundary sm:max-w-[78%]">
      {children}
    </div>
  );
};

export default Card;
