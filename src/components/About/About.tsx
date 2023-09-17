const About = () => {
  return (
    <div className="px-5">
      <h1 className="primaryHeader text-center mt-32 mb-8">About Our Team</h1>
      <p className="text text-center max-w-[500px] mx-auto">
        We are on the mission to balance the supply and demand across crypto
        markets worldwide. We are a crypto native market maker founded by
        traders, developers, and innovators who are strong believers and
        supporters of the future of decentralization and digital assets.
      </p>

      <div className=" relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-16 max-w-[1050px] mx-auto">
        <div className="-z-10 absolute w-full h-full gradient"/>

        <div className="py-4 bg-bgBlack m-[1px] hover:gradient">
          <h2 className=" mb-4 secondaryHeader text-center">~$150 billion</h2>
          <p className="text text-center max-w-[160px] mx-auto">cumulative trading volume to date</p>
        </div>

        <div className="py-4 bg-bgBlack m-[1px] hover:gradient">
          <h2 className=" mb-4 secondaryHeader text-center">~40</h2>
          <p className="text text-center max-w-[160px] mx-auto">Gravity Teammates (& growing)</p>
        </div>

        <div className="py-4 bg-bgBlack m-[1px] hover:gradient">
          <h2 className=" mb-4 secondaryHeader text-center">2017</h2>
          <p className="text text-center max-w-[160px] mx-auto">start, crypto-natives</p>
        </div>

        <div className="py-4 bg-bgBlack m-[1px] hover:gradient">
          <h2 className=" mb-4 secondaryHeader text-center">24/7</h2>
          <p className="text text-center max-w-[160px] mx-auto">liquidity</p>
        </div>

        <div className="py-4 bg-bgBlack m-[1px] hover:gradient">
          <h2 className=" mb-4 secondaryHeader text-center">0.8%</h2>
          <p className="text text-center max-w-[160px] mx-auto">
            of the global crypto spot trading volume
          </p>
        </div>

        <div className="py-4 bg-bgBlack m-[1px] hover:gradient">
          <h2 className=" mb-4 secondaryHeader text-center">25+</h2>
          <p className="text text-center max-w-[160px] mx-auto">
            leading global and local crypto exchanges
          </p>
        </div>

        <div className="py-4 bg-bgBlack m-[1px] hover:gradient">
          <h2 className=" mb-4 secondaryHeader text-center">1,200+</h2>
          <p className="text text-center max-w-[160px] mx-auto">crypto-asset pairs</p>
        </div>

        <div className="py-4 bg-bgBlack m-[1px] hover:gradient">
          <h2 className=" mb-4 secondaryHeader text-center">~200 mil</h2>
          <p className="text text-center max-w-[160px] mx-auto">trades done to date</p>
        </div>
      </div>
    </div>
  );
};

export default About;
