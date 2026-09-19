import useJson from "@/Hooks/useJson.js";


export default function AboutArticle() {
  const { t, isArabic } = useJson();
  const aboutText = t("about.article", { returnObjects: true });

  return (
    <>
      {/* container */}
      <div
        className=" relative   mt-25 "
      >
        {/* Article */}
        <div className=" lg:w-6xl flex flex-col  gap-6 justify-center">
          <div className="bg-linear-to-b from-[#378BC8]  to-[#2C6FA0] w-35 h-15 md:w-45 md:h-15 rounded-xl flex  items-center justify-center ">
            <h3
              className={`${isArabic ? "font-bold text-xl md:text-2xl" : "font-roboto font-semibold  text-xl md:text-2xl"} text-white`}
            >
              {t("about.title")}
            </h3>
          </div>
          <div className="text-white text-justify">
            {aboutText.map((item,i) => (
              <p
                key={i}
                className={`${isArabic ? "text-xl font-bold " : "font-roboto text-base md:text-xl font-bold"} text-white leading-8 pb-6 tracking-wider whitespace-break-spaces`}
              >
                {item.text.includes("بتصنيف (A)") ||
                item.text.includes("Category (A)") ? (
                  <>
                    {item.text.includes("بتصنيف (A)") ? (
                      <>
                        {item.text.split("بتصنيف (A)")[0]}
                        <span className="text-[#66FF53] underline underline-offset-2 font-bold">
                          بتصنيف (A)
                        </span>
                        {item.text.split("بتصنيف (A)")[1]}
                      </>
                    ) : (
                      <>
                        {item.text.split("Category (A)")[0]}
                        <span className="text-[#66FF53] underline underline-offset-2 font-bold">
                          Category (A)
                        </span>
                        {item.text.split("Category (A)")[1]}
                      </>
                    )}
                  </>
                ) : (
                  item.text
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
