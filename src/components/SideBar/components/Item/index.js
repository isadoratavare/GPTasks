export default function Item({ Icon = <></>, title = "" }) {
  return (
    <li>
      <a
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
      </a>
    </li>
  );
}
