import useJson from "@/Hooks/useJson.js";
import Badge from "./Badge.jsx";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { useEffect } from "react";
export default function ClientsImg() {
  const { t, isArabic } = useJson();
  const rawClients = t("clients.images", { returnObjects: true });

const clients = Array.isArray(rawClients) ? rawClients : [];

  const track = [...clients, ...clients];
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const speed = 150;
useEffect(() => {
  x.set(0);
}, [isArabic, x]);
  useAnimationFrame((_, delta) => {
    if (isPaused || !trackRef.current || clients.length === 0) return;

    const halfWidth = trackRef.current.scrollWidth / 2;
    const direction = isArabic ? 1 : -1;
    let next = x.get() + direction * speed * (delta / 1000);

    if (direction === -1 && next <= -halfWidth) next += halfWidth;
    if (direction === 1 && next >= halfWidth) next -= halfWidth;

    x.set(next);
  });

  if (clients.length === 0) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#17393F] via-[#2C4E4B] to-[#5D7C60] py-16 my-5">
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px border-t-2 border-dashed border-white/30 z-0" />

      <motion.div
        ref={trackRef}
        className="flex w-max gap-10 px-5"
        style={{ x }}
        onHoverStart={() => setIsPaused(true)}
        onHoverEnd={() => setIsPaused(false)}
      >
        {track.map((client, index) => (
          <div key={`${client.id}-${index}`} className="shrink-0">
            <Badge logo={client.logo} name={client.name} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
