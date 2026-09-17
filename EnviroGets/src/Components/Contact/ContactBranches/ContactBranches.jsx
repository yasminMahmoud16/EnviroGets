import useJson from "@/Hooks/useJson.js"

export default function ContactBranches() {
    const { isArabic, t } = useJson();
    const branches = t("contact.branshes", { returnObjects: true });
    return (
        <>
            <div className="flex flex-col  ">
                {branches.map((branch, index) => (
                    <div
                        key={index}
                        className={`w-[460px] border border-[#4FA14B] flex flex-col  items-start p-6 rounded-2xl mb-3 shadow-md text-[#2C6FA0] gap-2  ${isArabic ? "font-bold" : "font-roboto font-medium"} `}
                    >
                        <div className="w-16 h-12 ">
                            <img
                                src={branch.image}
                                alt="فروعنا"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p>{branch.name}</p>
                        <p>{branch.address}</p>
                        <div className="flex items-center gap-2">
                            <a
                                href={branch.locationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2"
                            >
                                <div className="w-4 h-4">
                                    <img
                                        src={branch.locationIcon}
                                        alt="الموقع"
                                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                                    />
                                </div>

                                <span className="text-[#249643] underline underline-offset-2 transition-all duration-300 group-hover:text-[#249642af]">
                                    {branch.location}
                                </span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
