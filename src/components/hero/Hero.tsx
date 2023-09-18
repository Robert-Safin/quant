import CoinCarousel from "../CoinCarousel/CoinCarousel";

const Hero = async () => {
  return (
    <div className="h-[calc(100vh)] relative ">
      <div className="flex flex-col justify-center h-3/4 space-y-8 mx-auto md:max-w-[500px]">
        <div>
          <h1 className="primaryHeader text-center">Balancing</h1>
          <h1 className="primaryHeader text-center">Crypto Markets</h1>
        </div>
        <p className="text text-center px-4">
          Our fully automated proprietary quantitative trading software provides
          24/7 liquidity to 200+ digital assets across 25+ centralized spot and
          derivative crypto exchanges.
        </p>
        <button
          className="relative gradient px-6 py-3 w-fit mx-auto text-white z-20
      transitional-all group
      duration-1000

      "
        >
          <div className="transition-all opacity-0 group-hover:w-[158px] duration-1000 group-hover:opacity-100 absolute w-1 h-[46px] bg-bgBlack -z-10 left-[2px]  top-[1px]" />
          GET IN TOUCH
        </button>
      </div>

      <video
        src="/hero.mp4"
        muted
        loop
        autoPlay
        className="absolute -z-10 object-cover w-full h-1/2 -translate-y-1/2"
      />
      <div className="absolute bottom-0 w-full h-20 border bg-white">
        <CoinCarousel />
      </div>
    </div>
  );
};

export default Hero;
