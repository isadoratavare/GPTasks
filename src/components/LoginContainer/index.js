export default function LoginContainer({ children }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0  ">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-10 form-container">
        <div className="flex flex-col items-center">
          <img
            className="h-auto max-w-xs rounded-sm"
            src={require("../../assets/images/logo.svg").default}
            alt="Logo"
          />
        </div>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{children}</div>
      </div>
    </div>
  );
}
