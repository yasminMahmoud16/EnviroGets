import { useState } from "react";
import ArticleList from "@/Components/ArticleList/ArticleList.jsx";
import useJson from "@/Hooks/useJson.js";
import useUrl from "@/Hooks/useUrl.js";

function findContent(content, activeId) {
    if (!activeId) return null;
    const target = activeId.trim();
    return content.find((item) => {
        if (item.title && item.title.trim() === target) return true;
        if (item.slug && item.slug.trim() === target) return true;
        if (Array.isArray(item.text) && item.text.some((t) => t.trim() === target))
            return true;
        return false;
    });
}

const LOGO_CLASS = "h-16 w-auto object-contain mb-3";

function isValidImageStyle(value) {
    return ["large", "medium", "small"].includes(value);
}
const IMAGE_STYLE_CLASSES = {
    large: "w-96 max-h-[520px] object-cover rounded-lg",
    medium: " w-80  max-h-[256px]  rounded-lg",
    small: "w-full max-w-md  max-h-[240px] object-cover rounded-lg",
};

function getImageClass(imageStyle) {
    return IMAGE_STYLE_CLASSES[imageStyle] || "w-full object-contain rounded-lg";
}

export default function Projects() {
    const { t } = useJson();
    const { baseUrl } = useUrl();

    const list = t("projects.list", { returnObjects: true });
    const content = t("projects.content", { returnObjects: true });

    const [activeId, setActiveId] = useState(() => {
        if (Array.isArray(list) && list.length > 0) {
            const first = list[0];
            return first.content?.length
                ? first.content[0].trim()
                : first.slug || first.subTitle;
        }
        return null;
    });

    const activeContent = findContent(content, activeId);
    const isBulleted = activeContent?.["text-Type"] === "bulted";

    return (
        <section className="min-h-screen px-8">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-9 pt-28">
                <div className="col-span-2">
                    <ArticleList
                        mainTitle={t("projects.title")}
                        list={list}
                        activeId={activeId}
                        onSelect={setActiveId}
                    />
                </div>

                <div className="col-span-4">
                    {activeContent ? (
                        <div className="">
                            {!activeContent.image &&
                                activeContent.logo &&
                                !isValidImageStyle(activeContent.logo) ? (
                                // Logo only — show title and logo inline in one row
                                <div className="flex items-center gap-4 mb-5">
                                    <h2 className="text-2xl font-bold">
                                        {activeContent.title || activeContent.slug}
                                    </h2>
                                    <img
                                        src={`${baseUrl}/${activeContent.logo}`}
                                        alt={`${activeContent.title || activeContent.slug} logo`}
                                        className={LOGO_CLASS}
                                    />
                                </div>
                            ) : (
                                // Image (with or without logo) — keep block layout
                                <div>
                                    <div className="flex items-start gap-8">
                                        {activeContent.image && (
                                            <div
                                                className={`mb-6 space-y-4 ${getImageClass(activeContent.imageStyle)}`}
                                            >
                                                {(Array.isArray(activeContent.image)
                                                    ? activeContent.image
                                                    : [activeContent.image]
                                                ).map((image, index) => (
                                                    <img
                                                        key={index}
                                                        src={`${baseUrl}/${image}`}
                                                        alt={activeContent.title || activeContent.slug}
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {activeContent.logo &&
                                            !isValidImageStyle(activeContent.logo) && (
                                                <img
                                                    src={`${baseUrl}/${activeContent.logo}`}
                                                    alt={`${activeContent.title || activeContent.slug} logo`}
                                                    className={`${LOGO_CLASS} mt-5`}
                                                />
                                            )}
                                    </div>
                                    <h2 className="text-2xl font-bold mb-5">
                                        {activeContent.title || activeContent.slug}
                                    </h2>
                                </div>
                            )}

                            <div className="space-y-4">
                                {activeContent.intro && <p>{activeContent.intro}</p>}
                                {activeContent.intro2 && <p>{activeContent.intro2}</p>}

                                {Array.isArray(activeContent.text) &&
                                    (isBulleted ? (
                                        <ul className="list-disc ps-6 space-y-2">
                                            {activeContent.text.map((t, i) => (
                                                <li key={i}>{t}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        activeContent.text.map((t, i) => <p key={i}>{t}</p>)
                                    ))}

                                {activeContent.intro3 && <p>{activeContent.intro3}</p>}
                                {activeContent.intro4 && <p>{activeContent.intro4}</p>}

                                {Array.isArray(activeContent.text2) &&
                                    (isBulleted ? (
                                        <ul className="list-disc ps-6 space-y-2">
                                            {activeContent.text2.map((t, i) => (
                                                <li key={i}>{t}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        activeContent.text2.map((t, i) => <p key={i}>{t}</p>)
                                    ))}

                                {activeContent.end && <p>{activeContent.end}</p>}
                                {activeContent.end2 && <p>{activeContent.end2}</p>}
                            </div>
                        </div>
                    ) : (
                        activeId && (
                            <p className="text-neutral-500">
                                لا توجد تفاصيل متاحة لهذا العنصر بعد.
                            </p>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
