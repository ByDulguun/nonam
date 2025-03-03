import React from "react";

const Page = () => {
  return (
    <div className="h-fit">
      <div className="grid h-fit gap-5">
        <div className="flex gap-1 justify-center pt-24">
          <p className="text-white text-5xl lg:text-8xl ">GET IN </p>
          <p className="text-white text-5xl lg:text-8xl  textFont">Touch</p>
        </div>
        <p className="m-auto text-center w-[300px] lg:w-[600px] text-[#b2b2b2]">
          Ready to elevate your brand? Contact us today to discuss your
          marketing needs. Our team is here to answer your questions and provide
          you with the solutions you need to succeed.
        </p>
      </div>
      <div className="px-6 py-12 h-fit grid gap-18 lg:justify-center lg:pt-24">
        <div className=" gap-2 grid h-fit">
          <p className="text-[#b2b2b2]">Email:</p>
          <p className="text-white">HELLO@MARKETHING.COM</p>
        </div>
        <div className=" gap-2 grid h-fit">
          <p className="text-[#b2b2b2]">Phone:</p>
          <p className="text-white">976:80940383</p>
        </div>
        <div className=" gap-2 grid h-fit">
          <p className="text-[#b2b2b2]">Adress:</p>
          <p className="text-[#b2b2b2]">8301 compton ave</p>
          <p className="text-[#b2b2b2]">Los angles - california</p>
          <p className="text-white">View on maps</p>
        </div>
        <p className="text-[#b2b2b2]">Subcribe to our newsletter</p>
        <div className="grid gap-2">
          <input
            placeholder="Your Email"
            className="p-4 outline-none border-[#b2b2b1] border-b-1 w-[100%] text-[#b2b2b2] "
          />
          <button className="text-white p-2 border border-gray-500 w-fit my-6">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
