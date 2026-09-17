import useJson from "@/Hooks/useJson.js";
import useUrl from "@/Hooks/useUrl.js";

export default function HomeCards() {
  const { isArabic, t } = useJson();

  const cards = t("home.homeCards", { returnObjects: true });
  const { baseUrl } = useUrl();

  return (
    <>
      <div className="py-3 px-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-full ${isArabic ? "h-55" : "h-65"}  flex flex-col gap-2 items-center justify-center
      dark:bg-transparent
      bg-linear-to-b from-[#F5F6F800] via-[#c3c3c5c8] to-[#90919270]
      border border-white dark:border-white rounded-3xl shadow-lg
      px-4`}
          >
            {/* Image */}
            <div className="h-20 flex items-center justify-center shrink-0">
              <img
                src={`${baseUrl}${card.image}`}
                alt={card.title}
                className="max-h-16 max-w-full object-contain"
              />
            </div>

            {/* Title */}
            <div className="h-12 flex items-center justify-center shrink-0">
              <h5
                className={`${
                  isArabic
                    ? "text-2xl font-extrabold"
                    : "font-roboto font-extrabold text-xl tracking-wider"
                } text-[#2C6FA0] text-center`}
              >
                {card.title}
              </h5>
            </div>

            {/* Text */}
            <div className="flex-1 flex items-start justify-center">
              <p
                className={`${
                  isArabic
                    ? "font-semibold text-base"
                    : "font-roboto text-base font-normal"
                } text-[#2C6FA0] text-center`}
              >
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
