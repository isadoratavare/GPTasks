export default function Input({
  type,
  name,
  id,
  placeholder,
  onChange,
  min,
  error,
  errorMessage,
}) {
  if (type === "textarea") {
    return (
      <textarea
        id={id}
        value={name}
        rows="4"
        className="bg-slate-100 
               border-solid border-1 border-slate-300
               text-gray-900 
               sm:text-sm 
               rounded-lg 
               focus:ring-primary-600 
               focus:border-primary-600 
               block
               w-full 
               p-2.5 "
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    );
  }

  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`bg-slate-100 
      text-gray-900 
      sm:text-sm 
      rounded-lg 
      focus:ring-primary-600 
      focus:border-blue-500 
      block
      w-full 
      p-2.5 
      outline-0
      
      ${
        error
          ? "border-solid border-1 border-red-600"
          : "border-solid border-1p border-slate-300"
      }
      `}
        onChange={onChange}
        min={min}
      />
      {error && <p className="text-red-600 text-sm">{errorMessage}</p>}
    </>
  );
}
