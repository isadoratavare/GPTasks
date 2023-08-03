import React from "react";
export default function Item({
  Icon = (
    <div>
      <h1>TESTE</h1>
    </div>
  ),
  title = "",
  onClick = () => {},
}) {
  return (
    <li onClick={onClick}>
      <span
        href="#"
        className="flex 
          items-center 
          p-2 
          text-gray-900 
          rounded-lg 
          light:text-white 
          hover:bg-gray-100 
          ark:hover:bg-gray-700"
      >
        <Icon />
        <span className="ml-3">{title}</span>
      </span>
    </li>
  );
}
