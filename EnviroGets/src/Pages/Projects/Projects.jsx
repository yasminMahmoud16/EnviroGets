import {  useState } from "react";
import ArticleList from "@/Components/ArticleList/ArticleList.jsx";
import useJson from "@/Hooks/useJson.js";
import useUrl from "@/Hooks/useUrl.js";
import useArticle from "@/Hooks/useArticle.js";

export default function Projects() {
  const { t, isArabic } = useJson();
  const { baseUrl } = useUrl();
  const { isValidImageStyle, findContent, getImageClass, logoClass } =
    useArticle();

  const list = t("projects.list", { returnObjects: true });
  const content = t("projects.content", { returnObjects: true });

    const getDefaultId = (list) => {
      if (Array.isArray(list) && list.length > 0) {
        const first = list[0];
        return first.content?.length
          ? first.content[0].trim()
          : first.slug || first.subTitle;
      }
      return null;
    };
  const [activeId, setActiveId] = useState(() => getDefaultId(list));
  const [prevIsArabic, setPrevIsArabic] = useState(isArabic);
  if (isArabic !== prevIsArabic) {
    setPrevIsArabic(isArabic);
    setActiveId(getDefaultId(list));
  }

  const activeContent = findContent(content, activeId);
  const isBulleted = activeContent?.["text-Type"] === "bulted";

  return (
    <section className="min-h-screen px-8">
      <div className="grid grid-cols-1  justify-center md:grid-cols-6 gap-6 pt-15 md:pt-28">
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
                    className={`${isArabic ? "text-2xl md:text-4xl" : "font-roboto text-2xl text-center"} font-medium text-main `}
                  >
                    {activeContent.title || activeContent.slug}
                  </h2>
                  <img
                    src={`${baseUrl}/${activeContent.logo}`}
                    loading="lazy"
                    alt={`${activeContent.title || activeContent.slug} logo`}
                    className={logoClass}
                  />
                </div>
              ) : (
                // Image (with or without logo) — keep block layout
                <div>
                  <div className="flex items-start gap-8 ">
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
                            loading="lazy"
                            src={`${baseUrl}/${image}`}
                            alt={activeContent.title || activeContent.slug}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        ))}
                      </div>
                    )}

                    {activeContent.logo &&
                      !isValidImageStyle(activeContent.logo) && (
                        <img
                          src={`${baseUrl}/${activeContent.logo}`}
                          loading="lazy"
                          alt={`${activeContent.title || activeContent.slug} logo`}
                          className={`${logoClass} mt-5`}
                        />
                      )}
                  </div>
                  <h2
                    className={`${isArabic ? " text-2xl md:text-4xl font-normal" : "font-roboto font-normal text-2xl md:text-4xl leading-14"}  mb-5 text-main`}
                  >
                    {activeContent.title || activeContent.slug}
                  </h2>
                </div>
              )}

              {/*======================== content ==================================== */}
              <div
                className={`${
                  isArabic
                    ? "text-justify font-semibold text-base md:text-lg"
                    : "font-roboto font-semibold text-xl"
                }  space-y-4 leading-8 text-[#1A2E1D]`}
              >
                {Object.entries(activeContent).map(([key, value]) => {
                  // ignore the content dose not in the text json 
                  if (
                    ![
                      "intro",
                      "intro2",
                      "intro3",
                      "intro4",
                      "text",
                      "text2",
                      "end",
                      "end2",
                    ].includes(key)
                  ) {
                    return null;
                  }

                  // display the array as list or paragraph
                  if (Array.isArray(value)) {
                    return isBulleted ? (
                      <ul
                        key={key}
                        className="list-inside text-[#1A2E1D] ps-6 space-y-2 text-justify"
                        style={{ listStyle: "square" }}
                      >
                        {value.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <div key={key} className="space-y-4">
                        {value.map((item, i) => (
                          <p key={i}>{item}</p>
                        ))}
                      </div>
                    );
                  }

                  // normal paragraph
                  return value ? <p key={key}>{value}</p> : null;
                })}
              </div>
            </div>
          ) : (
            activeId && (
              <p className="text-neutral-500">
                {isArabic
                  ? "اختر عنصرًا لعرض التفاصيل."
                  : "Select an item to view the details"}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
