

import hat from "@/assets/Images/clientHat.png";

export default function Badge({ logo, name }) {

  return (
    <div className="relative w-40 h-32 md:w-48 md:h-36 mx-auto flex  items-center justify-center">
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-lime-500 to-green-600  " />
      <div className="relative z-10 flex h-30 w-60  items-center justify-center p-8 ">
        <img src={logo} alt={name} className=" w-full h-full object-contain overflow-hidden " />
      </div>

      <div className="absolute z-10 w-40 h-24 -top-3 -left-1">
        <img src={hat} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}