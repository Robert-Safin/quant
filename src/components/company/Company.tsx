'use client'
import Image from "next/image";
import { useState } from "react";

const Company = () => {
  const [activeIndex, setActiveIndex] = useState(0); // start with the first div

  const prevDiv = () => {
    setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1)); // if it's the first div, go to the last div, otherwise go to the previous div
  };

  const nextDiv = () => {
    setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1)); // if it's the last div, go to the first div, otherwise go to the next div
  };
  return (
    <div className="my-[1000px]">
      <h1 className="primaryHeader text-center px-5 mb-8">
        We are in a good company
      </h1>
      <p className="text text-center px-5 mb-8">
        Our partnerships have delivered great value to our projects and we’re
        happy to share some of their feedback below
      </p>

      <div className="flex w-full justify-center space-x-20 py-8">
        <div className="gradient w-14 h-14 rounded-full flex justify-center items-center">
          <button onClick={prevDiv} className="rounded-full flex justify-center items-center w-8 h-8 text-blobMiddle hover:text-bgBlack text-xl p-[26px] hover:p-0 hover:gradient bg-bgBlack">
            {"<"}
          </button>
        </div>
        <div className="gradient w-14 h-14  rounded-full flex justify-center items-center">
          <button onClick={nextDiv} className="rounded-full flex justify-center items-center w-8 h-8 text-blobMiddle hover:text-bgBlack text-xl p-[26px] hover:p-0 hover:gradient bg-bgBlack">
            {">"}
          </button>
        </div>
      </div>








      <div className="flex w-full h-[400px] relative border border-red-400">




      {activeIndex=== 0 && <div className="absolute mx-auto w-full text-center px-5 flex flex-col justify-center items-center space-y-4 ">
          <p className="text gradient bg-clip-text text-transparent max-w-[580px]">
            Gravity Team is a key partner for Bitso, and their professionalism
            has been instrumental in deploying our liquidity strategy and
            expansion ambitions across Latin America. Gravity Team’s vast market
            expertise and flexibility to support our business requirements in
            lightning speed have permitted us to catch up with our product debt,
            list new tokens in record time, and offer attractive spreads for our
            end users. We are grateful to partner with Gravity Team and excited
            to continue working together in making crypto useful.
          </p>
          <p className="text">1Alberto Sánchez Tello</p>
          <div className="flex items-center">
            <p className="textBold border-r pr-4">Head of Markets of Bitso</p>
            <Image src="/testi/bitso.png" alt="" width={100} height={100} />
          </div>
        </div>}







        {activeIndex=== 1 &&<div className="absolute mx-auto w-full text-center px-5 flex flex-col justify-center items-center space-y-4 ">
          <p className="text gradient bg-clip-text text-transparent max-w-[580px]">
            Gravity Team is a key partner for Bitso, and their professionalism
            has been instrumental in deploying our liquidity strategy and
            expansion ambitions across Latin America. Gravity Team’s vast market
            expertise and flexibility to support our business requirements in
            lightning speed have permitted us to catch up with our product debt,
            list new tokens in record time, and offer attractive spreads for our
            end users. We are grateful to partner with Gravity Team and excited
            to continue working together in making crypto useful.
          </p>
          <p className="text">2Alberto Sánchez Tello</p>
          <div className="flex items-center">
            <p className="textBold border-r pr-4">Head of Markets of Bitso</p>
            <Image src="/testi/bitso.png" alt="" width={100} height={100} />
          </div>
        </div>}









       {activeIndex=== 2 && <div className="absolute mx-auto w-full text-center px-5 flex flex-col justify-center items-center space-y-4 ">
          <p className="text gradient bg-clip-text text-transparent max-w-[580px]">
            Gravity Team is a key partner for Bitso, and their professionalism
            has been instrumental in deploying our liquidity strategy and
            expansion ambitions across Latin America. Gravity Team’s vast market
            expertise and flexibility to support our business requirements in
            lightning speed have permitted us to catch up with our product debt,
            list new tokens in record time, and offer attractive spreads for our
            end users. We are grateful to partner with Gravity Team and excited
            to continue working together in making crypto useful.
          </p>
          <p className="text">3Alberto Sánchez Tello</p>
          <div className="flex items-center">
            <p className="textBold border-r pr-4">Head of Markets of Bitso</p>
            <Image src="/testi/bitso.png" alt="" width={100} height={100} />
          </div>
        </div>}





      </div>
    </div>
  );
};

export default Company;
