import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import LabServices from "@/Components/LabServices/LabServices.jsx";
import useJson from "@/Hooks/useJson.js";

export default function LabDetails() {
    const { t } = useJson();

    return <>
        <section className="min-h-screen bg-linear-to-b from-[#14363D] via-[#2E4E48] to-[#829E6D]">
            
            <div className="pt-30 px-8">

                <TitleSec title={t("labDetails.title")} className="text-white pb-4 text-4xl! " />
                <LabServices/>
            </div>
                    
                </section>
    </>
}
