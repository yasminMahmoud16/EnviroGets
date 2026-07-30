import useJson from "@/Hooks/useJson.js";

export default function List({index, item, className="", classList=""}) {
      const { isArabic} = useJson();
    
    return (
      <>
        <ul
          className={` text-white  lg:text-justify ${isArabic ? "font-semibold text-base lg:text-lg" : "font-roboto font-normal md:text-sm lg:text-lg"} ${className}`}
          style={{ listStyleType: "square" }}
        >
          <li className={`${isArabic ? "" : ""} pb-2 ${classList}`} key={index}>
            {item}
          </li>
        </ul>
      </>
    );
}
