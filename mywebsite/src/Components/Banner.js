import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["Your Dreams Are Our Priority, We Make You feel Comfortable."],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <div className="xs:grid-rows-1 xxs:grid-rows-1 sm:grid-rows-1  grid-rows-2 md:grid md:grid-cols-2 h-[85vh] mt-4">
        <div className="xs:row-span-full xxs:row-span-full xxs:w-full sm:row-span-full sm:w-full md:col-span-1 xs:w-full    md:h-[80vh] p-8 flex items-center ">
          <div className="relative xs:mb-40 mb-64 md:mb-72 xs:w-full xxs:w-full sm:w-full xs:text-center sm:text-center">
            <h1 className=" xs:text-2xl xxs:text-4xl sm:p-4 sm:text-5xl  font-mono font-semibold text-6xl absolute sm:w-full  ">
              {text}
              <span>
                <Cursor cursorColor="black" />
              </span>
            </h1>
          </div>
          <span></span>
        </div>
        <div className=" sm:row-span-1 md:col-span-1  md:h-[80vh] xxs:-mt-20 ">
          <img
            src="/bg.png"
            className="h-full w-full object-contain p-2"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
