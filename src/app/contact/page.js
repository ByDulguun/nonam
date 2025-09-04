import React from "react";

const Page = () => {
  return (
    <div className="h-fit">
      <div className="grid h-fit gap-5">
        <div className="flex gap-1 justify-center pt-24">
          <p className="text-white text-5xl lg:text-8xl ">GET IN </p>
          <p className="text-white text-5xl lg:text-8xl  textFont">Touch</p>
        </div>
        {/* <p className="m-auto text-center w-[300px] lg:w-[600px] text-[#b2b2b2]">
          Ready to elevate your brand? Contact us today to discuss your
          marketing needs. Our team is here to answer your questions and provide
          you with the solutions you need to succeed.
        </p> */}
      </div>
      <div className="px-6 py-12 h-fit grid gap-18 lg:justify-center lg:pt-24">
        <div className=" gap-2 grid h-fit">
          <p className="text-[#b2b2b2]">Email:</p>
          <a
            href="https://mail.google.com/mail/u/0/?to=onon@greativity.mn&su=SUBJECT&body=BODY&fs=1&tf=cm"
            className="text-white underline-offset-1 underline"
          >
            onon@greativity.mn
          </a>
        </div>
        <div className="gap-2 grid h-fit">
          <p className="text-[#b2b2b2]">Phone:</p>
          <a
            href="tel:+97699006205"
            className="text-white underline underline-offset-1"
          >
            +976-99006205
          </a>
        </div>

        <div className=" gap-2 grid h-fit">
          <p className="text-[#b2b2b2]">Adress:</p>
          <p className="text-[#b2b2b2]">UB PLUS Office</p>
          <p className="text-[#b2b2b2]">
            #608 6th floor Manlaibaatar street Ulaanbaatar Mongolia
          </p>
          <a
            href="https://maps.app.goo.gl/XAtYmaNTTGvTUX5z5"
            className="text-white underline"
          >
            View on maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
