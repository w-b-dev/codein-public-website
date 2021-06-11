import React, { ReactNode } from "react";

export default function ListItemCA({
  children,
  isHighlighted = false,
}: {
  children: ReactNode;
  isHighlighted?: boolean;
}) {
  return isHighlighted ? (
    <li className="font-light my-4 px-8 py-2 md:py-4 text-2xl md:text-3xl text-white hover:text-pink-500 border-b-2 border-solid border-pink-500 hover:border-white transition duration-100 ease-out">
      {children}
    </li>
  ) : (
    <li className="font-serif px-6 md:w-3/4 mx-auto my-4 text-3xl md:text-4xl text-white hover:text-pink-500 border-b-2 border-solid border-pink-500 hover:border-white border-opacity-25 transition duration-100 ease-out">
      {children}
    </li>
  );
}
