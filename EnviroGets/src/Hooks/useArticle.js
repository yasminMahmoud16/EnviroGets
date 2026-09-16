
export default function useArticle() {

    const logoClass = "h-16 w-auto object-contain mb-3";
    const imageStyleClasses = {
        large: "w-full max-h-[520px] object-cover rounded-lg",
        medium: " md:w-60 lg:w-80 md:h-40 lg:h-[243px]  rounded-lg",
        small: "w-full max-w-md  max-h-[240px] object-cover rounded-lg",
    };



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
    

    function isValidImageStyle(value) {
        return ["large", "medium", "small"].includes(value);
    }
    
    function getImageClass(imageStyle) {
        return imageStyleClasses[imageStyle] || "w-full object-contain rounded-lg";
    }
  return {findContent, getImageClass, isValidImageStyle , logoClass}
}
