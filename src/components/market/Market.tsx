import Image from "next/image";
import Link from "next/link";
const Market = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="mb-8">
        <h1 className="primaryHeader text-center">Crypto Market Making</h1>
      </div>
      <p className="text text-center px-4 mb-8 mx-auto max-w-[400px] md:max-w-[500px]">
        Our fully automated proprietary quantitative trading software provides
        24/7 liquidity to 200+ digital assets across 25+ centralized spot and
        derivative crypto exchanges.
      </p>

      <div className="w-full flex flex-col my-32 justify-center md:flex-row-reverse md:items-center">
        <div className="relative w-40 h-40  mx-auto   md:top-8">
          <div className="relative w-40 h-40">
            <Image
              alt=""
              src="/boxes/token-1.png.svg"
              width={1000}
              height={1000}
              className="object-cover absolute z-50 w-24 h-24 right-8 -top-14
              animate-bounce animate-duration-[4000ms] animate-ease-linear
              "
            />
            <Image
              alt=""
              src="/boxes/table-1.png.svg"
              width={1000}
              height={1000}
              className="absolute z-40"
            />
            <Image
              alt=""
              src="/boxes/bar-1.png.svg"
              width={1000}
              height={1000}
              className="absolute z-30 h-48"
            />
          </div>

          <div className="relative w-20 h-20 left-28 bottom-14">
            <Image
              alt=""
              src="/boxes/token-2.png.svg"
              width={1000}
              height={1000}
              className="object-cover absolute z-50 w-16 h-16 -top-8 right-2
              animate-bounce animate-duration-[5000ms] animate-ease-linear
              "
            />
            <Image
              alt=""
              src="/boxes/table-2.png.svg"
              width={1000}
              height={1000}
              className="object-cover absolute z-40  "
            />
            <Image
              alt=""
              src="/boxes/bar-2.png.svg"
              width={1000}
              height={1000}
              className="object-cover absolute z-30 h-20 "
            />
          </div>

          <div className="relative w-20 h-20 bottom-36 right-14">
            <Image
              alt=""
              src="/boxes/token-3.png.svg"
              width={1000}
              height={1000}
              className="object-cover absolute z-50 w-12 h-12 -top-8 right-4
              animate-bounce animate-duration-[6000ms] animate-ease-linear
              "
            />
            <Image
              alt=""
              src="/boxes/table-3.png.svg"
              width={1000}
              height={1000}
              className="object-cover absolute z-40"
            />
            <Image
              alt=""
              src="/boxes/bar-3.png.svg"
              width={1000}
              height={1000}
              className="object-cover absolute z-30 h-20 "
            />
          </div>

          <div className="relative w-20 h-20 bottom-80 right-14">
            <Image
              alt=""
              src="/boxes/token-4.png.svg"
              width={1000}
              height={1000}
              className="object-cover absolute z-50 w-12 h-12 -top-12 right-4
              animate-bounce animate-duration-[7000ms] animate-ease-linear
              "
            />
            <Image
              alt=""
              src="/boxes/table-4.png.svg"
              width={1000}
              height={1000}
              className="object-cover absolute z-40 -top-2"
            />
            <Image
              alt=""
              src="/boxes/bar-4.png.svg"
              width={1000}
              height={1000}
              className="object-cover absolute z-30  h-20"
            />
          </div>
        </div>

        <div className="z-50 mt-20 px-5  md:w-1/2">
          <h1 className="secondaryHeader text-center mb-4 md:text-left md:max-w-[450px]">
            Market Making for Crypto Projects
          </h1>
          <p className="textBold text-center mb-4 md:text-left md:max-w-[250px]">
            Accelerate your token’s journey by boosting its liquidity
          </p>
          <p className="text text-center md:text-left md:max-w-[300px]">
            We invest in building long-term, sustainable relationships and
            support our projects in their growth journey with our services,
            industry expertise and network.
          </p>

          <div className="group mx-auto md:ml-0 overflow-hidden relative flex items-center mt-4 w-fit -z-10  gradient bg-clip-text">
            <Link
              href="#"
              className="flex items-center text-transparent"
            >
              <p>Learn more</p>
              <p className="text-4xl ml-2 mb-1">→</p>
            </Link>
            <div
              className="absolute bottom-0 w-full h-[2px] gradient
            group-hover:translate-x-full transition-all duration-1000
            "
            />
          </div>




        </div>
      </div>
    </div>
  );
};

export default Market;
