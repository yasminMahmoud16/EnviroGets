import { useEffect, useRef, useState } from "react";

export default function useOpen() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
      useEffect(() => {
        function handleClickOutside(event) {
          if (navRef.current && !navRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
    return { isOpen, setIsOpen, navRef }
}
