export default function Button({ title, onPress, IconRight }) {
  return (
    <button
      type="submit"
      className="w-full 
                  text-white-100 
                  bg-blue-700
                  hover:bg-blue-800 
                  focus:ring-4 
                  focus:outline-none 
                  focus:ring-primary-300 
                  font-medium rounded-lg 
                  text-sm 
                  px-5 
                  py-2.5 
                  text-center
                  flex
                  items-center
                  "
      onClick={onPress}
    >
      <IconRight />
      {title}
    </button>
  );
}
