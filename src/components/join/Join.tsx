import Link from "next/link";

const Join = () => {
  return (
    <div className="relative flex flex-col my-8 w-fit max-w-[1280px] mx-auto justify-center md:items-start items-center space-y-8 px-5">
      <div className="hidden md:block absolute w-40 h-40 bg-blobMiddle blur-2xl -top-10 -z-10 left-10"/>
      <div className="hidden md:block absolute w-32 h-32 bg-blobRight blur-2xl -top-20 -z-10 left-40"/>
      <h1 className="primaryHeader text-center md:text-left">
        Join Gravity Team
      </h1>
      <p className="text text-center md:text-left md:max-w-[600px]">
        Join our community of innovators, problem solvers and owners who apply
        scientific discovery techniques to make crypto markets a better place
        for everyone.
      </p>
      <p className="text text-center md:text-left md:max-w-[600px]">
        As we emphasize it in our name – Gravity Team, we are a team. A team of
        bright, talented people, each masters of their specialty, curious about
        the world and eager to solve the new exciting cryptocurrency market
        problems, build cool stuff and have fun whilst doing so!
      </p>
      <div className="mx-auto md:ml-0 relative group gradient w-fit mt-4 bg-clip-text overflow-hidden">
        <Link href="#" className="flex items-center text-transparent">
          <p className="">Learn more about working with us</p>
          <p className="text-4xl ml-2 mb-1">→</p>
        </Link>
        <div
          className="absolute bottom-0 w-full h-[2px] gradient
            group-hover:translate-x-full transition-all duration-1000
            "
        />
      </div>
    </div>
  );
};

export default Join;
