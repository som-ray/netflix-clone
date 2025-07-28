import React from "react";
const Login = () => {
  return (

    <div className="w-screen h-screen bg-black bg-none sm:bg-cover sm:bg-center sm:bg-no-repeat sm:bg-[linear-gradient(to_top,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg')] overflow-y-scroll">
      {/* Page */}

      <div className="max-w-screen-xl	h-auto sm:bg-center sm:bg-no-repeat flex flex-col justify-center items-center mx-auto">
        <div className="flex items-start h-min w-full mb-10 ml-10">
          <img alt="logo" src="/images/logo.png" className="sm:w-36 w-28" />
        </div>
        <div className="flex flex-col w-[420px] bg-[#000000b0] p-12 text-gray-100 mb-10 rounded-[4px]">
          <h1 className="text-3xl mb-10 font-bold">Sign In</h1>

          <form type="submit" className="flex flex-col w-full">
            <input placeholder="Enter email" type="text" className="mb-4 p-4 bg-gray-900 border border-[#999] rounded-[4px]"></input>
            <input placeholder="Enter Password" type="password" className="mb-4 p-4 bg-gray-900 border border-[#999] rounded-[4px]"></input>
            <button className="mb-4 p-2 bg-[#e50914] rounded-[4px] font-bold">Sign In</button>
          </form>

          <div className="flex flex-col w-full items-center">
            <p>OR</p>
            <button className="mb-3 mt-3 p-2 bg-[#80808066] rounded-[4px] font-bold w-full">Use a sign in code</button>
            <a href="#" className="underline"> Forgot password?</a>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex gap-x-2 mb-4">
              <input type="checkbox"></input>
              <p>Remember me</p>
            </div>

            <div className="flex gap-x-2 mb-4">
              <p className=" text-gray-500">New to Netx?</p>
              <a className="underline text-gray-200">Sign in now</a>
            </div>

            <div className="text-sm ">
              <p className=" text-gray-500">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
              <a className="underline text-blue-700">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>



    // <div className="w-screen h-auto bg-black bg-none sm:bg-cover sm:bg-center sm:bg-no-repeat flex flex-col justify-center items-center sm:bg-[linear-gradient(to_top,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg')]">

    //   <div className="flex items-start h-min w-full mb-10 ml-36">
    //     <img alt="logo" src="/images/logo.png" className="w-36" />
    //   </div>
    //   <div className="flex flex-col w-[420px] bg-[#000000b0] p-12 text-gray-100 mb-10 rounded-[4px]">
    //     <h1 className="text-3xl mb-10 font-bold">Sign In</h1>

    //     <form type="submit" className="flex flex-col w-full">
    //       <input placeholder="Enter email" type="text" className="mb-4 p-4 bg-gray-900 border border-[#999] rounded-[4px]"></input>
    //       <input placeholder="Enter Password" type="password" className="mb-4 p-4 bg-gray-900 border border-[#999] rounded-[4px]"></input>
    //       <button className="mb-4 p-2 bg-[#e50914] rounded-[4px] font-bold">Sign In</button>
    //     </form>

    //     <div className="flex flex-col w-full items-center">
    //       <p>OR</p>
    //       <button className="mb-3 mt-3 p-2 bg-[#80808066] rounded-[4px] font-bold w-full">Use a sign in code</button>
    //       <a href="#" className="underline"> Forgot password?</a>
    //     </div>

    //     <div className="flex flex-col w-full">
    //       <div className="flex gap-x-2 mb-4">
    //         <input type="checkbox"></input>
    //         <p>Remember me</p>
    //       </div>

    //       <div className="flex gap-x-2 mb-4">
    //         <p className=" text-gray-500">New to Netx?</p>
    //         <a className="underline text-gray-200">Sign in now</a>
    //       </div>

    //       <div className="text-sm ">
    //         <p className=" text-gray-500">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
    //         <a className="underline text-blue-700">Learn more</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;

