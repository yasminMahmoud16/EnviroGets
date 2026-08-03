import certificate1 from "@/assets/Images/certification1.webp";
import certificate2 from "@/assets/Images/certification2.webp";
import certificate3 from "@/assets/Images/certification3.webp";
import { useState } from "react";
export default function CertificationImg() {
    const [active, setActive] = useState(0);
    const certificates = [certificate2, certificate3, certificate1];
    return (
        <>
            {/* container */}
            <div className="flex  justify-center items-center gap-4 px-3 lg:gap-6 h-72 bg-linear-to-r from-[#17393F] via-[#2C4E4B] to-[#5D7C60] my-20">
                {certificates.map((img, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActive(index)}
                        onMouseLeave={() => setActive(2)}
                        className={`w-64 h-50 md:h-96 transition-all duration-500 cursor-pointer ${active === index ? "scale-110 z-10" : "scale-90 "
                            }`}
                    >
                        <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover "
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
