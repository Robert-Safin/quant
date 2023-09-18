import Image from "next/image";
import Link from "next/link";

const Exchange = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="flex flex-col  w-full  justify-center md:flex-row">
        <div className="relative min-w-[390px] min-h-[390px] mx-auto md:ml-0 bottom-14">
          <Image
            src="/phone.svg"
            width={1000}
            height={1000}
            alt=""
            className="absolute min-w-[390px] min-h-[390px]  mx-auto"
          />

          <Image
            src="/grid/binance-top.png.svg"
            width={1000}
            height={1000}
            alt=""
            className="absolute w-[22px] h-[22px] bottom-[122px] left-[84px] animate-bounce animate-duration-[3000ms]"
          />

          <Image
            src="/grid/bitkub-top.png.svg"
            width={1000}
            height={1000}
            alt=""
            className="absolute w-[13.5px] h-[13.5px] left-[121.9px] bottom-[64px] animate-bounce animate-duration-[2000ms]"
          />

          <Image
            src="/grid/bnb-top.png.svg"
            width={1000}
            height={1000}
            alt=""
            className="absolute w-[25px] h-[25px] left-[179px] bottom-[74px] animate-bounce animate-duration-[2500ms]"
          />

          <Image
            src="/grid/solana-top.png.svg"
            width={1000}
            height={1000}
            alt=""
            className="absolute w-[13px] h-[13px] left-[250px] bottom-[64px] animate-bounce animate-duration-[3500ms]"
          />
        </div>

        <div className="px-5">
          <h1 className="secondaryHeader text-center mb-4 md:text-left md:max-w-[450px] ">
            Market Making for Crypto Exchanges
          </h1>
          <p className="textBold text-center mb-4 md:text-left md:max-w-[350px]">
            Attract more traders and projects with deep order books & liquidity
          </p>
          <p className="text text-center md:text-left md:max-w-[300px]">
            Our world-class market making services are proven to help local and
            emerging exchanges win traders and gain market-leading positions of
            up to 90% market dominance.
          </p>



          <div className="mx-auto md:ml-0 relative group gradient w-fit mt-4 bg-clip-text overflow-hidden">
            <Link href='#' className="flex items-center text-transparent">
              <p className="">Learn more</p>
              <p className="text-4xl ml-2 mb-1">→</p>
            </Link>
            <div className="absolute bottom-0 w-full h-[2px] gradient
            group-hover:translate-x-full transition-all duration-1000
            "/>
          </div>






        </div>
      </div>
    </div>
  );
};

export default Exchange;
