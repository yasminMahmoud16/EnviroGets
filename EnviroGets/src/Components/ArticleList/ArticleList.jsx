import useJson from "@/Hooks/useJson.js";
import { useState } from "react";

export default function ArticleList({
    mainTitle,
    list,
    activeId = "",
    onSelect,
}) {
    const { isArabic } = useJson();
    const [openIndex, setOpenIndex] = useState(null);


    return (
        <div className="flex flex-col">
            <div className="text-sm font-medium text-heading bg-neutral-primary-soft border-[0.5px] border-[#DBE1DD] xl:w-2xs">
                <p className="block w-full px-4 py-2 text-lg font-bold text-white bg-[#4B8C8F] border-b border-default rounded-t-base cursor-pointer text-center">
                    {mainTitle}
                </p>

                {Array.isArray(list) &&
                    list.map((item, index) => (
                        <div key={index}>
                            <button
                                type="button"
                                onClick={() => {
                                    if (item.content) {
                                        setOpenIndex(openIndex === index ? null : index);
                                        onSelect(item.content[0]); // show first sub-item's details automatically
                                    } else {
                                        onSelect(item.slug || item.subTitle);
                                    }
                                }}
                                className={`flex items-center tracking-wider
    ${isArabic ? "justify-start text-right" : "justify-start text-left"}
    text-sm leading-[1.65] font-bold w-full px-4 py-2
    cursor-pointer hover:bg-neutral-secondary-medium
    hover:text-fg-brand focus:outline-none
    ${activeId === (item.slug || item.subTitle) ? "text-fg-brand bg-neutral-secondary-medium" : "text-[#1A2E1D]"}
    ${index !== list.length - 1 ? "border-b-[0.5px] border-[#DBE1DD]" : ""}`}
                            >
                                {item.subTitle}
                            </button>

                            {openIndex === index && item.content && (
                                <ul>
                                    {item.content.map((specialization, i) => (
                                        <li
                                            key={i}
                                            onClick={() => onSelect(specialization)}
                                            className={`px-6 py-2 cursor-pointer hover:bg-neutral-secondary-medium ${activeId === specialization.trim()
                                                    ? "text-fg-brand"
                                                    : ""
                                                }`}
                                        >
                                            {specialization}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
}
