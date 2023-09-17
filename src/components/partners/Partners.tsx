import Image from "next/image";
import PartnersCarousel from "../PartnersCarousel/ParnersCarousel";

const Partners = () => {
  return (
    <div className="relative flex flex-col  md:flex-row md:items-center md:justify-between max-w-[1100px] px-5 mx-auto my-20">
      <div className="hidden md:block absolute w-80 h-80 bg-blobLeft blur-3xl left-0 top-0 -z-10" />
      <div className="hidden md:block absolute top-0 w-80 h-80">
        <Image src="/near.png.svg" width={100} height={100} alt=""
        className="object-cover w-20 h-20 relative -right-40"/>
        <Image src="/mena.png.svg" width={100} height={100} alt=""
        className="object-cover w-20 h-20 relative -right-10"/>
        <Image src="/solana.png.svg" width={100} height={100} alt=""
        className="object-cover w-20 h-20 relative -right-40"/>
      </div>
      <h1 className="primaryHeader text-center md:max-w-[350px] md:text-left">
        Our Partners & Friends
      </h1>

      <PartnersCarousel />
    </div>
  );
};

export default Partners;
