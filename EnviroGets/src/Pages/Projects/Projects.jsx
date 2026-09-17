import { useState } from "react";
import ArticleList from "@/Components/ArticleList/ArticleList.jsx";
import useJson from "@/Hooks/useJson.js";
import useUrl from "@/Hooks/useUrl.js";
import useArticle from "@/Hooks/useArticle.js";



export default function Projects() {
    const { t, isArabic } = useJson();
    const { baseUrl } = useUrl();
    const { isValidImageStyle, findContent, getImageClass, logoClass } = useArticle();


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
        <div className="grid grid-cols-1  items-center justify-center md:grid-cols-6 gap-6 pt-15 md:pt-28">
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
              <div className="pb-20">
                {!activeContent.image &&
                activeContent.logo &&
                !isValidImageStyle(activeContent.logo) ? (
                  // Logo only — show title and logo inline in one row
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-5">
                    <h2
                      className={`${isArabic ? "text-2xl md:text-4xl" : "font-roboto text-2xl text-center"} font-medium text-[#2C6FA0] `}
                    >
                      {activeContent.title || activeContent.slug}
                    </h2>
                    <img
                      src={`${baseUrl}/${activeContent.logo}`}
                      alt={`${activeContent.title || activeContent.slug} logo`}
                      className={logoClass}
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
                            className={`${logoClass} mt-5`}
                          />
                        )}
                    </div>
                    <h2
                      className={`${isArabic ? " text-2xl md:text-4xl" : "font-roboto text-2xl"} font-normal mb-5 text-[#2C6FA0]`}
                    >
                      {activeContent.title || activeContent.slug}
                    </h2>
                  </div>
                )}

                {/*======================== content ==================================== */}
                <div
                  className={`${isArabic ? "text-justify  font-semibold " : "font-roboto font-medium"} text-base md:text-lg space-y-4 leading-8 text-[#1A2E1D] `}
                >
                  {activeContent.intro && <p>{activeContent.intro}</p>}
                  {activeContent.intro2 && <p>{activeContent.intro2}</p>}
                  {activeContent.intro4 && <p>{activeContent.intro4}</p>}

                  {Array.isArray(activeContent.text) &&
                    (isBulleted ? (
                      <ul
                        className="list-inside text-[#1A2E1D] ps-6 space-y-2 text-justify"
                        style={{ listStyle: "square" }}
                      >
                        {activeContent.text.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    ) : (
                      activeContent.text.map((t, i) => <p key={i}>{t}</p>)
                    ))}

                  {activeContent.intro3 && <p>{activeContent.intro3}</p>}

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
