import useJson from "@/Hooks/useJson.js";
import { motion } from "framer-motion";

export default function AboutImage() {
    const { t } = useJson();
    const images = t("about.images", { returnObjects: true });

    return (
        <>
            {/* container */}
            <div className="grid grid-cols-2 items-center justify-center md:grid-cols-3 gap-4 md:gap-8 ">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className={`w-36 h-60 rounded-3xl overflow-hidden
                        ${index === 0 ? "md:mb-16" : index === 1 ? "mb-0" : "mb-16"}`}
                        animate={{
                            y: index % 2 === 0 ? [0, -12, 0] : [0, 12, 0],
                            scale: [1, 0.92, 1],
                            // rotate: [-1, 1, -1],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.4,
                        }}
                    >
                        <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover rounded-[84px]"
                        />
                    </motion.div>
                ))}
            </div>
        </>
    );
}
