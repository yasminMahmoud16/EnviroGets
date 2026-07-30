import { Card } from "flowbite-react";
import useJson from "@/Hooks/useJson.js";

export default function HomeCards() {
  const { isArabic, t } = useJson();

  const cards = t("home.homeCards", { returnObjects: true });
  const baseUrl = "http://localhost:5173/";

  return (
    <>
      <div className="py-3 px-10 mt-5 flex flex-col lg:flex-row items-center justify-center gap-4 ">
        {cards.map((card) => (
          <Card className=" w-full h-70 flex flex-col items-center justify-center dark:bg-transparent bg-linear-to-b from-[#F5F6F8/20]  to-[#ebebeb] border border-white dark:border-white rounded-3xl shadow-sm">
            <div className="flex items-center justify-center ">
              <img
                src={`${baseUrl}${card.image}`}
                alt={card.title}
                className=" object-cover"
              />
            </div>
            <h5
              className={`${isArabic ? "text-3xl font-semibold font-roboto " : "font-roboto font-extrabold text-2xl tracking-wider"}  tracking-tight text-[#2C6FA0] dark:text-[#2C6FA0] text-center `}
            >
              {card.title}
            </h5>
            <p
              className={` ${isArabic ? "font-medium text-xl" : "text-xl font-normal text-left px-5"} font-roboto  text-[#2C6FA0] dark:text-[#2C6FA0] text-center`}
            >
              {card.text}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}
