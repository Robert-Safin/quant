import Image from "next/image";

const PartnersCarousel = () => {
  return (
    <div className="relative my-20 md:my-8">
      <div className="flex max-w-[1280px] h-[550px] overflow-hidden  justify-center mx-auto px-4 space-x-4 bg-bgBlack">
        <div className="w-[150px] flex flex-col  space-y-4  animate-moveY1 ">
          <div className="bg-gradient-to-t from-slate-900/25 to-slate-700/25 flex flex-col justify-center align-middle items-center min-w-[150px] min-h-[150px] border border-gray border-opacity-25 rounded-xl ">
            <Image
              src="/exchnages/binance.webp"
              width={150}
              height={150}
              alt=""
              className="w-[80px] h-[80px] rounded-xl p-2 object-cover"
            />

            <p className="text font-extralight text-xs text-gray/75 mt-3">BINANCE</p>
          </div>
          <div className="bg-gradient-to-t from-slate-900/25 to-slate-700/25 flex flex-col justify-center align-middle items-center min-w-[150px] min-h-[150px] border border-gray border-opacity-25 rounded-xl ">
            <Image
              src="/exchnages/bitbank.png"
              width={150}
              height={150}
              alt=""
              className="w-[80px] h-[80px] rounded-xl p-2 object-cover max-w-[150px] max-h-[150px]"
            />
            <p className="text font-extralight text-xs text-gray/75 mt-3">BITBANK</p>
          </div>
          <div className="bg-gradient-to-t from-slate-900/25 to-slate-700/25 flex flex-col justify-center align-middle items-center min-w-[150px] min-h-[150px] border border-gray border-opacity-25 rounded-xl">
            <Image
              src="/exchnages/bitfinex.png"
              width={150}
              height={150}
              alt=""
              className="w-[80px] h-[80px] rounded-xl p-2 object-cover"
            />
            <p className="text font-extralight text-xs text-gray/75 mt-3">BITFINEX</p>
          </div>
          <div className="bg-gradient-to-t from-slate-900/25 to-slate-700/25 flex flex-col justify-center align-middle items-center min-w-[150px] min-h-[150px] border border-gray border-opacity-25 rounded-xl">
            <Image
              src="/exchnages/bithumb.jpeg"
              width={150}
              height={150}
              alt=""
              className="w-[80px] h-[80px] rounded-xl p-2 object-cover"
            />
            <p className="text font-extralight text-xs text-gray/75 mt-3">BITHUMB</p>
          </div>
          <div className="bg-gradient-to-t from-slate-900/25 to-slate-700/25 flex flex-col justify-center align-middle items-center min-w-[150px] min-h-[150px] border border-gray border-opacity-25 rounded-xl">
            <Image
              src="/exchnages/bitso.png"
              width={150}
              height={150}
              alt=""
              className="w-[80px] h-[80px] rounded-xl p-2 object-cover"
            />
            <p className="text font-extralight text-xs text-gray/75 mt-3">BITSO</p>
          </div>
        </div>

        <div className="h-32 w-[120%] bg-bgBlack absolute z-30 -top-10 -right-10 blur-md" />
        <div className="h-32 w-[120%] bg-bgBlack absolute z-30 -bottom-10 -right-10 blur-md" />

        <div className="w-[150px] flex flex-col  space-y-4   animate-moveY2">
          <div className="bg-gradient-to-t from-slate-900/25 to-slate-700/25 flex flex-col justify-center align-middle items-center min-w-[150px] min-h-[150px] border border-gray border-opacity-25 rounded-xl">
            <Image
              src="/exchnages/bitstamp.png"
              width={150}
              height={150}
              alt=""
              className="w-[80px] h-[80px] rounded-xl p-2 object-cover"
            />
            <p className="text font-extralight text-xs text-gray/75 mt-3">BITSTAMP</p>
          </div>
          <div className="bg-gradient-to-t from-slate-900/25 to-slate-700/25 flex flex-col justify-center align-middle items-center min-w-[150px] min-h-[150px] border border-gray border-opacity-25 rounded-xl">
            <Image
              src="/exchnages/coinbase.jpeg"
              width={150}
              height={150}
              alt=""
              className="w-[80px] h-[80px] rounded-xl p-2 object-cover"
            />
            <p className="text font-extralight text-xs text-gray/75 mt-3">COINBASE</p>
          </div>
          <div className="bg-gradient-to-t from-slate-900/25 to-slate-700/25 flex flex-col justify-center align-middle items-center min-w-[150px] min-h-[150px] border border-gray border-opacity-25 rounded-xl">
            <Image
              src="/exchnages/kraken.jpeg"
              width={150}
              height={150}
              alt=""
              className="w-[80px] h-[80px] rounded-xl p-2 object-cover"
            />
            <p className="text font-extralight text-xs text-gray/75 mt-3">KRAKEN</p>
          </div>
          <div className="bg-gradient-to-t from-slate-900/25 to-slate-700/25 flex flex-col justify-center align-middle items-center min-w-[150px] min-h-[150px] border border-gray border-opacity-25 rounded-xl">
            <Image
              src="/exchnages/liquid.jpeg"
              width={150}
              height={150}
              alt=""
              className="w-[80px] h-[80px] rounded-xl p-2 object-cover"
            />
            <p className="text font-extralight text-xs text-gray/75 mt-3">LIQUID</p>
          </div>
          <div className="bg-gradient-to-t from-slate-900/25 to-slate-700/25 flex flex-col justify-center align-middle items-center min-w-[150px] min-h-[150px] border border-gray border-opacity-25 rounded-xl">
            <Image
              src="/exchnages/valr.webp"
              width={150}
              height={150}
              alt=""
              className="w-[80px] h-[80px] rounded-xl p-2 object-cover"
            />
            <p className="text font-extralight text-xs text-gray/75 mt-3">VALR</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;

// binance
// bitbank
// bithumb
// bitso
// kraken

// bitfinex
// coinbase
// bitstamp
// valr
// liquid
