import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t border-gray">
      <div className="md:hidden flex flex-col justify-center items-center py-20 max-w-[1280px] mx-auto px-5">
        <div className="relative w-fit">
          <p className="text-white text-2xl tracking-[2px] w-full h-full overflow-hidden">
            QUANT
          </p>
          <div
            className={`transition-all absolute w-full h-[1px] bg-blobMiddle top-0 z-40 animate-fade-right animate-delay-100`}
          />
          <div
            className={`transition-all absolute w-full h-[1px] bg-blobRight top-1/2 z-40 animate-fade-left animate-delay-300`}
          />
          <div
            className={`transition-all absolute w-full h-[1px] bg-blobLeft bottom-0 z-40 animate-fade-right animate-delay-500`}
          />
        </div>

        <div className="flex justify-center space-x-8 my-12">
          <FaTwitterSquare className="text-white text-3xl hover:text-bgBlack hover:gradient" />
          <FaLinkedin className="text-white text-3xl hover:text-bgBlack hover:gradient" />
        </div>

        <div className="text-center">
          <h2 className="textBold">QUANT TEAM</h2>
          <p className="text mt-8 mb-4 font-extralight">About Us</p>
          <p className="text mb-4 font-extralight">Work with Us</p>
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text font-extralight">Terms of Use & Privacy Policy</p>
          <p className="text font-extralight">
            ©2023 Quant Team. All Rights Reserved
          </p>
        </div>
      </div>

      <div className="hidden md:flex justify-between py-20 max-w-[1280px] mx-auto px-5">
        <div>
          <div className="text-left">
            <h2 className="textBold">QUANT TEAM</h2>
            <p className="text mt-8 mb-4 font-extralight">About Us</p>
            <p className="text mb-4 font-extralight">Work with Us</p>
          </div>
          <p className="text font-extralight">Terms of Use & Privacy Policy</p>
        </div>
        <div className="flex flex-col justify-center items-end">
          <div className="relative w-fit">
            <p className="text-white text-2xl tracking-[2px] w-full h-full overflow-hidden">
              QUANT
            </p>
            <div
              className={`transition-all absolute w-full h-[1px] bg-blobMiddle top-0 z-40 animate-fade-right animate-delay-100`}
            />
            <div
              className={`transition-all absolute w-full h-[1px] bg-blobRight top-1/2 z-40 animate-fade-left animate-delay-300`}
            />
            <div
              className={`transition-all absolute w-full h-[1px] bg-blobLeft bottom-0 z-40 animate-fade-right animate-delay-500`}
            />
          </div>
          <div className="flex justify-center space-x-8 my-12">
            <FaTwitterSquare className="text-white text-3xl hover:text-bgBlack hover:gradient" />
            <FaLinkedin className="text-white text-3xl hover:text-bgBlack hover:gradient" />
          </div>
          <p className="text font-extralight">
            ©2023 Quant Team. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
