const Contact = () => {
  return (
    <div className="flex flex-col justify-center max-w-[600px] text-center px-5 space-y-8 mx-auto py-20 relative">
      <div className="absolute w-64 h-28 bg-blobMiddle blur-3xl -left-80 -z-10" />
      <div className="absolute w-64 h-28 bg-blobLeft blur-3xl -right-40 top-20 -z-10" />
      <div className="absolute w-64 h-28 bg-blobRight blur-3xl -right-80 top-20 -z-10" />
      <h1 className="primaryHeader">Contact Us</h1>
      <p className="text">
        We are always open to discuss new value-adding partnerships. Do reach
        out if you are an exchange or a project looking for liquidity; an
        algorithmic trader or a software developer looking to improve the
        markets with us or just have a great idea you can’t wait to share with
        us!
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
  );
};

export default Contact;
