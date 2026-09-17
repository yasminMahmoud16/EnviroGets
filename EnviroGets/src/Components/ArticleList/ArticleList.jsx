import useJson from "@/Hooks/useJson.js";
import { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "@/assets/Icons/icon.js";
export default function ArticleList({
  mainTitle,
  list,
  activeId = "",
  onSelect,
}) {
  const { isArabic } = useJson();
  const [openIndex, setOpenIndex] = useState(null);
  const [activeParentIndex, setActiveParentIndex] = useState(null);

  return (
    <div className="flex flex-col mb-5">
      <div className="text-sm font-medium text-heading bg-neutral-primary-soft border-[0.5px] border-[#DBE1DD] xl:w-full">
        <p
          className={`${isArabic ? "" : "font-roboto"} block w-full px-4 py-2 text-lg font-bold text-white bg-[#4B8C8F] border-b border-default rounded-t-base cursor-pointer text-center`}
        >
          {mainTitle}
        </p>

        {Array.isArray(list) &&
          list.map((item, index) => (
            <div key={index}>
              <button
                type="button"
                onClick={() => {
                  if (item.content) {
                    const isOpen = openIndex === index;

                    setOpenIndex(isOpen ? null : index);
                    setActiveParentIndex(isOpen ? null : index);
                  } else {
                    onSelect(item.slug || item.subTitle);
                    setActiveParentIndex(null);
                  }
                }}
                className={`flex items-center justify-between gap-2 tracking-wider  
  ${isArabic ? "text-right" : "font-roboto text-left"}  
  text-xs leading-[1.65] font-bold w-full px-4 py-3  
  cursor-pointer hover:bg-neutral-secondary-medium  
  hover:text-fg-brand focus:outline-none  
  ${
    item.content && activeParentIndex === index
      ? // (!item.content && activeId === (item.slug || item.subTitle))
        "text-main bg-neutral-secondary-medium"
      : "text-[#1A2E1D]"
  }  
  ${index !== list.length - 1 ? "border-b-[0.5px] border-[#DBE1DD]" : ""}`}
              >
                <span>{item.subTitle}</span>
                {item.content ? (
                  isArabic ? (
                    <FaCircleArrowLeft
                      className={`shrink-0 text-lg transition-transform duration-300 ${
                        openIndex === index
                          ? "-rotate-90 text-main"
                          : "rotate-0 "
                      }`}
                    />
                  ) : (
                    <FaCircleArrowRight
                      className={`shrink-0 text-lg transition-transform duration-300 ${
                        openIndex === index ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  )
                ) : null}
              </button>

              {item.content && (
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <ul
                    className={`${isArabic ? "" : "font-roboto"} overflow-hidden `}
                  >
                    {item.content.map((specialization, i) => (
                      <li
                        key={i}
                        onClick={() => onSelect(specialization)}
                        className={`px-6 py-3 cursor-pointer hover:bg-neutral-secondary-medium border-b border-[#DBE1DD] ${
                          activeId === specialization.trim()
                            ? "text-fg-brand"
                            : ""
                        }`}
                      >
                        {specialization}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
