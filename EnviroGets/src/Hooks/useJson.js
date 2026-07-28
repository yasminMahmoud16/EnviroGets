import { useTranslation } from "react-i18next";
import i18n from "../Utils/i18n/i18n.js";

export default function useJson() {
    const isArabic = i18n.language === "ar";
    const { t } = useTranslation();
    return { isArabic, t }
}
